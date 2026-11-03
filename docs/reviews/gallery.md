# OFFHOUR — Design A gallery slice

2026-11-02 · BRAND-001 · [Issue #1](https://github.com/pranjalptll1210-alt/is117-brand-studio/issues/1) · `codex/brand-001-offhour`

## Change and product boundary

Learner selected Design A for its clarity and ease of shopping, then authorized a refined illustration gallery to improve product appeal. The storefront now uses the chosen dark modernist direction, a larger front illustration, a charcoal lighting stage and stronger soft shadow. Full front and Enlarged crop controls reframe the same artwork; the crop is explicitly labeled as such.

The original [white-shirt.svg](../../public/assets/white-shirt.svg) and comparison previews are unchanged. [white-shirt-refined.svg](../../public/assets/white-shirt-refined.svg) retains the original shirt, neckline and seam path geometry. Only framing, color gradients, ground shadow and presentation change. No additional product views, fabric texture, fit or construction facts are inferred. This is an illustration, not an actual product photograph. The $28 price remains explicitly fictional demo data.

## Implementation

- [Storefront](../../public/index.html), [shared tokens/styles](../../public/styles.css), [gallery behavior](../../public/gallery.js).
- [Live guide](../../public/styleguide.html) uses the same tokens, type, buttons, gallery script and image. Typeset OFFHOUR navigation is a placeholder pending original SVG logo review.
- Original [demo bag behavior](../../public/shop.js) is unchanged.
- [Studio styles](../../public/studio.css) use dark example/quote surfaces to maintain contrast after the shared palette changed.
- [Gallery browser tests](../../tests/browser/gallery.spec.js) exercise keyboard switching and retained size/bag state at desktop and narrow widths, plus a no-JavaScript illustration fallback.
- The asset reload assertion in [development tests](../../tests/browser/development.spec.js) now targets the refined SVG used by the storefront; it still asserts that changing a saved asset changes the loaded image dimensions.

## Actual verification

`npm run check` passed: formatting, HTML/CSS/JS lint, 7 server tests and 13 Chromium browser tests, including axe scans of storefront, guide and studio. An initial sandbox run could not bind localhost. The authorized run exposed a studio quote-panel contrast failure after palette changes; changing the white panel to the shared charcoal surface fixed it, and the complete rerun passed. Rules and existing assertions were not lowered.

Agent visually inspected all three pages at 1440×1000 and 375×812; no horizontal overflow was observed. Storefront and guide share the same current font families, color roles, primary action, typeset name, voice and refined artwork. Gallery controls remain legible; crop mode visibly enlarges the same illustration. The studio remains the assignment overview and retains its teaching-template placeholder identity.

One concrete new test: select M and add it (bag count 1), activate Enlarged crop with Enter, and assert the bag is still 1, M is still selected, the image source is unchanged, the crop state is active and the caption identifies the crop. Return to Full front with Space and assert the full framing returns. Passed at both tested widths. Learner interpretation has not yet been collected.

Screenshots: [storefront desktop](gallery-desktop.jpg), [crop desktop](gallery-crop-desktop.jpg), [storefront mobile](gallery-mobile.jpg), [guide desktop](styleguide-desktop.jpg), [guide mobile](styleguide-mobile.jpg), [studio desktop](studio-desktop.jpg), [studio mobile](studio-mobile.jpg).

## Remaining

Learner post-change browser observations are pending. Passing automation is not complete accessibility proof or evidence of brand fit. Original SVG logo, unresolved brief/persona adoption, two ethical persuasion decisions, learner test discussion and keyboard/mobile observations, learning-record review, commit/PR and merge remain pending. No deployment, commit, push or merge performed for this slice.
