# Portfolio Design Notes

Design observations and principles for Catherine Gu's portfolio (v2.0).
Working reference — not published to the live site.

---

## 1. Positioning (decide first — everything flows from it)

A recruiter reads one line in ~5 seconds. Make it **who + domain + evidence**, not generic.

- **Avoid:** "user-centric designer and researcher focused on clean and elegant interfaces" (pleasant but generic).
- **Aim for:** "UX designer & researcher blending cognitive science with design to make complex, high-stakes software (like clinical systems) genuinely usable."

**Your differentiator:** Cognitive Science → MHCID → healthcare (CliniComp). Research rigor + design craft + a high-stakes domain. Very few junior portfolios have this. Lead with it.

---

## 2. Content

**Landing (above the fold)**
- Name + sharpened positioning line
- Warm, professional photo
- ONE primary CTA: "View Work" — nothing competing with it
- No heavy decoration here; the value prop is the hero

**Selected Work — curate ruthlessly**
- 3–4 strong case studies beat 6 mediocre ones. Reviewers judge by your *weakest* visible project — cut anything you're lukewarm on.
- Each card: consistent thumbnail + title + **one-line outcome** (not a description) + role/context.
  - e.g. "Redesigned LinkedIn's job-application flow, cutting steps by 40%" > "Evaluating and redesigning LinkedIn's job application pages"

**Inside each case study (where you win or lose)**
1. **TL;DR block at the top** — problem, role, outcome, timeline. Understandable without scrolling.
2. Problem / challenge
3. Process — research → synthesis → ideation → design → validation
4. **Key decisions & trade-offs** — the senior-designer signal. Show one hard choice, the options, why you chose. Most portfolios skip this; it's the most valuable section.
5. Outcome & impact — metrics if available, qualitative evidence if not
6. Short reflection / what you'd do next

**About** — your story is the asset: Cognitive Science (research rigor) + MHCID (craft) + clinical software (high stakes). 3–4 sentences, some personality, resume link.

**Contact** — email + LinkedIn, reachable from the footer on every page.

**Push:** if any CliniComp/healthcare work can be shown (sanitized for NDA), include it. Enterprise + clinical UX is in demand and rare in junior portfolios.

---

## 3. Layout — structure for scanning

- **Case study body = single column**, ~65–75 characters per line, generous margins. Full-bleed images may break wider than the text column for rhythm.
- **Work grid:** 2-column cards. Consistent card height + image aspect ratio (inconsistency reads as sloppy faster than anything).
- **8px spacing system.** Pick a type scale (e.g. 14 / 16 / 20 / 32 / 48) and a spacing scale, and never deviate. Consistent vertical rhythm is ~80% of "looks designed."
- **Sticky, minimal top nav** (Work · About · Resume) + version toggle. In-page anchors on long case studies.
- **Mobile-first responsive** — many reviewers open portfolios on a phone.
- **"Next project"** link at the bottom of each case study to keep people moving.

---

## 4. Decoration — restraint is the flex

The work is the decoration; get out of its way.
- **Whitespace is the primary tool.** When in doubt, add more.
- **One accent color + a neutral scale.** Use the accent sparingly — links, one CTA, small highlights.
- **Two typefaces max**, chosen intentionally. Nail type scale + line-height and it looks premium.
- **Bubble background:** keep it on the landing only — off content-heavy pages where it competes with reading.
- **Consistent image treatment:** one style (corners, shadow, tint) applied everywhere.
- **Subtle motion only:** hover-scale on cards is good; gentle scroll fade-ins fine; nothing that delays reading.
- **Accessibility as a statement:** AA contrast, real alt text, keyboard-navigable, visible focus states. On-brand for a UX designer.

---

## 5. Scannability checklist

- [ ] Descriptive project titles + one-line outcomes
- [ ] TL;DR at the top of every case study
- [ ] Section headers, short paragraphs, bulleted key points
- [ ] Bold the key result/metric
- [ ] Meaningful image captions
- [ ] Clear single CTA per screen

---

## 6. Proposed color palette — "Ink & Teal"

Calm, trustworthy, research-and-healthcare-appropriate, and distinct from the generic bright blue. Warm off-white avoids a sterile feel; deep teal is the distinctive accent; coral is an occasional highlight used *sparingly*.

| Role | Name | Hex | Notes |
|------|------|-----|-------|
| Text / ink | Ink | `#1A2B33` | Near-black with a teal cast; body + headings |
| Muted text | Slate | `#5B6B72` | Captions, metadata, secondary text |
| Background | Paper | `#FBFAF7` | Warm off-white page background |
| Surface | White | `#FFFFFF` | Cards, panels |
| Hairline | Mist | `#E6E3DD` | Borders, dividers |
| Primary accent | Teal | `#0E7C86` | Links, primary CTA, small highlights |
| Accent (text-safe) | Deep Teal | `#0A5C64` | Use for small-text links to guarantee AA contrast |
| Highlight (sparingly) | Coral | `#E86A5C` | Occasional emphasis — a key metric, one hover |

**Ready-to-use CSS tokens:**

```css
:root {
  --color-ink:        #1A2B33;
  --color-slate:      #5B6B72;
  --color-paper:      #FBFAF7;
  --color-surface:    #FFFFFF;
  --color-hairline:   #E6E3DD;
  --color-teal:       #0E7C86;
  --color-teal-deep:  #0A5C64;
  --color-coral:      #E86A5C;
}
```

**Contrast note:** Ink on Paper is very high contrast (great). Teal `#0E7C86` on white passes AA for large text and UI; for small body-size links use Deep Teal `#0A5C64`.

*Alternative direction if you want warmer/more editorial: "Ink-Navy + Warm Coral" — navy `#1F2A44` text, coral `#E8674F` accent, cream `#FAF6EF` background.*

---

## 7. Typography direction

- Two typefaces max. Current Merriweather + Roboto is safe but reads a bit stock.
- Suggested feel: a **characterful serif or grotesk for headings** + a **clean, high-legibility sans for body**.
  - e.g. Headings: "Fraunces" or "Spectral" (serif) or "Space Grotesk" (grotesk); Body: "Inter" or "Source Sans 3".
- Type scale (px): 14 / 16 / 20 / 24 / 32 / 48. Body line-height ~1.6; headings ~1.2.
