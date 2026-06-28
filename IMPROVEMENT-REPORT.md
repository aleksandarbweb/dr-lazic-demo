# Ordinacija Dr. Terzić — Improvement Plan & Working Tracker

<!-- ============================================================= -->
<!-- HOW TO USE THIS DOCUMENT  (read this first, every session)    -->
<!-- ============================================================= -->

> ## 📌 Instructions — read before working
>
> **What this is:** The single living plan + tracker for improving the Dr. Terzić
> clinic site. It is the source of truth for *what to do, in what order, and why*.
> It replaces the old "€50k valuation audit" framing, which was padded with
> features inappropriate for this project.
>
> **What this site actually is:** A real client clinic site for Dr. Terzić's
> Belgrade dermatology practice, built as a **prestige / credibility presence** —
> not a lead-capture machine. The client is confident her clientele comes without
> the site doing booking/CRM/contact work. So those live under **Future Doors**
> (documented, not scheduled), and the priority is making the site look and feel
> like a genuinely high-end build.
>
> **Current reality:**
> - **No real content yet** — no client photos or copy. Build everything polished
>   with placeholders, and make swapping in real assets *trivial* later.
> - **Priorities (in order):** ① Visual polish & craft  ② Content structure
>   (built for easy real-asset swap). Technical foundation, SEO, performance, and
>   a11y ride along as a cheap baseline — not skipped, just not the headline.
>
> **How to work this doc each session:**
> 1. Read this header + the Legend so you know the scope and what's already done.
> 2. Work **top-down through unchecked `[ ]` items**, respecting tier order.
>    Tier 0 is quick hygiene; Tiers 1–2 are the real focus.
> 3. When an item is finished **and verified**, change `[ ]` → `[x]` and add a
>    line to the **Changelog** at the bottom (date + what shipped).
> 4. Found a new idea while building? Add it to the right tier as a new `[ ]`
>    item, with a one-line rationale. Found something that's actually a bad idea?
>    Move it to the **Cut List** with the reason.
> 5. Never silently expand scope into Future Doors or the Cut List without asking.

---

## Legend

- **Checkbox:** `[ ]` = not started · `[~]` = in progress · `[x]` = done & verified
- **Priority:** 🔴 do-now · 🟡 high · 🟢 medium · 🔵 nice-to-have
- **✅ DONE (Phase 1)** = already shipped in a previous session — listed so we
  stop re-flagging it as missing.

### ✅ Already done (Phase 1 — do not redo)
- Branded `not-found.tsx`, `error.tsx`, `loading.tsx` exist.
- `skip-link.tsx` + `#main-content` focus target wired in layout.
- Full i18n (sr/en/ru) across all pages; `<html lang>` syncs to language.
- a11y pass: mobile menu focus trap + `role="dialog"`, Services dropdown
  `aria-expanded`/`aria-haspopup`, gallery lightbox Esc + focus mgmt, FAQ
  `aria-expanded`, contact success `role="status"`.
- `scroll-to-top.tsx`, shared `lib/nav.ts`, fixed hero CTA easing, fixed
  curly-quote stripping, removed `/faktor` easter-egg route, fixed ServiceCard
  hrefs, `.mp4` intro via `next/image`.

---

## Tier 0 — Foundation hygiene  (quick, do-now)

Cheap, high-leverage cleanups. Knock these out first; none need client content.

- [x] 🔴 **Enable image optimization** — removed `images.unoptimized: true` from
  `next.config.mjs`. WebP/AVIF, responsive `srcset`, and lazy loading now active.
  Verified: production build of all 64 pages passes; every `<Image>` has valid
  dimensions.
- [x] 🔴 **Delete dead CSS** — removed the `.brainrot-*`, `.blackhole-*`,
  `.chaos-*` blocks from `app/globals.css` (297 → 146 lines).
- [x] 🔴 **Remove `generator: 'v0.app'`** from `app/layout.tsx`.
- [x] 🟡 **Drop unused heavy deps** — removed `recharts`, `react-day-picker`,
  `input-otp`, `react-resizable-panels`, `embla-carousel-react`, `cmdk`, `vaul`,
  `sonner`, `react-hook-form`, `@hookform/resolvers`, `date-fns`, `zod`,
  `class-variance-authority`, and all `@radix-ui/*` except `react-dropdown-menu`
  (96 npm packages pruned). **`three`/`@react-three/*`/`@types/three` retained on
  purpose** pending the Tier 1 "craft ceiling" decision (item 1 — *Decide the
  craft ceiling*); remove them there if we don't commit to a 3D effect.
- [x] 🟡 **Prune `components/ui/`** — 57 → 1 (kept only `dropdown-menu.tsx`, the
  sole component imported by app code). Also removed the now-dead `hooks/` dir.
- [x] 🟢 **`.DS_Store` hygiene** — verified already untracked and covered by
  `.gitignore` (old report's "tracked" claim was stale). No action needed.
- [ ] 🔵 **Plan to drop `ignoreBuildErrors`** — `next.config.mjs` has
  `typescript.ignoreBuildErrors: true`, hiding real TS errors. Don't flip it
  blindly; fix surfaced errors first, then remove the flag. Track as its own pass.

---

## Tier 1 — Visual polish & craft  (PRIMARY)

The headline goal: make it read as a genuinely high-end, intentional clinic site,
not a template. Respect `prefers-reduced-motion` on everything here.

- [ ] 🔴 **Decide the craft ceiling** — pick the level of ambition before
  building: (a) refined-classic (typography, spacing, restrained motion) or
  (b) one signature "wow" moment (e.g. a tasteful 3D/canvas hero or scroll
  effect — would justify keeping `three`). Document the choice here, then build to
  it consistently.
- [ ] 🟡 **Motion system + reduced-motion** — unify fade/slide-up timings and
  easings into reusable primitives; gate all auto-motion (marquee, carousels,
  parallax) behind `prefers-reduced-motion`.
- [ ] 🟡 **Navbar / mobile menu polish** — slide-in mobile menu with backdrop
  blur and proper enter/exit animation (currently opens instantly).
- [ ] 🟡 **Language switcher** — replace emoji flags (🇷🇸🇬🇧🇷🇺 — inconsistent
  rendering, poor a11y) with clean text labels or proper SVG icons; add
  `aria-label`.
- [ ] 🟡 **CTA micro-interactions** — deliberate hover/active states (subtle
  scale/elevation), consistent across all buttons. No gimmicks.
- [ ] 🟢 **Hero refinement** — stronger composition (clinic + doctor), considered
  type scale; mobile gets a purpose-built stacked layout, not a squeezed grid.
- [ ] 🟢 **Page transitions** — subtle route transitions (`motion` /
  `AnimatePresence` via `app/template.tsx`), kept fast and reduced-motion-safe.
- [ ] 🟢 **Section texture/depth** — tasteful grain on light sections to match the
  dark section; optional restrained parallax on hero/philosophy.
- [ ] 🟢 **Mobile feel pass** — 44–48px touch targets, comfortable input sizing,
  swipe on gallery lightbox.
- [ ] 🔵 **Custom cursor / ambient effects** — only if they fit the chosen craft
  ceiling; skip if they read as gimmicky.

---

## Tier 2 — Content structure  (PRIMARY)

Build the scaffolding so when real photos/copy arrive, swapping them in is a
trivial, low-risk edit. No fake testimonials/results presented as real.

- [ ] 🔴 **Asset/placeholder system** — one clearly-labeled place for placeholder
  images with a documented swap path; per-service unique slots (today many
  services share `dermatology-treatment.jpg`). Use `next/image` blur/color
  placeholders so swaps don't shift layout.
- [ ] 🔴 **Centralize business data** — create `lib/business-data.ts` for address,
  phone, hours, email, social links, map URLs (currently duplicated across
  `footer.tsx`, `kontakt/page.tsx`, etc.). Single source of truth.
- [ ] 🟡 **Per-service copy structure** — replace the templated `buildServiceCopy`
  output in `app/usluge/[slug]/page.tsx` with a typed content shape (intro,
  benefits, process, aftercare, FAQ) that reads cleanly even with placeholder
  text, and is obviously where real copy drops in. Keep custom service pages
  (`akne`, `botoks-fileri`, …) consistent with that shape.
- [ ] 🟡 **Before/after gallery scaffolding** — build the before/after slider
  component + data shape and category, with placeholders and a consent/caption
  field, ready for real consent-signed photos. (Highest-impact slot once content
  exists — build the frame now, don't fake the photos.)
- [ ] 🟡 **Trust / credentials sections** — structured slots on `o-nama` for
  licenses, certifications (Allergan/Fotona), affiliations, clinic timeline —
  empty-state-friendly until real data arrives.
- [ ] 🟢 **Equipment ↔ service cross-links** — link each device on `oprema` to the
  services it powers and vice-versa; real device photo slots.
- [ ] 🟢 **Services page usability** — with 60+ services, add category
  filter/search and a "featured treatments" group on `app/usluge/page.tsx`.
- [ ] 🟢 **Convert static client pages to server components** — `app/usluge/page.tsx`
  is `"use client"` but renders static catalog data; server render for SEO.

---

## Tier 3 — SEO / performance / a11y baseline  (alongside)

Cheap correctness that should land while doing Tiers 1–2. Not the headline, but
no excuse to skip.

- [ ] 🟡 **Core metadata + OpenGraph/Twitter** — per-page `metadata` with titles,
  descriptions, canonical, and OG/Twitter images (1200×630). Remember localized
  titles if i18n routing ever moves to sub-paths.
- [ ] 🟡 **`sitemap.ts` + `robots.txt`** — dynamic sitemap covering pages +
  service slugs; robots with sitemap reference.
- [ ] 🟡 **JSON-LD schema** — `MedicalBusiness`, `Physician`, `MedicalProcedure`
  per service, `FAQPage` on FAQ sections, `BreadcrumbList`. High rich-snippet ROI,
  pure markup.
- [ ] 🟢 **Image `sizes` + priority audit** — add `sizes` to content `<Image>`
  to stop layout shift; keep `priority` only on hero.
- [ ] 🟢 **Contrast + a11y polish** — verify subtle greys (`#6b6b6b` on white)
  hit 4.5:1; confirm decorative images are `aria-hidden`; finish FAQ accordion
  ARIA consistency.
- [ ] 🟢 **Reduced-motion coverage** — ensure marquee/auto-carousels respect it
  (overlaps Tier 1 motion system).
- [ ] 🔵 **Preconnect/dns-prefetch** — for Google Fonts / Maps embed domains.

---

## Future Doors  (deferred — documented, NOT scheduled)

Real possibilities for when/if the client wants the site to do business work.
Raise these in client conversations; do **not** build without a green light.
Each is a phase of its own.

- 🚪 **Functional contact form** — Resend/Web3Forms/Formspree + spam protection
  (honeypot/invisible captcha). Form currently fakes success.
- 🚪 **Online booking** — Calendly/Acuity embed or custom scheduler.
- 🚪 **Analytics** — GA4/GTM (Vercel Analytics already present) for real metrics.
- 🚪 **GDPR / cookie consent + privacy policy + medical disclaimer** — required
  *before* any real form/analytics/data collection goes live.
- 🚪 **Email nurture / CRM** — only if booking/contact gets real volume.
- 🚪 **Content engine (blog)** — long-tail SEO; meaningful but a real time sink.
- 🚪 **Google Business reviews embed / Instagram feed** — strong trust signals,
  depend on client accounts + API setup.
- 🚪 **Sticky mobile call/WhatsApp CTA** — fits Serbian user behavior; pull this
  forward the moment the client wants inbound contact from the site.

---

## Cut List  (rejected — with reasons, so they don't creep back)

- ❌ **Exit-intent popups** — intrusive; cheapens a medical/prestige brand.
- ❌ **Urgency/scarcity ("samo 3 termina!")** — manipulative and inappropriate for
  a doctor's office; erodes trust.
- ❌ **Referral program / gift cards / financing/installments** — retail tactics
  off-brand for this clinic; not requested.
- ❌ **A/B testing infra (Optimizely/VWO)** — pointless without traffic + a
  conversion goal, which we've deferred.
- ❌ **Admin dashboard / patient portal** — large app surface, no current need,
  data-protection liability.
- ❌ **PWA / service worker** — premature; adds caching-bug risk for no real gain
  on a brochure-class site.
- ❌ **Storybook** — overhead unjustified at this component count.
- ❌ **3D machine viewer on `oprema`** — depends on assets we won't have; if 3D is
  wanted it belongs in the Tier 1 hero "wow" decision, not here.
- ❌ **Fake testimonials/results/counters** — never present invented patients,
  numbers, or before/after photos as real.

---

## Changelog

_Add a dated line here whenever an item is checked off._

- 2026-06-28 — Rewrote this report from the old "€50k audit" into a tiered,
  scope-accurate working tracker (priorities: visual craft + content structure;
  booking/CRM moved to Future Doors). No code changes yet.
- 2026-06-28 — **Tier 0 hygiene done** (verified via clean 64-page `next build`):
  enabled Next image optimization; deleted dead `globals.css` blocks (297→146
  lines); removed `generator: 'v0.app'`; pruned `components/ui/` 57→1 and removed
  dead `hooks/`; trimmed `package.json` (96 npm packages removed). `three`/r3f
  kept pending Tier 1 craft decision; `ignoreBuildErrors` still pending.
