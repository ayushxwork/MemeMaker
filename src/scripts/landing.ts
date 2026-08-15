const UPLOAD_STORAGE_KEY = "mememaker.upload";

function shuffle<T>(arr: T[]): T[] {
	const out = [...arr];
	for (let i = out.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[out[i], out[j]] = [out[j], out[i]];
	}
	return out;
}

/** Shuffles the *content* of the fixed-position hero background slots on load. */
function shuffleHeroSlots() {
	const slots = Array.from(document.querySelectorAll<HTMLAnchorElement>(".hero-slot"));
	if (slots.length === 0) return;

	const entries = slots.map((slot) => ({
		href: slot.getAttribute("href") ?? "",
		src: slot.querySelector("img")?.getAttribute("src") ?? "",
		alt: slot.querySelector("img")?.getAttribute("alt") ?? "",
	}));

	const shuffled = shuffle(entries);

	slots.forEach((slot, i) => {
		const entry = shuffled[i];
		slot.setAttribute("href", entry.href);
		const img = slot.querySelector("img");
		if (img) {
			img.setAttribute("src", entry.src);
			img.setAttribute("alt", entry.alt);
		}
	});
}

/** Re-orders the template grid DOM nodes and wires up the Shuffle button. */
function initTemplatesGrid() {
	const gridEl = document.querySelector<HTMLElement>("[data-template-grid]");
	const shuffleBtn = document.querySelector<HTMLButtonElement>("[data-shuffle-btn]");
	if (!gridEl) return;

	function reshuffle(grid: HTMLElement) {
		const cards = Array.from(grid.children);
		const shuffled = shuffle(cards);
		shuffled.forEach((card) => grid.appendChild(card));
	}

	reshuffle(gridEl);
	shuffleBtn?.addEventListener("click", () => reshuffle(gridEl));
}

/** Wires up the hero upload dropzone: FileReader -> sessionStorage -> redirect to /edit. */
function initUploadDropzone() {
	const dropzone = document.querySelector<HTMLElement>("[data-dropzone]");
	const input = document.querySelector<HTMLInputElement>("[data-dropzone-input]");
	if (!dropzone || !input) return;

	function handleFile(file: File | undefined | null) {
		if (!file || !file.type.startsWith("image/")) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				sessionStorage.setItem(UPLOAD_STORAGE_KEY, String(reader.result));
			} catch {
				// sessionStorage may be unavailable (e.g. private mode quota); fall back silently.
			}
			window.location.href = "/edit?upload=1";
		};
		reader.readAsDataURL(file);
	}

	input.addEventListener("change", () => handleFile(input.files?.[0]));

	dropzone.addEventListener("click", () => input.click());

	dropzone.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			input.click();
		}
	});

	dropzone.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropzone.classList.add("border-ink", "bg-canvas-soft-2");
	});

	dropzone.addEventListener("dragleave", () => {
		dropzone.classList.remove("border-ink", "bg-canvas-soft-2");
	});

	dropzone.addEventListener("drop", (e) => {
		e.preventDefault();
		dropzone.classList.remove("border-ink", "bg-canvas-soft-2");
		handleFile(e.dataTransfer?.files?.[0]);
	});
}

shuffleHeroSlots();
initTemplatesGrid();
initUploadDropzone();


