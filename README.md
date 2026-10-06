# dawidw.pl

Personal portfolio of Dawid Woźniak. Static HTML + Tailwind via CDN, no build.

- `index.html`: the whole page
- `theme.css`: design tokens (CSS variables), mirrors the `Colors` and `Spacing` collections in Figma
- `tailwind-config.js`: maps tokens and the `Landing/*` text styles to Tailwind classes
- `assets/`: photo, project previews, logos

Design: Figma file "dawidw.pl", frame `Landing v2 · 1440 dark`.

## Run locally

```bash
python3 -m http.server 8123
```

Then open http://localhost:8123.
