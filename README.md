# ozen docs

User guide for [ozen](https://github.com/ozenhq/ozen), the local meeting copilot for macOS.
Start reading at [src/introduction.md](src/introduction.md), or build the site:

```sh
cargo install mdbook   # once
mdbook serve --open    # live preview at http://localhost:3000
```

Live at <https://docs.ozenhq.com> (Cloudflare Pages project `ozen-docs`). Every push to `main` deploys;
pull requests get a preview URL. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Pages are plain Markdown under `src/`; the table of contents is [src/SUMMARY.md](src/SUMMARY.md).
When ozen changes behavior, update the page that describes it in the same week. Tunable values
(thresholds, intervals, limits) are linked to the ozen source rather than copied here.
