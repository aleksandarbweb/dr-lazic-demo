# Ordinacija Dr. Terzić — Brainstorm & Master Plan (35% → 100%)

<!-- ============================================================= -->
<!-- HOW TO USE THIS DOCUMENT  (read this first, every session)    -->
<!-- ============================================================= -->

> ## 📌 Instructions for the working model — read before touching code
>
> **What this is:** The single living brainstorm + execution plan for taking this
> site from its current ~35% state to a finish worth what top-tier boutique
> agencies charge (~€50k/site). It replaces the previous tiered tracker. It is
> the source of truth for *what to do, in what order, and why*.
>
> **What this site is:** A real client site for Dr. Terzić's Belgrade
> dermatology clinic — a **prestige / credibility presence**, not a lead-capture
> machine. Booking/CRM/forms live under **Future Doors** (documented, not
> scheduled). **Visual craft is priority #1**, content structure #2. No real
> client photos/copy yet: build everything polished with clearly-labeled
> placeholders and make real-asset swaps trivial.
>
> **How to work each session:**
> 1. Read this header, the **Scorecard**, and the **Art Direction** section.
> 2. Find the first milestone with unchecked `[ ]` items. **Finish milestones in
>    order** — each is designed to be shippable on its own. Do not cherry-pick
>    from later milestones.
> 3. Verify per the **Verification Protocol** below before checking anything off.
> 4. `[ ]` → `[x]` only when done *and verified*. Add a dated line to the
>    **Changelog**. Re-score the Scorecard honestly at the end of each milestone.
> 5. New ideas found while building → add as `[ ]` to the right milestone with a
>    one-line rationale. Bad ideas → **Cut List** with the reason.
> 6. Never silently expand scope into Future Doors or the Cut List.
> 7. Commit at milestone boundaries (small commits inside a milestone are fine).
>    **Do not `git push` unless asked** — pushes auto-deploy to the client-visible
>    WIP URL.

---

## Verification Protocol (applies to every milestone)

- `npm run build` must pass (all ~64 pages).
- Visual verification is **mandatory** for anything visual: run
  `npm run dev -- --port 3123`, then Playwright with cookie
  `dt_site_access=granted` on `localhost:3123` to bypass the WIP gate.
- The intro overlay currently replays on **every hard page load** (fixed in M0);
  wait for it (or disable via `DISABLE_SITE_INTRO`) before screenshotting.
- Screenshot at **1440×900 and 390×844** minimum; scroll the page first so
  `FadeUp`/`useInView` reveals have fired, or full-page shots will look empty.
- Check the browser console: **zero errors** is the bar (today there are dozens
  of image 400s).
- Test all three languages (SR default, EN, RU) on any page whose text you touch.
- Respect `prefers-reduced-motion` on everything animated; test it.

---

## The Target — what a "€50k site" actually means

Boutique-agency work at this price differs from templates in five ways. These
are the pillars every milestone serves:

1. **Nothing is broken, ever.** No broken image, no fake success state, no
   console error, no dead link. Credibility is binary for a medical brand.
2. **Distinctive art direction.** One deliberate visual idea carried through
   every page — not competent defaults. A visitor should recognize a screenshot
   of any page as *this* site.
3. **Editorial content design.** Type, imagery and whitespace composed like a
   printed monograph, not stacked centered blocks. Every section earns its place.
4. **Purposeful motion.** Few, consistent, physical-feeling movements that
   direct attention. Never two competing auto-animations on one screen.
5. **Invisible excellence.** AA accessibility, sub-2s LCP, full metadata/schema,
   flawless i18n, real 404/error states. Clients can't name it; they feel it.

### Scorecard — re-score after every milestone

| Category | Now (2026-07-03) | Target | Blocking issues today |
|---|---|---|---|
| Integrity (nothing broken/fake) | 1/10 | 10 | Broken images site-wide in preview; gallery broken everywhere; fake testimonials; fake form success |
| Art direction & identity | 3/10 | 9+ | Template rhythm, overused corner-bracket motif, mixed geometry |
| Typography & layout | 4/10 | 9+ | Identical centered section pattern everywhere; weak hierarchy below hero |
| Imagery | 2/10 | 9 | Few assets, shared placeholders, broken paths, no art-directed crops |
| Motion & interaction | 4/10 | 9 | Three auto-scrollers on home; marquees ignore reduced-motion; abrupt mobile menu |
| Mobile feel | 3/10 | 9+ | No hero image, cropped marquee, carousel jump glitches, generic stacking |
| Content architecture | 3/10 | 9 | 60 services share one templated copy block; usluge page is a chip wall |
| i18n completeness | 5/10 | 10 | `/usluge` page + service catalog + service copy are Serbian-only hardcoded |
| SEO / metadata / schema | 2/10 | 9 | No per-page metadata (except [slug]), no sitemap/robots/JSON-LD/OG |
| Performance & a11y | 5/10 | 9+ | Hidden scrollbars, contrast edge cases, `ignoreBuildErrors: true` |

**Overall today: ~3.5/10.** The single biggest lever is Integrity (M0) — no
amount of polish reads as premium while images are broken and testimonials are
invented.

---

## Audit Findings (2026-07-03, full source + live browser review)

### 🔴 Broken right now (found via Playwright on localhost)

1. **The WIP password gate breaks every optimized image in local/dev preview.**
   `middleware.ts` matcher `/((?!api/unlock|_next).*)` intercepts the Next image
   optimizer's internal cookieless fetch of `/images/...` and returns the lock
   screen HTML → optimizer responds 400 → navbar logo, hero portrait, doctor
   photos, footer logo all render as broken-image glyphs. (Vercel production is
   mostly unaffected because its image CDN reads build output directly, but
   local preview — what we audit against — is image-dead.)
2. **The gallery is broken everywhere, including production.** All 11 entries in
   `app/galerija/page.tsx` point to `/images/*.jpg`, but files live under
   `/images/Services/`. Two entries (`doctor-placeholder-1/2.jpg`) don't exist at
   all. Same class of bug in `app/o-nama/page.tsx` (`/images/ordinacijaonama.png`
   → actual file is `/images/Services/ordinacijaonama.png`).
3. **The intro video replays on every hard load.** The "played once" guard in
   `components/intro-overlay.tsx` is a module-scope variable, which resets on
   every full page load — every reload/direct link costs the visitor a 4.5s
   blocking video with no skip control.
4. **Fake patient testimonials are live** (`sr.ts` `testimonialsList`: "Marija
   P.", "Ana S."… with quotes) — this violates this project's own Cut List rule
   and is an ethics problem for a medical practice. The **"1000+ zadovoljnih
   pacijenata"** stat is likewise unverified.
5. **The contact form fakes success** — 1s timeout, then a success message; the
   message goes nowhere.

### 🟠 Visual craft diagnosis (why it reads "template", not "€50k")

- **One section pattern repeated ~30 times:** red uppercase eyebrow → centered
  Playfair heading → red 2px underline → light gray text. Every section of every
  page. No rhythm variation, no asymmetry, no editorial moments.
- **The red corner-bracket motif is on every image** (hero, o-nama ×3, gallery
  hover, service pages, doctor cards). Used everywhere = decoration, not
  identity.
- **Two geometry languages fight:** home/oprema use pill buttons +
  `rounded-[1.75rem]` double-border card frames; usluge/galerija/kontakt use
  sharp-cornered chips, square buttons, square form fields. `--radius: 0px` in
  tokens while components hardcode radii.
- **Zero design tokens in practice:** `#b91c1c`, `#faf9f7`, `#6b6b6b`, `#e5e0da`
  hardcoded in every file (hundreds of occurrences). A palette change is
  currently a 40-file sweep.
- **Homepage is restless:** three simultaneous auto-scrollers (services marquee,
  partners marquee, testimonials marquee) + scroll-jump logic that visibly
  snaps mid-swipe on mobile. The rAF marquees ignore `prefers-reduced-motion`.
- **Partners strip is bare text strings** ("Lumenis Light Sheer, Morpheus8…")
  in a marquee — reads as filler. On mobile it renders cropped.
- **Mobile hero has no image at all** (`hidden lg:block`) — the most important
  screen of the site is plain text on cream.
- **`/usluge` is a sitemap, not a page:** 40+ identical gray chips with
  chevrons, no imagery, no descriptions, no featured treatments, no search — and
  the whole page is **hardcoded Serbian** (ignores the i18n system entirely, as
  does `lib/service-catalog.ts`).
- **Doctors are presented three different ways** (home `DoctorCard`, o-nama
  Marta block, o-nama Biljana mirrored block). The mirrored right-aligned
  Biljana text is hard to read; the desktop doctor rows leave large dead zones.
- **Footer logo is enormous** (up to `h-40` with negative-margin hack) and
  currently broken anyway.
- **Scrollbars are globally hidden** (`html, body`) — disorienting, and hides
  page-length affordance.
- **Language switcher uses emoji flags** (🇷🇸🇬🇧🇷🇺) — inconsistent cross-platform
  rendering.
- **The one genuinely great moment:** the dark philosophy quote section (grain
  texture, serif italic, generous space). This is the seed of the real art
  direction — the rest of the site should rise to it.

### 🟡 Structural / content

- ~60 service pages share one `buildServiceCopy()` template — literally the same
  five process steps, same FAQ, same candidate bullets with the service name
  interpolated. Thin/duplicate content at scale.
- Business data (address, phone, email, hours, map URLs, Instagram) duplicated
  across `footer.tsx`, `kontakt/page.tsx`, and translations.
- Many services share `dermatology-treatment.jpg`; no placeholder system, no
  blur placeholders, no documented swap path.
- Every page is `"use client"`; only `[slug]` has real metadata.

### 🟢 Solid foundations already in place (don't redo)

- Full i18n context (sr/en/ru) wired on most pages; `<html lang>` syncs.
- a11y groundwork: skip link, focus trap in mobile menu, lightbox Esc/focus,
  FAQ `aria-expanded`, branded 404/error/loading.
- Motion primitives (`FadeUp`, `StaggerChildren`) exist and respect
  reduced-motion; image optimization enabled; deps pruned (Tier 0, 2026-06-28);
  `components/ui/` pruned to 1.
- Password gate is hardened (escaped reflection, safe redirect).

---

## Brainstorm — the full idea pool

Legend: ✅ = adopted into a milestone below · 🤔 = decide during the milestone ·
🚪 = Future Door · ❌ = rejected (see Cut List)

**Change**
- ✅ Middleware matcher to exclude static assets (fixes preview images).
- ✅ Intro: play once per session (sessionStorage), add skip-on-click/key,
  shorten hold; consider showing it only on `/`.
- ✅ Replace fake testimonials with honest alternatives (see M0 options).
- ✅ Unify geometry to ONE language site-wide (decision in M1).
- ✅ Corner brackets: demote from "everywhere" to a single signature use.
- ✅ Partners marquee → composed static trust row ("Radimo sa opremom:" +
  refined wordmark/text lockups).
- ✅ Testimonial/services marquees → calm, controllable interactions.
- ✅ Language switcher: text labels (SR · EN · RU), no emoji flags.
- ✅ `/usluge` chip wall → editorial, grouped, searchable directory.
- ✅ Right-aligned Biljana mirror block → consistent left-aligned readable layout.
- 🤔 Flat red CTA bands (3 pages) → dark-ink editorial CTA with grain (matches
  philosophy section) or refined red with texture — pick one in M3 and reuse.
- 🤔 Red `#b91c1c`: keep, or deepen slightly toward oxblood for print-luxury
  feel. Small change, big tone shift. Decide in M1 with side-by-side.

**Improve**
- ✅ Hero composition: real image on mobile, stronger type stacking, less boxed
  portrait frame on desktop.
- ✅ Motion system: one easing family, 3 durations, page transitions via
  `app/template.tsx`, staggered mobile-menu entrance.
- ✅ Typographic scale with named steps; Playfair optical sizes; `text-wrap:
  balance` on headings.
- ✅ Section rhythm: alternate alignment/backgrounds/densities per page so no
  two consecutive sections share the same skeleton.
- ✅ Doctor presentation: one component, two contexts (home teaser / o-nama full).
- ✅ Footer: rebalanced logo, tighter grid, hours from shared data.
- ✅ Thin styled scrollbar instead of hidden.
- ✅ Map embed: keep the sepia treatment, add a framed caption + address block.
- ✅ Gallery: real masonry with art-directed crops, category counts, swipe in
  lightbox (M5).

**Add**
- ✅ Design tokens (CSS variables + Tailwind theme) for color/space/type/radius.
- ✅ `lib/business-data.ts` — single source for address/phone/hours/socials.
- ✅ Asset manifest + placeholder system with documented swap path and blur
  placeholders.
- ✅ Typed per-service content shape with hand-written copy for the ~11 flagship
  services (the ones with dedicated pages) + honest short pages for the rest.
- ✅ Per-page metadata, OG images, sitemap, robots, JSON-LD (MedicalBusiness,
  Physician, MedicalProcedure, FAQPage, BreadcrumbList).
- ✅ Before/after scaffolding with consent captions (frame only, no fake photos).
- ✅ Credentials/affiliations slots on o-nama (empty-state friendly).
- ✅ Equipment ↔ service cross-links on oprema.
- 🤔 A single "signature" element (M2 decides): candidate list — animated
  grain/ink dark sections; a drawn red "signature underline" SVG motif; subtle
  scroll-linked parallax on portraits; oversized serif ligature drop-caps.
- 🚪 Sticky mobile call/WhatsApp bar — the moment client wants inbound contact.
- ❌ 3D hero (see Cut List — decision made, drop `three`).

**Remove**
- ✅ Fake testimonials & unverifiable "1000+" stat (M0).
- ✅ Fake form success (M0 — honest interim state).
- ✅ `three`, `@react-three/*`, `@types/three` from deps (craft ceiling decided:
  refined-classic, no 3D).
- ✅ `ignoreBuildErrors: true` (fix surfaced TS errors, then remove flag).
- ✅ Dead `styles/globals.css` duplicate (only `app/globals.css` is imported).
- ✅ `.agent/` + `.agents/` skill folders committed to the repo (tooling clutter,
  not site code) — confirm with user before deleting.
- ✅ Scroll-jump "infinite" carousel logic on mobile home (replace with snap
  carousel + dots, no teleporting).

**Keep (protect these)**
- Dark philosophy section (elevate, don't touch its soul).
- Playfair + Inter pairing (works; refine sizes/weights rather than replace).
- Cream/ink/red palette family (tune, don't replace).
- Password gate UX (maybe restyle lock screen to match art direction — cheap
  win, it's the client's first impression today).
- All Phase-1 a11y work.

---

## Art Direction (ratify in M1, then it governs everything)

**Concept: "Klinička elegancija" — quiet clinical luxury.** The site should
feel like a beautifully set medical monograph: warm paper (cream), precise ink
(near-black), one surgical accent (the red), generous margins, serif authority.
Reference gravity: Aesop (restraint), Dr. Barbara Sturm (clinical warmth),
Augustinus Bader (science-as-luxury), 111SKIN (dark editorial moments).

Rules of thumb once ratified:
- Cream pages punctuated by **one dark ink editorial section per page** (the
  philosophy treatment becomes a system, not a one-off).
- Red is a **scalpel**: eyebrows, key numbers, one accent per viewport max.
  Never large red fills except the (single, redesigned) CTA treatment.
- One geometry: recommendation is **soft-editorial** — pill buttons, 20–24px
  card radius, square-cornered *images* (photography looks more editorial
  uncropped-feeling), consistent 1px hairline borders.
- Corner brackets survive only as the doctor-portrait frame signature.
- Type scale (desktop): display 72–96 / h2 40–48 / h3 28 / eyebrow 11 tracking
  0.25em / body 16–17 / caption 13. Serif for display+h2 only.

---

## Incremental Plan — Milestones

Each milestone = one working session (roughly), shippable, verified, committed.

### M0 — Integrity: nothing broken, nothing fake  🔴 DO FIRST

*No polish reads as premium while the site lies or 404s.*

- [ ] **Fix the gate/image-optimizer conflict** — `middleware.ts` matcher must
  exclude static assets, e.g.
  `matcher: ['/((?!api/unlock|_next|images/|videos/|.*\\.(?:png|jpe?g|svg|ico|mp4|webmanifest)$).*)']`.
  Verify: dev server with gate cookie cleared → lock page still shows for `/`,
  but `<img>` sources and `/_next/image` return 200.
- [ ] **Fix all broken image paths** — `galerija/page.tsx`: point every entry at
  real files under `/images/Services/…`; remove/replace the two nonexistent
  doctor-placeholder entries (real headshots exist under `/images/people/`).
  ~~`o-nama/page.tsx`: `/images/Services/ordinacijaonama.png`~~ **done
  2026-07-10** (fixed opportunistically during the content pass, verified in
  Playwright — see Changelog). `galerija/page.tsx` and the repo-wide grep are
  still outstanding — this bullet stays unchecked until those are done too.
- [ ] **Intro overlay: once per session + skippable** — sessionStorage guard
  (survives hard loads), click/Escape/“Preskoči” skips, keep reduced-motion
  short-circuit, and `document.documentElement`/body overflow cleanup on skip.
  Consider playing it only on `/` (recommended).
- [ ] **Remove fake testimonials** — replace the homepage section with one of:
  (a) "Pristup" cards: three treatment-philosophy statements in the doctors'
  own voice (no fake patients), or (b) hide section behind a clearly-labeled
  placeholder flag until real Google reviews arrive. Delete the fake
  `testimonialsList` from all three translation files or clearly repurpose.
- [ ] **Stats honesty pass** — keep "25+ godina" (updated from client DOCX,
  2026-07-10), "2 specijaliste", "60+ tretmana"; "1000+ pacijenata" was
  replaced with client-provided "15000+ zadovoljnih pacijenata" during the
  2026-07-10 content pass — **this is unverified and needs Marta's written
  confirmation**, it is not yet a settled fact. See
  `docs/client-content-map-2026-07-09.md` §2 for the full list of numbers
  needing confirmation (including "više stotina hiljada procedura", which was
  intentionally *not* shipped as a hard number — see that doc for why). This
  bullet stays unchecked until the numbers are confirmed with the client.
- [ ] **Honest contact section** — remove the fake async submit. Interim: form
  fields disabled-styled out, replaced by prominent direct actions (tel:,
  mailto:, Instagram DM, maps) presented as the primary path. (Real form is a
  Future Door.)
- [ ] **Drop `ignoreBuildErrors`** — fix whatever TS errors surface, remove the
  flag from `next.config.mjs`.
- [ ] **Remove `three`/r3f deps** (craft ceiling = refined-classic, decided) and
  delete unused `styles/globals.css`. Ask user before removing `.agent{,s}/`.
- [ ] **Zero-console-error sweep** — after the above, browse all routes with
  Playwright; console must be clean on every page, desktop + mobile.

**Done when:** every page renders every image in local preview and production
build; nothing on the site asserts something untrue; build passes without
ignored errors; Scorecard "Integrity" ≥ 8.

### M1 — Design system: tokens, geometry, type  🔴

- [ ] **Token layer** — define in `app/globals.css` `@theme`: full palette
  (ink-900/700/500, cream-50/100/200, hairline, accent + accent-deep), spacing
  scale, radius scale, named font sizes per the Art Direction table. Decide the
  red (keep vs deepen) with a side-by-side screenshot pair.
- [ ] **Hex sweep** — replace every hardcoded `#b91c1c`/`#faf9f7`/`#6b6b6b`/
  `#e5e0da`/`#1a1a1a`… with token classes across all components/pages. After
  this, `grep -r "#b91c1c" app components` returns 0.
- [ ] **One geometry** — apply the ratified radius/border language everywhere:
  usluge chips, galerija filters, kontakt inputs/buttons get the same treatment
  as home. Kill the double-border card-in-card frame or make it THE card, one
  or the other.
- [ ] **Type scale application** — named utilities (e.g. `text-display`,
  `text-h2`…) applied on all pages; `text-wrap: balance` on headings; fix the
  RU-hero-size special case via `clamp()` instead of per-language classes.
- [ ] **Restore a scrollbar** — thin, ink-on-cream custom styling; remove the
  global hide.
- [ ] **Language switcher** — text `SR / EN / RU` with `aria-label`, active
  state in accent; remove emoji flags.
- [ ] **Restyle the lock screen** to match tokens (client's first impression).
- [ ] **Document** the ratified Art Direction decisions in this file (update the
  section above with final hex values and scale).

**Done when:** any palette/radius change is a token edit; all pages share one
visual grammar; screenshots at 1440/390 confirm no page still shows the old
mixed geometry.

### M2 — Motion & navigation craft  🟡

- [ ] **Motion constants module** — one easing family + duration set exported
  from `components/motion-primitives.tsx`; all ad-hoc
  `duration-700 ease-[cubic-bezier(…)]` strings replaced.
- [ ] **Page transitions** — `app/template.tsx` with fast (≤300ms) fade/rise,
  reduced-motion safe.
- [ ] **Mobile menu** — animated slide-down/in with backdrop blur, staggered
  items, animated open/close icon morph, body scroll lock; keep focus trap.
- [ ] **Kill the marquees** — partners → static composed trust row; home
  services (mobile) → snap carousel with dots, **no scroll-teleport logic**;
  testimonials/approach section → static 3-up grid or manual pager. Delete the
  rAF auto-scroll + infinite-jump effects from `app/page.tsx` (≈100 lines).
- [ ] **Micro-interactions** — one consistent hover grammar for links, cards,
  buttons (defined once, reused): subtle lift + hairline→accent border; arrow
  nudge on CTAs already exists — standardize it.
- [ ] **Navbar scrolled state** — slightly shrink height on scroll (24→18
  visual), keep blur; active-link underline animates in.

**Done when:** no auto-motion runs without user intent anywhere; reduced-motion
disables all of it; menu/page transitions feel physical at 60fps.

### M3 — Homepage rebuild to editorial standard  🟡 (the showcase)

- [ ] **Hero** — desktop: asymmetric composition, portrait breaking the grid
  (no white 12px frame box), display type overlapping the image edge, scalpel
  red only on eyebrow + CTA; mobile: purpose-built stack WITH the portrait
  (art-directed crop), not text-only.
- [ ] **Stats strip** — integrate as a hairline-ruled row (no cards), tabular
  serif numerals, optional count-up (reduced-motion: static).
- [ ] **Services section** — 6 editorial cards with image slots (unique
  placeholder per category), serif titles, 2-line descriptions, staggered
  reveal; carousel on mobile per M2.
- [ ] **Philosophy section** — keep + elevate: add Dr. Terzić's portrait or
  signature scaffold (asset slot), refine grain, this becomes the template for
  dark sections site-wide.
- [ ] **Doctors teaser** — single `DoctorCard` design used here AND on o-nama;
  balanced composition, portrait frame = the one place corner brackets live.
- [ ] **Trust row** (replaces partners marquee) — "Tehnologija i preparati" +
  composed wordmark row (text lockups fine until real logos).
- [ ] **Approach/testimonials slot** — per M0 policy.
- [ ] **CTA section** — the single redesigned CTA treatment (dark-ink editorial
  with grain recommended), reused by all pages.

**Done when:** the homepage screenshot pair (1440/390) could sit in an agency
portfolio; every section skeleton differs from its neighbors; Scorecard
"Art direction" ≥ 7.

### M4 — Services system  🟡

- [ ] **i18n the catalog** — move category/service names into the translation
  system (or a localized catalog structure); `/usluge` page fully translated
  (it is hardcoded Serbian today, including its CTA).
- [ ] **Usluge index redesign** — per-category editorial blocks: category intro
  sentence, image slot, featured treatments (3–4 with descriptions), remaining
  as refined compact list; sticky category side-nav (desktop) + search/filter
  input (60+ items warrant it).
- [ ] **Typed service content shape** — `ServiceContent` (intro, benefits,
  process, aftercare, faqs, image, related) in a content module; hand-write real
  copy for the ~11 flagship services (dedicated pages exist); generic services
  get honest *short* pages (what/when/consultation CTA) instead of the current
  fake-depth template — delete `buildServiceCopy()`.
- [ ] **Service page layout refresh** — apply M1–M3 grammar: hero gets the
  category image slot (no empty right half), process steps as editorial
  numbered list (serif numerals, hairlines), FAQ restyle, related services as
  image cards.
- [ ] **Per-service image slots** — asset manifest entries per category at
  minimum; no more single shared `dermatology-treatment.jpg`.

**Done when:** `/usluge` works in all 3 languages, reads as a designed
directory; no two flagship services share identical copy; the generic template
text is gone.

### M5 — Supporting pages  🟢

- [ ] **O nama** — unify doctor blocks with `DoctorCard` full variant (both
  left-aligned; kill the mirrored right-aligned text); add credentials/
  affiliations/timeline slots (empty-state friendly); clinic story gets image +
  pull-quote treatment.
- [ ] **Oprema** — real device image slots; each device cross-links to the
  services it powers (and service pages link back); tighten the info-card/
  treatment-list composition.
- [ ] **Galerija** — rebuild on the asset manifest: labeled placeholder slots,
  art-directed aspect ratios (not uniform boxes), category counts on filters,
  lightbox swipe + arrows; **before/after slider component** scaffolded with
  consent-caption field (no fake photos — placeholder illustrations clearly
  marked).
- [ ] **Kontakt** — direct-action layout per M0; hours/address/phone from
  `lib/business-data.ts`; map keeps sepia + gets framed caption; page metadata.
- [ ] **404 / error / loading** — restyle to final art direction (they exist,
  keep them at par).

### M6 — Content infrastructure  🟢

- [ ] **`lib/business-data.ts`** — address, phone, email, hours, socials, map
  URLs; consumed by footer, kontakt, (later) JSON-LD. Zero duplicated literals
  after (grep-verify `Kosovska`, the phone number, and the gmail address each
  appear in exactly one source file).
- [ ] **Asset manifest** — `lib/assets.ts`: every image slot on the site with
  intended subject, aspect ratio, and `PLACEHOLDER`/`FINAL` status +
  `README-ASSETS.md` swap instructions for the client handoff; blur
  placeholders via `next/image` so swaps never shift layout.
- [ ] **Placeholder discipline** — one folder convention
  (`public/images/placeholders/`), every placeholder visually tagged in dev
  (subtle corner label) so nobody mistakes them for finals.

### M7 — SEO, performance, a11y baseline  🟢

- [ ] **Per-page metadata** — every route: localized title/description,
  canonical, OG/Twitter cards + a designed 1200×630 OG image (template with
  logo/serif/cream).
- [ ] **`sitemap.ts` + `robots.ts`** — all pages + service slugs.
- [ ] **JSON-LD** — `MedicalBusiness` (site-wide, from business-data),
  `Physician` ×2, `MedicalProcedure` per service, `FAQPage` on FAQ sections,
  `BreadcrumbList` on service pages.
- [ ] **Server-render what can be** — pages that don't need interactivity
  shouldn't ship as client components; at minimum extract metadata to layouts
  and consider server-rendering `/usluge` + service pages with a client i18n
  boundary. (Investigate; the client-side language context constrains this —
  document the chosen approach here.)
- [ ] **Image `sizes` + priority audit**; hero-only `priority`.
- [ ] **Contrast pass** — body grays vs cream at AA; decorative images
  `aria-hidden`; focus-visible audit on the new components.
- [ ] **Font loading** — `display: swap` check, preload, subset check for
  Serbian diacritics + Cyrillic (RU!) in both fonts. **Note:** Playfair/Inter
  currently load `latin` subset only — RU text may be falling back to Georgia
  system serif. Verify and fix (`cyrillic` subset).
- [ ] **Lighthouse** ≥ 95 perf / 100 a11y / 100 SEO on home, usluge, one
  service page, kontakt (throttled mobile).

### M8 — Final QA: the 100% gate  🔵

- [ ] Cross-browser (Safari/Chrome/Firefox) + real-device iOS/Android pass.
- [ ] All-routes Playwright screenshot album (3 languages × 2 viewports),
  reviewed page by page against the Scorecard.
- [ ] Full-keyboard walkthrough; VoiceOver spot-check on home + kontakt.
- [ ] Copy proofread in all three languages (native-quality SR primary).
- [ ] Re-score the Scorecard; anything < 9 gets a fix task; when all ≥ 9 →
  declare 100%, tag `v1.0`, prepare client asset-swap checklist from M6.

---

## Future Doors (deferred — documented, NOT scheduled)

Unchanged policy: raise with the client, don't build unprompted.

- 🚪 **Functional contact form** — Resend/Formspree + honeypot; needs GDPR
  first.
- 🚪 **Online booking** — Calendly/Acuity or custom.
- 🚪 **GDPR / cookie consent + privacy policy + medical disclaimer** — required
  before any real form/analytics.
- 🚪 **Google Business reviews embed / Instagram feed** — the honest replacement
  for testimonials; needs client accounts.
- 🚪 **Sticky mobile call/WhatsApp CTA** — the moment client wants inbound.
- 🚪 **Analytics** (GA4/GTM; Vercel Analytics already ships).
- 🚪 **Blog / content engine**; **email/CRM** — only with real volume.

## Cut List (rejected — with reasons, so they don't creep back)

- ❌ **3D hero / three.js anything** — DECIDED (2026-07-03): craft ceiling is
  refined-classic editorial. 3D adds weight and gimmick risk to a medical
  prestige brand. Deps removed in M0.
- ❌ **Fake testimonials/results/counters** — never invent patients, numbers, or
  before/afters. (Was being violated; fixed in M0.)
- ❌ **Exit-intent popups, urgency/scarcity tactics** — erode medical trust.
- ❌ **Referral/gift cards/financing** — retail tactics, off-brand.
- ❌ **A/B testing infra** — no traffic/conversion goal yet.
- ❌ **Admin dashboard / patient portal** — huge surface, liability, no need.
- ❌ **PWA/service worker** — caching-bug risk, no gain for brochure site.
- ❌ **Storybook** — unjustified at this component count.
- ❌ **Custom cursors / ambient cursor effects** — gimmick under this art
  direction.

---

## Changelog

- 2026-06-28 — Rewrote old "€50k audit" into tiered tracker; Tier 0 hygiene
  shipped (image optimization on, dead CSS/deps/ui pruned, generator tag
  removed). Kept for the record: `three` retained pending craft decision (now
  decided: remove); `ignoreBuildErrors` still pending (now M0).
- 2026-07-03 — **Full re-audit (source + Playwright, desktop/mobile/i18n) and
  total rewrite of this document** into brainstorm + scorecard + M0–M8
  incremental plan targeting €50k-agency finish. Key new findings: WIP gate
  breaks all optimized images in preview; gallery/o-nama images broken in
  production (wrong paths); intro replays every hard load; fake testimonials
  live; `/usluge` not internationalized; fonts missing Cyrillic subset. No code
  changes yet — next session starts at M0.
- 2026-07-10 — **Client content intake pass** (Marta's
  `docs/client-input/NOVA-STRUKTURA-SAJTA-DR-TERZIC.docx`), run ahead of the
  M0→M8 order at explicit user request — this is content-foundation work, not
  a milestone cherry-pick, and M0 integrity items remain the top priority for
  the next session. Full mapping, ready-vs-pending breakdown, and every
  numerical claim flagged for client confirmation are in
  `docs/client-content-map-2026-07-09.md` (read this before touching Serbian
  copy again). Summary of what shipped:
  - **Homepage**: new hero ("Personalizovana briga o vašoj koži"), updated
    stats (25+/2/60+/15000+ — the 15000+ patients figure is client-provided
    and unverified, see content map §2), Dr. Marta's homepage bio/title
    updated from DOCX.
  - **O nama**: full rewrite of the clinic story from DOCX (kept to 3
    paragraphs, not the full DOCX wall of text); "Naši Specijalisti" →
    "Naš tim"; values changed to Poverenje/Bezbednost/Rezultati (was
    Preciznost/Poverenje/Rezultati); Dr. Marta's bio expanded to 3 paragraphs
    with real credentials (Allergan national trainer, IDS member); added
    Snežana Stojković (bio) and Milica/Melissa/Sonja (name+role only, no
    invented bios); Dr. Biljana's section explicitly TODO-flagged pending her
    CV from Marta — bio left unchanged, not rewritten from nothing; fixed the
    long-standing broken image path `/images/ordinacijaonama.png` →
    `/images/Services/ordinacijaonama.png` (one M0 bullet, partially — see
    that bullet, `galerija/page.tsx` is still broken).
  - **Services**: verified `akne` and the 3 existing flagship laser pages
    need no changes. Added 3 new hand-written flagship pages with real DOCX
    content: `/usluge/full-face`, `/usluge/bradavice-papilomi-keratoze-moluske`,
    `/usluge/kapilari-i-hemangiomi-laser`. Did not touch catalog i18n or retire
    `buildServiceCopy()` — that's M4.
  - **Oprema**: corrected/expanded equipment to match the DOCX's 9 devices
    (AvalancheLase, SP Dynamis, Harmony XL Pro, Morpheus8, Ellman, CryoPro/
    CryoPen, DermLite DL5 + Canfield D200EVO, Dermapen); kept Zimmer
    cryolipolysis (absent from DOCX, not deleted without client confirmation —
    see content map §5).
  - All new/changed i18n keys got real EN/RU translations (AI-assisted, not
    client-reviewed — flagged in content map §6), so the build's
    `Dictionary = typeof sr` type check stays satisfied and EN/RU never show a
    missing string.
  - Verified: `npx tsc --noEmit` clean, `npm run build` passes (65 routes,
    `ignoreBuildErrors` still on — untouched, that's M0), Playwright spot
    checks on home/o-nama/oprema/full-face at 1440×900 and 390×844, SR/EN/RU
    all render correctly, zero *new* console errors (only the pre-existing
    M0 gate/image-optimizer 400s and missing-favicon 404s, unchanged from
    before this session).
  - **Not done, explicitly out of scope**: M0 integrity items (broken gallery
    paths, fake testimonials, fake form success, intro-replay,
    `ignoreBuildErrors`, `three` removal) — still first priority next session.
  - **Repo housekeeping note (not caused by this session)**: `IMPROVEMENT-REPORT.md`
    at repo root is tracked in git but was already deleted from the working
    tree before this session started, and the entire `docs/` directory
    (including this file's current copy) is untracked. This looks like an
    uncommitted `root → docs/` file move from a prior session. Not fixed here
    per "don't commit unless asked" — flagging so it gets staged deliberately
    rather than lost.
