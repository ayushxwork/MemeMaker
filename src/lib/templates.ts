export interface MemeTemplate {
	id: string;
	name: string;
	src: string;
	width: number;
	height: number;
}

export const TEMPLATES: MemeTemplate[] = [
	{ id: "drake", name: "Drake", src: "/templates/drake.svg", width: 900, height: 675 },
	{
		id: "distracted-boyfriend",
		name: "Distracted Boyfriend",
		src: "/templates/distracted-boyfriend.svg",
		width: 900,
		height: 675,
	},
	{ id: "two-buttons", name: "Two Buttons", src: "/templates/two-buttons.svg", width: 900, height: 675 },
	{ id: "this-is-fine", name: "This Is Fine", src: "/templates/this-is-fine.svg", width: 900, height: 675 },
	{ id: "doge", name: "Doge", src: "/templates/doge.svg", width: 900, height: 675 },
	{ id: "change-my-mind", name: "Change My Mind", src: "/templates/change-my-mind.svg", width: 900, height: 675 },
	{ id: "buff-doge", name: "Buff Doge vs. Cheems", src: "/templates/buff-doge.svg", width: 900, height: 675 },
	{ id: "cat-at-table", name: "Cat at the Table", src: "/templates/cat-at-table.svg", width: 900, height: 675 },
	{ id: "trollface", name: "Trollface", src: "/templates/trollface.svg", width: 900, height: 675 },
];

/** Deterministic-enough shuffle for client-side re-mixing. Fisher–Yates. */
export function shuffle<T>(arr: T[]): T[] {
	const out = [...arr];
	for (let i = out.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[out[i], out[j]] = [out[j], out[i]];
	}
	return out;
}
