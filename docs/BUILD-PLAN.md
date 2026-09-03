# Portfolio v2.0 — Build Plan

A phased plan to build the v2.0 portfolio. Working reference — not published.
See [DESIGN-NOTES.md](./DESIGN-NOTES.md) for the design principles and palette.

---

## Goal

Rebuild the portfolio as a clean, scannable, distinctive site that leads with the
Cognitive Science + design + healthcare story. Build on the blank v2.0 workspace
(`index.html` at root) while v1.0 stays live at `/v1.0/` via the version toggle.

---

## Technical decision: vanilla modern CSS (not MUI, not Bootstrap)

| Option | Verdict | Why |
|--------|---------|-----|
| **MUI** | ❌ No | React + build tooling + JSX; huge complexity jump; imposes Material Design (templated look); overkill for a content site; fights "code I can understand." |
| **Bootstrap** | ⚠️ Only as temporary scaffold | Fine grid, but generic defaults; you use little of it. Delete as you replace with CSS. |
| **Vanilla modern CSS + design tokens** | ✅ Recommended | Full control over type/spacing/color system (what makes it look crafted); zero deps; no build step; deploys as-is on GitHub Pages; fully understandable. |

**Approach:** CSS custom properties for tokens, CSS Grid + Flexbox for layout. Keep
Bootstrap linked only until each section is migrated, then remove it.

---

## Design system (do this before building pages)

Create `css/tokens.css` (loaded first, everywhere):
- **Color tokens** — from DESIGN-NOTES §6 ("Ink & Teal").
- **Type scale** — 14 / 16 / 20 / 24 / 32 / 48; body line-height 1.6, headings 1.2.
- **Spacing scale** — 8px base: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96.
- **Radius + shadow** — one card radius, one subtle shadow.
- **Container** — max readable width (~72ch for text, ~1100px for layout).

Then `css/base.css`: reset, base typography, links, focus states (visible!), images.

---

## Phases

### Phase 0 — Foundation
- [ ] Confirm tech decision (vanilla CSS)
- [ ] Create `css/tokens.css` and `css/base.css`
- [ ] Choose + load the two typefaces (Google Fonts)
- [ ] Sketch/wireframe landing + case-study template (low-fi)
- **Done when:** tokens render on a test page; type scale and colors look right.

### Phase 1 — Reusable pieces
- [ ] Top nav (sticky, minimal) + keep version toggle wired
- [ ] Footer (contact + social)
- [ ] Button styles (primary CTA + secondary)
- [ ] Project card component (consistent image ratio + height)
- [ ] **"Under Construction" placeholder** — see below
- **Done when:** nav/footer/cards look consistent and match tokens.

#### "Under Construction" placeholder
A reusable, on-brand placeholder to drop into any page that isn't finished yet, so
incomplete v2.0 pages look intentional instead of empty or broken.
- [ ] Build as a **reusable block** (shares nav + footer + tokens) that can be either a
      full-page state OR a section pasted into an in-progress page.
- [ ] On-brand styling using the palette (calm, not a jarring warning) — a short
      "This page is in progress" message + subtitle.
- [ ] Include a clear way back: a "View finished work" / "Back to home" CTA and a link
      to the live v1.0 version via the toggle, so visitors are never dead-ended.
- [ ] Keep it in one file (e.g. `under-construction.html`) and/or a copy-paste snippet,
      so marking a page "under construction" is a one-line include.
- [ ] Optional: a tiny CSS class (e.g. `.under-construction`) for a banner variant when
      only part of a page is unfinished.
- **Done when:** any unfinished page can be gated with the placeholder in under a minute,
      and it matches the site's look.

### Phase 2 — Landing page
- [ ] Hero: name + sharpened positioning line + photo + single "View Work" CTA
- [ ] Work grid: 2-column cards with one-line outcomes
- [ ] Bubble background on landing only
- **Done when:** above-the-fold communicates who you are + one clear path to work.

### Phase 3 — Flagship case study (depth > breadth)
- [ ] Build a reusable case-study template (TL;DR block, sections, image styles, "next project")
- [ ] Fully write + design ONE best case study (recommend: LinkedIn or a CliniComp-safe one)
- [ ] Include the "Key decisions & trade-offs" section
- **Done when:** one case study is genuinely excellent and reads top-to-bottom.

### Phase 4 — About + Contact
- [ ] About page: the cog-sci → MHCID → healthcare story, personality, resume link
- [ ] Contact surfaced in footer sitewide
- **Done when:** story is clear and reachable in one click from anywhere.

### Phase 5 — Remaining case studies
- [ ] Apply the template to the other 2–3 curated projects
- [ ] Cut weak projects rather than pad
- **Done when:** every visible project is one you'd be judged well by.

### Phase 6 — Polish & publish
- [ ] Accessibility pass: AA contrast, alt text, keyboard nav, focus states
- [ ] Responsive QA on phone + tablet + desktop
- [ ] Remove leftover Bootstrap + unused CSS/old files
- [ ] Performance: compress images, check load
- [ ] Merge `Enhance2026` → `main` to publish (v2.0 goes live at root)
- **Done when:** live site passes the scannability checklist (DESIGN-NOTES §5).

---

## Sequencing principle

Depth beats breadth: **one flagship case study done exceptionally well** out-performs
four thin ones. Build the system, then the landing, then go deep on one project before
scaling to the rest.

---

## Notes / open decisions
- Typeface pairing — pick in Phase 0 (see DESIGN-NOTES §7 options).
- Which project is the flagship? (Recommend the one with the clearest outcome/metrics.)
- Fate of the leftover v1.0 project pages currently at root — remove or rebuild in Phase 5/6.
