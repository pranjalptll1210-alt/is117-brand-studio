# OFFHOUR — approved concept campaign

2026-11-02 · BRAND-001 · [Issue #1](https://github.com/pranjalptll1210-alt/is117-brand-studio/issues/1) · `codex/brand-001-offhour`

## Implemented scope

After the learner reported that the illustration looked cartoon-like and the site still felt basic, AI proposed a scrollable concept campaign while keeping Design A's structure. The learner explicitly approved the layout, four-image concept approach and short story before this implementation. This supersedes the earlier [illustration gallery](gallery.md); it is still the first branded storefront, not a new product or checkout feature.

- [Storefront](../../public/index.html): editorial hero and clear product anchor, three-view gallery with image thumbnails, full-width editorial image, approved story, existing size selection and temporary demo bag.
- [Campaign CSS](../../public/campaign.css): black/charcoal, off-white and burgundy, large editorial typography, clear grid and narrow layouts. It supplements the shared [base tokens/styles](../../public/styles.css) and is also used by the [live guide](../../public/styleguide.html).
- [Gallery script](../../public/gallery.js): Front, Back and Angled buttons switch image source, descriptive alternative, visible caption and pressed state. Native button keyboard behavior is retained. Only one view is selected at a time. Without JavaScript the front mockup stays visible and inactive controls stay hidden.
- [Reveal script](../../public/reveal.js): brief section-entry animation on scroll. Content is visible by default; missing IntersectionObserver or JavaScript does not hide it. CSS and script respect reduced-motion preferences.
- [Original bag script](../../public/shop.js) remains unchanged. Fictional demo price stays labeled; no checkout, persistence, customer claims or enrollment added.
- [Live guide](../../public/styleguide.html) shares the same tokens, font families, primary buttons, typeset navigation placeholder, concept images and gallery behavior. Original SVG logo and two persuasion applications remain pending, rather than claiming completion.

## Generated assets and truthful presentation

All four images were generated with the built-in imagegen tool, inspected visually, then exported to optimized JPEGs (roughly 208–276 KB each). [Final prompt set and saved asset links](concept-prompts.md).

Front, back and angled mockups consistently depict a plain white, unbranded, short-sleeved crewneck tee against a charcoal studio background. The adult-model editorial concept pairs a white tee with dark wide-leg pants; the same asset is reused in hero and editorial sections. All usages visibly identify concept status, and product/gallery captions disclose that apparent fabric, fit and construction are illustrative. Pants and shoes are styling, not offered products. The generated appearance is not an exact measured reproduction of the original SVG or verified real product.

## Actual checks

`npm run check` passed: Prettier formatting, HTML/CSS/JS lint, 7 server tests and 14 Chromium browser tests, including axe checks on storefront, guide and studio. The first sandbox run could not bind localhost. An authorized run found insufficient contrast on the large OFFHOUR signoff and an initially unloaded guide image. The signoff color was corrected and the four small local JPEG assets made eager-loading; the full rerun passed. Existing rules and assertions were retained.

Updated [gallery tests](../../tests/browser/gallery.spec.js): at 1440 and 375px, select M, add a shirt, switch Back/Angled/Front using Enter/Space, and assert the correct loaded image, caption, alternative, exactly one selected button, retained M selection and bag count 1. Separate checks confirm no-JavaScript page visibility and a readable story with reduced motion and no reveal animation. The [asset reload test](../../tests/browser/development.spec.js) now changes the current JPEG bytes in its isolated fixture, verifies a page reload, checks the returned asset bytes, and confirms the image still decodes.

Agent rendered and inspected storefront and live guide at 1440×1000 and 375×812. Product, story, labels and controls are readable; no horizontal overflow observed. All guide images loaded; Back/Front switching in the guide updated its visible caption. The studio's shared base styling was reviewed in the prior slice and remains unchanged in this campaign update; its current automated integrity, accessibility and narrow-layout tests pass.

Screenshots: [hero](campaign-hero.jpg), [full desktop storefront](campaign-desktop.jpg), [full mobile storefront](campaign-mobile.jpg), [guide desktop](campaign-guide-desktop.jpg), [guide mobile](campaign-guide-mobile.jpg).

These are agent/automated observations. Learner post-build review, keyboard/mobile observations and interpretation of an actual test are still pending. Passing checks are not proof of complete accessibility, real product specifications or audience demand.

## Handoff

The updated local site is ready for learner review before original SVG logo work. Work and unreviewed learning excerpts remain local and unstaged. No commit, push, PR, merge, deployment or BRAND-001 completion is claimed. Remaining requirements are tracked in SPEC.md.

## Night-street editorial refinement — 2026-11-02

Learner chose the night-street direction for visual variety and its connection to OFFHOUR’s after-hours identity. A separate generated scene now appears in the editorial section and live guide; the original hero stays unchanged. Plain white tee, dark pants and visible concept disclosure remain. Learner subsequently reviewed and retained the new render for brand fit and visual interest.

After implementation, `npm run check` passed formatting, lint, 7 server tests and 14 Chromium tests. Additional Chromium inspection at 1440px and 375px verified all images loaded, distinct hero/editorial assets, shared guide asset and no horizontal overflow across storefront, guide and studio. Agent visually inspected the editorial captures at both widths: [desktop](night-street-1440.png), [narrow](night-street-375.png). These are automated/agent observations, separate from the learner’s earlier browser observations.

## Final pre-PR verification — 2026-11-02

Design and implementation are completed. Learner confirmed both audience hypotheses, brand promise and final editorial image, supplied browser/test observations and approved LEARNING.md for publication after a feature-status correction. Final `npm run check` passed formatting/lint, 7 server tests and 14 Chromium tests. Earlier pending statements above describe earlier checkpoints; the approved logo and ethical applications are now implemented (see their linked review notes). Final learner PR review, merge and deployment remain pending.
