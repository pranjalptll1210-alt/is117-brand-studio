# OFFHOUR — controlled hero comparison

BRAND-001 · [Issue #1](https://github.com/pranjalptll1210-alt/is117-brand-studio/issues/1) · `codex/brand-001-offhour`

These are AI-drafted proposals for the learner's brief. The final storefront and live style guide remain unchanged. No direction is chosen yet. The text OFFHOUR in the preview navigation is a temporary typeset label, not the completed SVG logo.

## Shared content

- Headline: “Off the clock. On your terms.” (learner tagline).
- Supporting copy: “A plain white T-shirt. A starting point for your own expression.” (AI draft).
- Product: “The white T-shirt.”; original `public/assets/white-shirt.svg`, unchanged and fully visible.
- Offer: $28 USD, explicitly labeled fictional demo price; sizes S, M, L, XL; “Add to demo bag”.
- Same original `public/shop.js` interaction and demo-only boundary. No checkout, payment, persistence, invented fit/material claims, testimonials, scarcity or promises.
- Same black/charcoal, off-white and burgundy color roles. No lifestyle photograph is used to imply an unsupported fit. Both use installed system fonts: Arial/Helvetica sans-serif; B also quotes an editorial italic serif (Georgia/Times New Roman).

## A — modernist

[Live preview](http://127.0.0.1:5173/explorations/modernist.html) · [HTML](../../public/explorations/modernist.html)

Primary reference: Josef Müller-Brockmann, _Beethoven_, concert poster for Tonhalle-Gesellschaft Zürich, February 22, 1955. [Designer foundation page](https://syjmb.foundation/en/josef-mueller-brockmann/). Actual linked image inspected in browser on 2026-11-02: broad concentric arcs dominate a black/light composition, with the title and small performance information grouped inside its open center. The source identifies the poster's date and purpose. This is analysis of an inspected image, not just its caption.

Translation: a two-column grid assigns separate areas to expressive headline, product inspection and shopping. A sans-serif hierarchy and consistent left alignment prioritize information. A burgundy circular field behind the rectangular product illustration introduces geometric rhythm. CSS layout provides repeatable production rules rather than hand-positioning each screen.

Intended effect (hypothesis): order and deliberate hierarchy may support the learner's desired confidence/premium feel; the primary audience can read the attitude quickly and the secondary audience can inspect the product without distraction. Risk: restraint may feel too controlled for the desired individuality. The page stacks in a single column on mobile.

## B — postmodernist

[Live preview](http://127.0.0.1:5173/explorations/postmodernist.html) · [HTML](../../public/explorations/postmodernist.html)

Primary reference: Wolfgang Weingart, _Schreibkunst (The Art of Writing)_, 1981, offset lithograph, made for Museum für Gestaltung. [LACMA collection record](https://collections.lacma.org/object/207227). Actual [museum image](https://collections-images.lacma.org/images/207227/207227-1-primary.webp) inspected in browser on 2026-11-02: overlapping patterned fields, angular edges, nib/handwriting imagery and multiple scales of sans-serif lettering. LACMA describes layered screens and expressive typography challenging Swiss design conventions. This is a New Wave bridge toward postmodern graphic approaches, not a claim that every work by Weingart belongs to one fixed category.

Translation: dotted texture, an angled burgundy strip and an offset product plate quote printed collage. Italic serif and heavy sans-serif headline fragments mix visual languages while repeating the identical words. The shopping panel remains level and visually bounded; expressive layers do not cover controls or the shirt.

Intended effect (hypothesis): a less predictable editorial rhythm may express the learner's individuality and late-night attitude. The secondary visitor still has the same product illustration, clear price disclosure and controls. Risk: visual competition may reduce the effortless feeling. On mobile the plate straightens to protect readability and available width.

## Verification

- `npm run check` passed after fixing new CSS lint issues: formatting, HTML/CSS/JS lint, 7 server tests and 10 existing Chromium browser tests. The initial sandbox run could not bind localhost; the authorized rerun passed. Existing browser tests cover the baseline pages, not these new exploration routes.
- Additional browser inspection of both exploration routes at matching 1440×1000 desktop and 375×812 narrow viewports: full product image loaded, expected system font families present, no horizontal overflow, headline/product/control layout readable. Paired screenshots are linked below. These are agent observations, not learner reports.
- Browser-driven interaction on each new route: clicking Add with no size showed the size error and left count at 0; selecting M and adding changed count to 1 and named M in the status; Empty returned count to 0. DOM comparison confirmed identical shared headline/support/product/form/disclaimer text between routes.
- Baseline storefront, shared styles, style guide, studio overview and shop script are unchanged. No learner observations or final visual selection have been supplied. Automated axe checks in the prepared suite apply to the original three pages, not a complete accessibility review of the explorations.
- [A desktop](modernist-desktop.jpg), [B desktop](postmodernist-desktop.jpg), [A mobile](modernist-mobile.jpg), [B mobile](postmodernist-mobile.jpg).

Reference artwork is linked for study, not redistributed as storefront imagery.
