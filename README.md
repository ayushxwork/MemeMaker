arch

# MemeMaker (Astro)

Astro project scaffolded with the `minimal` template.

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where Astro/React/Vue/Svelte/Preact components typically live.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

See `AGENTS.md` for development workflow notes (e.g. running the dev server in background mode).

## 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
