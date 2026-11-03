# OFFHOUR — two original SVG logo proposals

BRAND-001 · [Issue #1](https://github.com/pranjalptll1210-alt/is117-brand-studio/issues/1) · `codex/brand-001-offhour`

## Learner feedback recorded

Learner reports reviewing the current hero, product gallery, editorial section, brand story and demo bag. They retain Design A, especially its dark colors, realistic mockups, bold typography and scrollable layout. They want to consider a different editorial image to avoid repeating the hero photograph. This request is recorded as an open refinement, not a chosen replacement. No new editorial image is generated in this slice.

## A — clean wordmark

[Original SVG](../../public/assets/logos/offhour-wordmark.svg) · [solid black SVG](../../public/assets/logos/offhour-wordmark-black.svg)

Original geometric OFFHOUR letterforms drawn as paths: rounded rectangular O counters, consistent weight and deliberate spacing. A full-name identifier supports the chosen design's clarity. The recognizable content is the name itself; there is no separate symbol. Its tradeoff is reduced flexibility in a tiny square space.

## B — O/H symbol plus name

[Original lockup SVG](../../public/assets/logos/offhour-monogram-lockup.svg) · [solid black lockup](../../public/assets/logos/offhour-monogram-lockup-black.svg) · [standalone symbol](../../public/assets/logos/offhour-monogram.svg) · [black symbol](../../public/assets/logos/offhour-monogram-black.svg)

An open octagonal O encloses an H and sits beside the same custom lettering. The open perimeter is an AI-proposed visual reference to independence and stepping outside a fixed frame, not a learner explanation. The standalone symbol can serve small square spaces; the name remains alongside it while recognition develops. The badge-like silhouette is more emblematic than A, but geometric initials are a familiar design language, so no uniqueness, audience recognition or trademark clearance is claimed.

## Actual review

[Live comparison](http://127.0.0.1:5173/explorations/logos.html) · [comparison HTML](../../public/explorations/logos.html) · [scoped review CSS](../../public/explorations/logos.css)

Both concepts use original vector paths without external fonts. Each has an off-white single-color version and a separately defined solid-black vector version; no grayscale filter is used. External SVG images include descriptive alternatives on the comparison page.

`npm run check` passed: formatting, HTML/CSS/JS lint, 7 server tests and 14 existing Chromium browser tests. Those existing browser journeys exercise storefront, guide and studio; they do not establish a preferred logo or automatically verify all aspects of logo design.

The in-app browser timed out during navigation/focus recovery even though the local page returned HTTP 200. The project's working Chromium was used in a temporary local visual-QA script to render the actual comparison page at 1440×1000 and 375×1000 and save screenshots. It confirmed every SVG loaded, navigation samples measured 180px wide, small lockups measured 110px, B's standalone symbol measured 24×24px, and neither page width overflowed. The agent then visually inspected both saved renders: the full name remains readable at the shown navigation/small widths; B's standalone H and surrounding O remain visible at 24px. A and B have clear light/dark silhouettes. At 110px B's name is smaller than A's because its symbol shares the width; use the standalone B symbol instead of shrinking the full lockup further.

Screenshots: [desktop comparison](logos-1440.png), [narrow comparison](logos-375.png).

## Selected logo and integration

Learner selected B: the separate symbol could be useful on tags, packaging and social media while retaining the recognizable name, and its geometry matches OFFHOUR's clean modern streetwear identity. These are the learner's intended uses/reasoning, not implemented packaging or evidence of audience recognition.

Learner requested slightly greater symbol/name spacing. The approved [shared lockup](../../public/assets/logos/offhour.svg) moves the name from x=90 to x=102 SVG units and widens the viewBox by 12 units; all letter/symbol geometry remains unchanged. The [black variant](../../public/assets/logos/offhour-black.svg) has the identical spacing. [Standalone approved symbol](../../public/assets/logos/offhour-symbol.svg). Original proposal files remain preserved.

The storefront navigation and live-guide navigation now load this same approved SVG. The guide also shows navigation-size, 110px small lockup, 24px standalone and true solid-black samples. The rest of the storefront design is unchanged in this integration slice.

The complete `npm run check` passed again: formatting/lint, 7 server tests and 14 browser tests. Agent inspected the updated guide at desktop and narrow widths, including the spacing and monochrome treatment. In-app browsing worked for the guide but then stalled on navigation; a temporary Chromium render check verified actual storefront/guide headers at 1440 and 375px: same source `assets/logos/offhour.svg`, measured width 180px, all images loaded and no horizontal overflow. Saved renders were visually inspected.

Evidence: [guide logo board](logo-approved-guide.jpg), [desktop storefront header](logo-approved-nav-1440.png), [mobile storefront header](logo-approved-nav-375.png).

Ethical persuasion choices, editorial replacement, remaining brief/persona decisions, learner test/keyboard/mobile review and publication workflow remain pending in SPEC.md. Work and unreviewed learning-record excerpts remain local and unstaged.
