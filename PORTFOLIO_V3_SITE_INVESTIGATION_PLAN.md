# Portfolio V3 — "Site Investigation" Implementation Plan

A geotechnical-survey design system for the existing Next.js portfolio. The
concept: the site is a **section drawing** you descend through. The cursor is a
**surveyor's reticle** that reads coordinates and casts dimension lines.
Projects are **core samples logged at depth**. Grounded in Alfred's civil /
geotechnical background — a direction no generic portfolio arrives at.

**Non-negotiable constraint:** keep all current data. `profile.ts` and
`projects.ts` stay the source of truth. No content is rewritten — only reframed
by the drawing metaphor and, where noted, *augmented* with optional fields that
default gracefully when absent.

Prototype of the signature interaction: the published artifact. Everything
below ports that into the real codebase and extends it across all pages.

---

## 0. Principles (so we don't over-build)

- **One bold thing.** The reticle + live dimensioning is the signature. Every
  other surface stays quiet: disciplined type, real spacing, minimal motion.
- **Native first, no new deps.** Pointer tracking = one `rAF` loop + CSS custom
  properties. Reveals = `IntersectionObserver`. No framer-motion, no GSAP, no
  cursor library. (Add one only if a specific effect measurably needs it.)
- **Progressive enhancement.** The site is fully readable and navigable with JS
  off, on touch, and with reduced-motion. The survey layer is decoration on top.
- **Data stays typed.** New visual fields are optional on the `Project` type.

---

## 1. Foundation: design tokens + fonts

**Files:** `src/app/globals.css`, `src/app/layout.tsx`

1. Replace the current palette with the token set (both themes), driven by
   `data-theme` on `<html>` plus `prefers-color-scheme` — the existing
   `ThemeToggle` already stamps `data-theme`, so wire tokens to it:
   - Dark (default): `--datum #0B0E12`, `--film #12161D`, `--line #29323F`,
     `--chalk #E9E5DA`, `--bedrock #7C899A`, `--survey #FF5A1F`, `--strata #CDA434`.
   - Light (manila): `--datum #D8D1C0`, `--film #CFC7B3`, `--line #A99E84`,
     `--chalk #191D24`, `--bedrock #5C6472`, `--survey #C4380F`, `--strata #7E6210`.
2. Fonts via `next/font` (self-hosted, no CDN, no layout shift):
   - **Display** — an expanded/wide grotesque for sheet-title headers
     (e.g. `Archivo` with expanded axis, or `Anton`/condensed for a stencil
     feel). Used uppercase, with restraint.
   - **Mono** — the annotation layer that sells the whole thing: `JetBrains
     Mono` or `Geist Mono` for every coordinate, depth, dimension, tag, label.
   - **Body** — a clean humanist sans (`Inter` is fine here since it's the quiet
     layer, or `Geist Sans`).
   Expose as CSS vars `--display`, `--mono`, `--sans`.
3. Add the fixed **sheet background** (survey grid + 4 registration marks) and
   the shared primitives: `.eyebrow`, `.stratum-label`, `.titleblock`,
   `.hatch` swatches. These become the vocabulary every page reuses.

**Check:** both themes legible, grid subtle (~34% opacity), no horizontal scroll.

---

## 2. The signature: `<SurveyLayer/>` client component

**New file:** `src/app/survey-layer.tsx` (`"use client"`), mounted once in
`layout.tsx` so it persists across route changes.

Renders three fixed, `pointer-events:none`, `aria-hidden` overlays:
- **Reticle** — crosshair + corner box + coordinate tag; tag re-labels to the
  nearest `.core[data-sample]` under the cursor via `elementFromPoint`.
- **Dimension lines** — horizontal + vertical rules to the sheet edges with tick
  terminators and `E`/`N` readouts positioned at the cursor.
- **Title-block HUD** (bottom-right) — `STATION` (live coords), `ELEV.` (scroll
  depth), `BEARING` (angle from sheet center), `STATE · LOGGING`.

Logic (ported verbatim from the prototype):
- Single `requestAnimationFrame` loop, lerped tracking (`ease 0.18`), writes
  `--mx` / `--my` to `:root`, self-parks when settled.
- Scroll handler maps progress → elevation for the HUD and the depth-gauge rail.
- **Guards:** mount effects only when `(hover:hover) and (pointer:fine)`; hide
  native cursor with `body.fine{cursor:none}`; when reduced-motion, snap instead
  of ease and drop trailing. On touch, the layer no-ops and the HUD renders as a
  static datum strip.

**Depth gauge** (`min-width:860px`) — left rail with elevation ticks and a
diamond cursor tracking scroll. Ties the "descent through strata" idea together.

**Check:** navigate between routes — the reticle stays alive, no double-mount,
no memory leak (clean up listeners in `useEffect` return).

---

## 3. Home page → the sheet header + core log

**File:** `src/app/page.tsx`

Reframe existing sections; keep every piece of data:
- **Hero** = drawing sheet header. Eyebrow `SITE INVESTIGATION · BOREHOLE BH-01
  · LAGOS NG`. Keep the real positioning line and the `profile` intro copy.
  Replace the `.stats` cards with a **title block** (Sheet / Scale / Datum /
  Drawn by) — same information density, drafting styling. Keep the résumé +
  GitHub actions.
- **Featured Work** → **Core Log**. Reuse the existing `featuredProjects` sort
  (live-first). Each project renders as a `.core` row: depth + hatch swatch +
  name + summary + tech tags + status pill, with the hover survey bracket +
  `SAMPLE 0X` callout. Keep the preview `Image` — show it inside the surveyed
  state (revealed on hover) so the log stays clean but the screenshot is one
  interaction away. Keep "View case study" link.
- **What I Build** (capabilities) → **Strata Legend**: the 4 capabilities as
  labelled strata with hatch keys. Same copy.
- **Recent Thoughts** (Medium) — keep the server fetch + fallback exactly as-is;
  restyle each item as a `LOG ENTRY` row (mono date, orange index).
- **Engineering Stack** — keep `stackGroups`; render each group as a titled
  material schedule block.
- **Contact CTA** → "Open a work order".

**Check:** the daily-revalidated Medium fetch + fallback still works; featured
sort unchanged; all four preview images still load.

---

## 4. Work index + case studies

**Files:** `src/app/work/page.tsx`, `src/app/work/[slug]/page.tsx`

- **Work index** → the full **borehole log**: all 14 projects as core rows in a
  continuous section, each stamped with a computed depth (index-derived) and a
  hatch pattern chosen from `categories[0]`. Keep status + category tags, keep
  live link, keep "View case study". `generateStaticParams` untouched → still
  fully SSG.
- **Case study** → a **single core-sample report**. Keep the exact structure —
  Overview / Problem / Solution / Engineering decisions + the details aside
  (Role / Status / Categories / Stack). Restyle as a logged sample sheet: a
  title block header, the decisions list as numbered log observations (numbering
  is legitimate here — they're an ordered record), a hatch/depth motif in the
  aside. All `project` fields render as today; metadata + OG untouched.

**Optional data augmentation (backwards-compatible):** add optional fields to
the `Project` type — `stratum?: "fill" | "sand" | "clay" | "rock"` and
`depth?: string`. When present, use them; when absent, derive from index +
`categories[0]`. No existing entry needs editing.

**Check:** all 14 `/work/[slug]` pages prerender; a project with `live:""`
(Evently) still renders without a live button.

---

## 5. About, Contact, Resume

**Files:** `src/app/about/page.tsx`, `contact/page.tsx`, `resume/page.tsx`

- **About** — the timeline is *already* a descent through time; render it as a
  **borehole log of the career** (Now → 2023 → 2019–2023 = increasing depth /
  older strata). Keep all copy verbatim. The civil→software transition is the
  literal thesis of the whole design — lean into it here with one honest line,
  no new fabricated bio.
- **Contact** — the three cards (Email / LinkedIn / GitHub) become **survey
  station markers**. Keep all `profile` links and aria-labels.
- **Resume** — keep as-is functionally; restyle the frame to match. (Read the
  file first before touching — I haven't reviewed it yet.)

**Check:** every `profile` link resolves; résumé PDF still downloads.

---

## 6. Nav, footer, motion polish

**File:** `src/app/layout.tsx`

- Restyle header/nav + mobile `<details>` menu in drafting vocabulary (mono
  labels, hairline `--line` dividers). Keep the existing links, `ThemeToggle`,
  and skip-link.
- **Fix the footer inconsistency:** header says "Alfred Adenigba", footer says
  "© 2026 Maylord". Pick one (recommend "© 2026 Alfred Adenigba · @maylord").
- **Page-load sequence** (once, reduced-motion-aware): datum lines draw in →
  title block settles → hero headline clip-reveals → HUD calibrates. Keep it
  under ~1.2s; it should feel like a plotter drawing the sheet, not a splash.

---

## 7. Sequencing & verification

1. Tokens + fonts + sheet background (§1) — visible foundation, low risk.
2. `SurveyLayer` + depth gauge (§2) — the signature, in isolation.
3. Home page core log (§3).
4. Work index + case study (§4).
5. About / Contact / Resume (§5).
6. Nav / footer / load sequence (§6).

After each step: `pnpm build` (must stay clean, all 22 routes prerender) and a
manual pass at 1440 / 768 / 375 widths, dark + light, plus one keyboard-only
tab-through for focus visibility.

**Definition of done**
- All current data present and correct across every page.
- `pnpm build` clean; site fully static as today.
- Works with JS disabled, on touch, and with `prefers-reduced-motion`.
- Lighthouse a11y ≥ existing; visible focus everywhere; grid/reticle never trap
  or block interaction (`pointer-events:none` on all overlays).

**Explicitly out of scope (YAGNI):** no CMS, no animation library, no new
routes, no rewriting project copy, no analytics. Add any of these only on
request.
