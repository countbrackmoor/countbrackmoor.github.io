# SUMMARY — gorgon.live

*Compiled 4 August 2026. Sources: hub `index.html` and `CHANGELOG.md`, per-repo READMEs, and the module files themselves.*

---

## Page 1 — gorgon.live

**Eight tools, one static host.**

gorgon.live is a personal landing page and project hub served from GitHub Pages, fronted by Cloudflare. It collects eight self-contained web tools — five productivity, three game — each living in its own repo and deployed independently at `gorgon.live/<repo>/`.

The through-line is a deliberate constraint: almost everything is a single HTML file with no build step, no accounts, and no backend. State, where it exists, lives in `localStorage`; data leaves the browser only when the user exports it. The hub itself is one `index.html` plus a shared `nav.js` that sub-tools load as `../nav.js` to get a slim "← gorgon.live" bar — and which silently does nothing when a file is opened locally.

### The eight modules

| Module | Route | What it is |
| --- | --- | --- |
| The System | `/theSystem/` | Solo Leveling–inspired self-improvement tracker |
| Rank | `/rank/` | Pairwise-comparison prioritizer for any list |
| Office Tracker | `/office-tracker/` | Hybrid-work attendance across overlapping periods |
| OneSpan | `/OneSpan--Span-Labeling-Tool/` | Span-labeling annotation server for NLP datasets |
| Playlistur | `/playlistur/` | YouTube URLs → shareable queue link, no OAuth |
| Traveller's Codex | `/NMS-guide-tool/` | No Man's Sky field manuals, Beacon & Voyagers era |
| Horrified Toolkit | `/horrifiedTool/` | New-player reference for Horrified: D&D |
| PokéTeamer | `/pokemon-team-builder/` | Type coverage & matchup analysis, Shield/Scarlet |

### At a glance

| | |
| --- | --- |
| **Stack** | HTML · CSS · vanilla JS. Two exceptions: OneSpan adds a Python/FastAPI backend, PokéTeamer uses React + Babel Standalone via pinned CDN. |
| **Identity** | Caravaggio's *Medusa* (c. 1597, Uffizi) as hero; Cormorant Garamond + Space Mono; ink `#0b0b0b`, gold `#c9a84c`, cream `#e8e6dc`. Each card carries its tool's own accent. |
| **Persistence** | Client-side only, except OneSpan's shared `dataset.json`. Most tools offer JSON or CSV export as the backup path. |
| **Status** | The hub says it plainly: *these tools are a work in progress — use at your discretion.* |

---

## Page 2 — Contents

Page order follows the hub's own layout: productivity apps first in the two-column grid, game apps below in stacked full-width cards.

**Front matter**

1. [gorgon.live](#page-1--gorgonlive) — the hub, the constraint, and the eight modules at a glance
2. Contents — this page

**Productivity apps**

3. [The System](#page-3--the-system) — Daily Quests, five stats, and penalties that actually bite
4. [Rank](#page-4--rank) — every pair compared once until an order emerges
5. [Office Tracker](#page-5--office-tracker) — a year of weekdays against overlapping requirement periods
6. [OneSpan](#page-6--onespan) — the one module with a server behind it
7. [Playlistur](#page-7--playlistur) — a queue link from an undocumented endpoint

**Game apps**

8. [No Man's Sky — Traveller's Codex](#page-8--no-mans-sky--travellers-codex) — long-form field manuals, each with its own atmosphere
9. [Horrified D&D Toolkit](#page-9--horrified-dd-toolkit) — eleven modules and a pace tracker that survives a refresh
10. [PokéTeamer](#page-10--pokéteamer) — coverage, matchups, and gap-filling suggestions

---

## Page 3 — The System

*Productivity · Module 1 · `gorgon.live/theSystem/`*

**A Solo Leveling–inspired self-improvement tracker where the fiction *is* the retention mechanic.**

The premise borrows the anime's conceit: an interface that assigns you Daily Quests and levels you up for completing them. Progression runs across five stats, and missing a quest carries a real penalty rather than a soft nudge — the stakes are what keeps the loop alive past week one. It sits first in the hub's productivity grid, marked with a cyan status-window glyph: a clipped-corner frame, three descending HP/MP/XP bars, and a level readout.

### What it does

- **Daily Quests** — a recurring set of tasks that reset on a daily cadence.
- **Five-stat progression** — completions feed named stats rather than one undifferentiated score.
- **Real penalties** — a missed day costs you something, by design.
- **JSON save** — import and export the whole save file to move between browsers or back it up.

| | |
| --- | --- |
| **Stack** | Pure HTML · localStorage |
| **Accent** | Cyan `rgba(95, 212, 255)` — the only cyan on the hub |
| **Added** | June 2026, positioned first in the productivity grid |
| **Repo** | `countbrackmoor/theSystem` |

> Adding this card put the productivity section at five, leaving an orphan in the two-column grid. The changelog logs that as accepted for now — a sixth tool or a compact mode resolves it later.

---

## Page 4 — Rank

*Productivity · Module 2 · `gorgon.live/rank/`*

**Give it any list — tasks, films, goals, decisions — and it stack-ranks them through head-to-head choices.**

Rank exists because people are bad at assigning weights and good at picking between two things. You paste a list, it shows you two items at a time, and you choose. Every unique pair is compared exactly once, which is n(n−1)/2 comparisons — shown as a live progress bar so the commitment is visible up front. A standings table updates after each pick, so the order takes shape while you work rather than arriving as a reveal at the end.

### What it does

- **Pairwise scoring** — binary choices only; final rank is total wins.
- **Live standings** — the table reorders in real time during the comparison phase.
- **Tie handling** — items with equal win counts are flagged as tied rather than ordered arbitrarily.
- **Edit & restart** — return to list entry with items preserved, or wipe and start fresh.

| | |
| --- | --- |
| **Stack** | Pure HTML · CSS · vanilla JS. Single file, no backend. |
| **Type** | Barlow Condensed · Karla · DM Mono |
| **Accent** | Lime green `#c8f72a` |
| **Persistence** | None — the session lives in memory |

---

## Page 5 — Office Tracker

*Productivity · Module 3 · `gorgon.live/office-tracker/`*

**Built for the specific pain of hybrid-work mandates: a minimum number of office days across rolling, overlapping date ranges.**

The hard part isn't counting days, it's that requirement windows stagger and overlap — "20 days between Feb 16 and May 15" running alongside a different window with its own target. A day inside both counts toward both. Office Tracker lays out every weekday of the year grouped by month, and puts colour-coded dots on each day showing which periods it feeds.

### What it does

- **Four-state days** — click to cycle: unmarked → ✓ in office → ✗ not in office → 🏖 exempt (holiday, PTO).
- **Overlapping periods** — any number of ranges, each with its own day target and colour.
- **Live progress bars** — green when a requirement is met, amber when a period ends unmet.
- **Period drawer** — add, edit, delete through a slide-in panel; click a period card to jump straight to it.
- **Export & import** — dated `.json` save files, with **replace** or **merge** on import.
- **Scoped resets** — clear only your ✓/✗ marks and keep holidays and periods, or wipe everything.

| | |
| --- | --- |
| **Stack** | Single HTML file · localStorage · works offline |
| **Accent** | Green `rgba(90, 170, 106)` |
| **Layout** | Four columns down to one on small screens |
| **Data** | Auto-saves as you click; nothing leaves the browser |

> Merge mode is the careful one: it only adds days you haven't already marked, and only periods whose IDs aren't already present. The README's standing advice is to export before any reset.

---

## Page 6 — OneSpan

*Productivity · Module 4 · `gorgon.live/OneSpan--Span-Labeling-Tool/`*

**A span-labeling annotation server for NLP datasets — the one module on the hub with a real backend.**

Everything else here is a file you open. OneSpan is a FastAPI server you run, because the point is a shared dataset: several annotators hit the same URL and read and write the same `dataset.json`. It's shaped for Kubeflow and JupyterLab, where traffic is proxied through the notebook host, so the access pattern is `/user/<username>/proxy/8765/`.

### How persistence works

- **Load** — the browser fetches `GET /data` and gets the full registry JSON.
- **Save** — every change POSTs `{ datasets, activeDatasetId }` back to `/data`.
- **Debounced 600 ms** — rapid typing doesn't flood the server.
- **Atomic writes** — written to `.tmp` then renamed, so a crash mid-write can't corrupt the dataset.
- **Write lock** — concurrent saves can't race each other.

| | |
| --- | --- |
| **Stack** | Python · FastAPI · single-file HTML UI |
| **Port** | `8765` by default |
| **Config** | `PORT`, `DATA_FILE`, `HTML_FILE` — all environment variables |
| **Accent** | Warm gold `rgba(232, 201, 106)` |
| **Longevity** | Run under `nohup` or `screen` to survive the terminal closing |

---

## Page 7 — Playlistur

*Productivity · Module 5 · `gorgon.live/playlistur/`*

**Paste a pile of YouTube URLs, get a shareable queue link. No login, no OAuth, no backend.**

Playlistur parses video IDs out of whatever YouTube URL format you throw at it and assembles them into a `watch_videos?video_ids=` link — an undocumented endpoint that opens the whole set as a queue. Accepted forms: `watch?v=`, `youtu.be/`, `shorts/`, `embed/`, and bare 11-character IDs. Duplicates are stripped automatically.

### Turning the queue into a saved playlist

1. Open the generated link — the videos load as an unlisted queue.
2. Add any recommended video to the queue (hover → ⋮ → **Add to queue**).
3. A **Save** button appears at the top of the queue panel — click it and name the playlist.
4. Delete the throwaway video you added in step two.

| | |
| --- | --- |
| **Stack** | Single HTML file · vanilla JS · no dependencies |
| **Accent** | Red `rgba(230, 48, 48)` |
| **Persistence** | None — the page resets on reload |
| **Roadmap** | An **API Mode** tab is stubbed in and marked WIP: an OAuth path that would create playlists directly via YouTube Data API v3, skipping the manual save dance. Blocked on Google API scope verification. |

> The step-by-step workaround exists because YouTube won't let you save a `watch_videos` queue directly. The four steps are the whole trick.

---

## Page 8 — No Man's Sky — Traveller's Codex

*Game · Module 6 · `gorgon.live/NMS-guide-tool/` · Beacon & Voyagers era, 2025*

**A fan-made field-manual collection, each manual a long-form deep dive with its own atmospheric UI.**

The Codex is written for travellers at every stage, from a first-time settlement Overseer to an Admiral running frigate expeditions. The hub index is a canvas starfield; each manual then commits to its own visual world — Settlements in deep void and neon cyan, Fleet Operations in riveted steel and amber, Commerce as a terminal-green grid, Vehicles in halftone and alert red.

### The manuals

- **Settlements** — claiming, building cycles, debt, Sentinel defence, population happiness.
- **Freighters & Frigates** — S-class hunting, freighter tech, fleet base building, frigate traits, expedition strategy.
- **Trading & Crafting** — the economy system, a sell-vs-keep ledger, Stasis Device chains, Runaway Mould nanite farming, passive income loops.
- **Ships** — all nine classes including Interceptors and Living Ships, plus Corvette fabrication.
- **Exocrafts** — every ground and sea vehicle, with upgrade adjacency bonuses.
- **Multi-Tools** — classes, slots, and upgrade layout.
- **Base Building** — the newest manual, added June 2026.

| | |
| --- | --- |
| **Stack** | Pure HTML · CSS · vanilla JS. Canvas starfield, animated CSS backgrounds, SVG illustration. Google Fonts is the only external call. |
| **Type** | Orbitron · Share Tech Mono · Cinzel · Bebas Neue |
| **Scope** | Fact-checked against Beacon and Voyagers updates (2025) |
| **Standing** | Unofficial fan project — not affiliated with or endorsed by Hello Games |

> **Worth fixing:** the repo now ships **seven** manual pages, but the repo README still describes four, and the hub card still reads "4 Manuals" and lists Settlements / Freighters / Trading / Ships. Base Building, Exocrafts, and Multi-Tools are live but invisible to anyone reading the hub.

---

## Page 9 — Horrified D&D Toolkit

*Game · Module 7 · `gorgon.live/horrifiedTool/`*

**The official rulebook is thorough but dense. This keeps new players unblocked mid-game, in one tab.**

It surfaces the rules people actually reach for at the table: what order to resolve things, who the monster moves toward, which items stack toward a defeat, how the Beholder's eye rays work. A sticky topbar keeps **Terror**, **deck count**, and the **Frenzy marker** visible at all times; the hub below is a grid of eleven module tiles.

### Eleven modules

| # | Module | What it does |
| --- | --- | --- |
| 1 | Turn Coach | Interactive walkthrough of your turn — tap where you are, get the right rule |
| 2 | Monster Card Walker | Step-by-step resolution for a drawn Monster card: Items → Event → Attack |
| 3 | Attack Resolver | Resolves POW before HIT, surfaces target priority and defense options |
| 4 | Hero Reference | Pick your Hero, roll d20, look up your ability result, bank effects |
| 5 | Movement Compass | Answers "who does this Monster move toward?" with a priority checker |
| 6 | Eye Ray Tracker | d20 → Beholder ray lookup, plus persistent eyestalk damage tracking |
| 7 | Monster Mats | All 5 monsters — Advance steps, Defeat conditions, rules notes |
| 8 | Item Lookup | Filter by colour, shape, strength, location; cumulative strength calculator |
| 9 | Lair Helper | Tracks the 4 lair tokens — hidden / revealed / blank |
| 10 | Setup Wizard | Players → monster selection → hero picks → printable checklist |
| 11 | Glossary | Searchable A–Z of every rule term used in the game |

| | |
| --- | --- |
| **Stack** | One self-contained HTML file — no CDN, no external requests |
| **Accent** | Deep purple `#0c0012` ground, `rgba(148, 60, 220)` accent, animated eight-eyestalk Beholder |
| **Persistence** | Terror, deck, frenzy, eyestalk damage, lair states, banked effects and monsters in play all survive a refresh |
| **Reset** | **New Game** wipes tracked state for a fresh session |
| **Standing** | Unofficial. No card text or artwork — mechanical summaries only. |

---

## Page 10 — PokéTeamer

*Game · Module 8 · `gorgon.live/pokemon-team-builder/`*

**Type coverage, matchup analysis, and gap-based suggestions for Pokémon Shield and Scarlet teams.**

Pick up to six Pokémon and PokéTeamer reports both sides of the type chart: defensive coverage against incoming attacks, and offensive coverage from STAB. From there it can name the gym leader, Elite Four member, or Champion you're about to face and break the fight down per Pokémon with a recommended lead — or rank the roster by how well each addition patches what your team is missing.

### What it does

- **Coverage** — full defensive and offensive type breakdown for the current six.
- **Matchup** — per-Pokémon analysis against a chosen opponent, with a lead recommendation.
- **Suggestions** — ranks candidates by weakness patched and gap closed, one click to add.
- **Auto-Build** — fills empty slots around whoever's already picked, or builds all six from scratch.
- **Export / import** — CSV or PNG out; CSV back in restores the team and the game it was built for, reporting names it can't match instead of dropping them silently.
- **Game switching** — swap Shield ↔ Scarlet and the team survives; unavailable picks are flagged and excluded from analysis, not cleared.

| | |
| --- | --- |
| **Stack** | Single-file page · React + Babel Standalone via CDN, version-pinned · html2canvas for image export · roster in `pokedex.js`, separate from app logic |
| **Summaries** | Each tab opens with plain-English **What the numbers say** (factual) and **What I'd do** (marked opinion). Rule-based and deterministic — no LLM call, no network request. |
| **Known limits** | Offensive analysis is STAB-only; base stats, abilities and held items aren't factored in. Opponent rosters are hand-compiled — a solid approximation, not gospel. |
| **Naming** | Repo and URL stay `pokemon-team-builder` for link stability; only the display name is PokéTeamer. |

> The pinned CDN versions are scar tissue: an unpinned Babel Standalone URL once rolled to a new major with a breaking default and took the whole page down.
