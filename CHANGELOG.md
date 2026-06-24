# Changelog — countbrackmoor.github.io (gorgon.live hub)

All notable changes to the gorgon.live landing page and shared assets (nav.js, hub `index.html`, hero image, hub README).
Dates are approximate — reflect the session in which the change was made, not necessarily deployment.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## 2026-06-23 — The System card added

### Added
- The System card in the Productivity Apps section (positioned first), with cyan radial gradient and custom status-window SVG glyph (clipped-corner frame, three descending HP/MP/XP bars, level indicator)
- Matching `.sc-system` CSS (cyan `rgba(95,212,255,0.08)` radial gradient)
- Inline cyan override on the card's `.sc-visual-label` to match the tool's signature accent

### Notes
- Productivity Apps section now contains 5 cards in a 2-column grid; orphan card on the third row is acceptable for now. Reorder or compact-mode is a future consideration if a 6th tool joins.
- The System lives at `countbrackmoor/theSystem` and routes to `/theSystem/` on gorgon.live.

---

## 2026-06-21 — Changelog established

### Added
- This CHANGELOG.md, reconstructed from past work sessions
- Project rule: changelog entries must be added in the same session as any module change (see project instructions)

---

## 2026-06-20 — Sectioned hub + Horrified card

### Added
- "Productivity Apps" and "Game Apps" section labels with horizontal rules
- Horrified D&D Toolkit card in the Game Apps section (deep purple `#0c0012`, accent `rgba(148,60,220)`, animated beholder SVG with eight eyestalks and pulsing central eye)
- Stacked `project-cards` layout for Game Apps containing NMS Traveller's Codex and Horrified

### Changed
- Small cards reordered to: Rank → Office Tracker → OneSpan → Playlistur
- Hub README updated to reflect both section groupings and the new horrifiedTool entry

### Fixed
- Horrified card href corrected from `/horrified-dnd/` to `/horrifiedTool/` after repo name clarified

---

## 2026-06-13 — Rank card added

### Added
- Rank card in the small-cards grid with lime green (`#c8f72a`) radial gradient and custom SVG glyph (ranked rows + cycling pairwise comparison indicator)
- Matching `.sc-rank` CSS

### Changed
- Small-cards order set to: Rank → Office Tracker → OneSpan

---

## 2026-06-05 — Playlistur card + readability pass

### Added
- Playlistur card after the Rank card; red aesthetic to match the tool, playlist-rows + play-button SVG glyph

### Changed
- `--dim` lifted from `#4a4a44` → `#6e6e66` (project-card dark text)
- `--steel` lifted from `#7a7a72` → `#9a9a92`
- Medusa hero image `max-width` raised from `300px` → `375px`

### Fixed
- Playlistur card href corrected from `/playlistur.html` → `/playlistur/` to match the repo-based Pages URL structure

---

## 2026-06-05 — Medusa resize

### Changed
- `.hero-image` `max-width`: `600px` → `300px`
- Mobile breakpoint value: `340px` → `170px`

---

## ~2026-06-02 — NMS card consolidation

### Changed
- NMS card title restructured so "No Man's Sky" sits prominently above "Traveller's Codex"
- Card tag updated to "Fan Guide · Beacon & Voyagers Era"

---

## Earlier — Pre-changelog baseline

The hub existed prior to the entries above with the following established before this log began:

- Single-file `index.html` hub with Cormorant Garamond + Space Mono, `#0b0b0b` background, gold `#c9a84c` accents, cream `#e8e6dc` text
- Caravaggio Medusa hero image (`medusa.png`)
- Initial small-cards grid containing Office Tracker and OneSpan
- NMS Traveller's Codex project card
- Shared `nav.js` referenced by subtools as `../nav.js` with `onerror="void 0"` silent fail
- Cloudflare DNS/proxy in front of GitHub Pages on `gorgon.live`

I don't have a reliable record of the initial hub commit, so this is described as a baseline rather than dated.
