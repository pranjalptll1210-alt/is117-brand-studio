# OFFHOUR — approved ethical persuasion applications

BRAND-001 · [Issue #1](https://github.com/pranjalptll1210-alt/is117-brand-studio/issues/1) · `codex/brand-001-offhour`

## Learner contribution and approval

After AI proposed a free styling note and shared-values story, the learner selected the guide as most useful: the target audience enjoys streetwear and ways to style basics, and three looks help visitors imagine the white tee in their own wardrobes. They requested a natural editorial section, free without signup or purchase, and explicitly approved Liking through the existing story/editorial styling. This explanation followed an AI proposal; it is not presented as independent research.

## Implemented applications

**Reciprocity:** [storefront #styling](../../public/index.html#styling), “One tee. Three starting points.” Three ungated formulas cover charcoal trousers/dark shoes, faded denim/sneakers and an open overshirt/dark trousers. Each uses a short tip, numbered editorial card and suggested color palette. The product introduction offers a direct link before the size/bag controls. The section explicitly says “Free to read. No signup or purchase required.” No purchase button, enrollment or gated download was added to the guide. Other garments are suggestions, not new OFFHOUR products, and the tips do not establish T-shirt fabric or fit.

Intended mechanism: provide useful outfit inspiration freely before asking for anything in return. Intended benefit, explained by the learner: imagine how a basic tee could fit an individual wardrobe. No obligation or measured conversion result is claimed.

**Liking:** retain the approved [brand story](../../public/index.html#story) about late nights and independent expression together with the labeled editorial styling. This communicates shared tastes and values rather than invented endorsements or customer proof. The intended benefit is helping a visitor judge whether the brand's identity suits them. The learner approved this application; their fuller benefit explanation concerned the free styling guide. The existing story and editorial image were not replaced in this slice.

Framework: [Cialdini / Influence at Work overview](https://www.influenceatwork.com/7-principles-of-persuasion/), consulted in the preceding discussion. Applying the principles to this brand is a design hypothesis, not a proven effect for OFFHOUR.

## Shared live guide and validation

[Live style guide](../../public/styleguide.html) uses identical card copy and the same [campaign CSS](../../public/campaign.css), plus a short explanation of each mechanism. Customer-facing content does not announce persuasion theory or implementation details.

`npm run check` passed: Prettier, HTML/CSS/JS lint, 7 server tests and 14 Chromium browser tests, including original missing-size/valid-size/empty-bag cases, keyboard gallery switching and retained state, no-JavaScript content, reduced motion, and axe scans on storefront/guide/studio. New CSS selector-order lint errors were corrected in source before the successful full rerun. No rules or test assertions were weakened. No new behavior was introduced that needed another mirrored test suite.

The in-app localhost preview timed out. A temporary project-Chromium render script inspected storefront and guide at 1440 and 375px, verified three cards on each page, compared their text and confirmed no horizontal overflow. Agent visually reviewed all four saved renders: three-column desktop cards become one column on narrow screens; text and palette blocks remain legible. The studio's base styling is unchanged and its automated integrity/accessibility/narrow checks passed.

Screenshots: [desktop storefront section](styling-storefront-1440.png), [narrow storefront section](styling-storefront-375.png), [desktop guide cards](styling-guide-1440.png), [narrow guide cards](styling-guide-375.png).

One actual check for the next learner discussion: the prepared missing-size browser case clicks “Add to demo bag” with no size, asserts that nonempty size feedback is visible and the bag count remains 0, and passed. Learner interpretation has not yet been supplied. This automated result does not establish complete accessibility or brand fit.

## Remaining

Brief/persona confirmations and the separate editorial-image decision remain open. Learner test interpretation, keyboard/mobile observations, any needed fixes/reruns, short learning-record accuracy review, authorized commit/PR and explicit keep/merge are still required. No commit, push, merge or deployment performed. Unreviewed learner excerpts remain local and unstaged.
