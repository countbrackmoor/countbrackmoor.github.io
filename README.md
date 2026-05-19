# gorgon.live

Personal landing page and project hub, served via GitHub Pages at [gorgon.live](https://gorgon.live).

## Contents

| File | Purpose |
|---|---|
| `index.html` | Landing page |
| `medusa.png` | Caravaggio's *Medusa* (c. 1597, Uffizi) — circular crop, transparent background |
| `nav.js` | Optional site-wide nav bar injected into project sub-repos |

## nav.js

Project repos hosted as GitHub Pages subdirectories can load `nav.js` to show a slim `← gorgon.live` bar at the top. It only appears when served under the domain — loading a tool file locally does nothing, no errors.

To add it to a project, place this line immediately before `</body>`:

```html
<script src="../nav.js" onerror="void 0"></script>
```

## Projects

- [NMS-guide-tool](https://github.com/countbrackmoor/NMS-guide-tool) — No Man's Sky Traveller's Codex, served at `gorgon.live/NMS-guide-tool/`
- [office-tracker](https://github.com/countbrackmoor/office-tracker) — Hybrid work attendance tracker, served at `gorgon.live/office-tracker/`
- [OneSpan--Span-Labeling-Tool](https://github.com/countbrackmoor/OneSpan--Span-Labeling-Tool) — Span labeling annotation server, served at `gorgon.live/OneSpan--Span-Labeling-Tool/`

## Stack

Pure HTML/CSS/JS. No framework, no build step. Fonts via Google Fonts CDN.
