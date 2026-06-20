# gorgon.live

Personal landing page and project hub, served via GitHub Pages at [gorgon.live](https://gorgon.live).

---

## Contents

| File | Purpose |
|---|---|
| `index.html` | Landing page |
| `medusa.png` | Caravaggio's *Medusa* (c. 1597, Uffizi) — circular crop, transparent background |
| `nav.js` | Optional site-wide nav bar injected into project sub-repos |

---

## nav.js

Project repos hosted as GitHub Pages subdirectories can load `nav.js` to show a slim `← gorgon.live` bar at the top. It appears only when served under the domain — loading a tool file locally does nothing, no errors. If a tool has its own sticky bar, `nav.js` detects the bar's height and nudges the tool's bar down automatically.

To add it to a project, place these lines immediately before `</body>`:

```html
<script src="../nav.js" onerror="void 0"></script>
<script>
// Adjust any sticky/fixed tool bar for the gorgon nav height
(function () {
  var gnav = document.getElementById('gorgon-nav');
  var toolbar = document.querySelector('.your-toolbar-class');
  if (gnav && toolbar) toolbar.style.top = gnav.offsetHeight + 'px';
}());
</script>
```

---

## Projects

### Productivity Apps

| Repo | Live URL | Description |
|---|---|---|
| [rank](https://github.com/countbrackmoor/rank) | [gorgon.live/rank/](https://gorgon.live/rank/) | Pairwise comparison prioritizer — stack-rank any list head-to-head |
| [office-tracker](https://github.com/countbrackmoor/office-tracker) | [gorgon.live/office-tracker/](https://gorgon.live/office-tracker/) | Hybrid work attendance tracker with overlapping requirement periods |
| [OneSpan--Span-Labeling-Tool](https://github.com/countbrackmoor/OneSpan--Span-Labeling-Tool) | [gorgon.live/OneSpan--Span-Labeling-Tool/](https://gorgon.live/OneSpan--Span-Labeling-Tool/) | Span labeling annotation server for NLP datasets (FastAPI backend, Kubeflow/JupyterLab) |
| [playlistur](https://github.com/countbrackmoor/playlistur) | [gorgon.live/playlistur/](https://gorgon.live/playlistur/) | YouTube playlist builder via undocumented `watch_videos?video_ids=` endpoint — no OAuth |

### Game Apps

| Repo | Live URL | Description |
|---|---|---|
| [NMS-guide-tool](https://github.com/countbrackmoor/NMS-guide-tool) | [gorgon.live/NMS-guide-tool/](https://gorgon.live/NMS-guide-tool/) | No Man's Sky Traveller's Codex — seven-module fan reference (Beacon/Voyagers era) |
| [horrifiedTool](https://github.com/countbrackmoor/horrifiedTool) | [gorgon.live/horrifiedTool/](https://gorgon.live/horrifiedTool/) | New player toolkit for Horrified: D&D — 11 modules, persistent pace tracker |

---

## Stack

Pure HTML/CSS/JS. No framework, no build step. Fonts via Google Fonts CDN. Each project repo is independently deployable as a static site.
