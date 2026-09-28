# ozen docs

User guide for [ozen](https://github.com/ozenhq/ozen), the private meeting copilot for macOS.
Live at <https://docs.ozenhq.com>. Built with [Starlight](https://starlight.astro.build).

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # static site in dist/
```

- Pages: `src/content/docs/` (Markdown or MDX). Sidebar: `astro.config.mjs`.
- Interactive demos: `src/components/`. Brand colors: `src/styles/theme.css`.
- Deploys to Cloudflare Pages (`ozen-docs`) on every push to `main`; pull requests get a preview URL.
  See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Write for people who aren't developers: plain words, one task per page. Terminal commands, file formats and
the MCP API belong under `developers/`. When ozen changes behavior, update the page that describes it.
