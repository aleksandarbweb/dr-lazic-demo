# Client Content Map — NOVA STRUKTURA SAJTA DR TERZIC.docx

**Date produced:** 2026-07-10 (requested/filed as 2026-07-09 per session instructions)
**Updated:** 2026-07-10 (service-content implementation pass — see §9)
**Updated again:** 2026-07-10 (client-content supplement pass: dermatologija-za-celu-porodicu subtitle,
bradavice page restructure, real patient reviews, em-dash/typo cleanup — see §11)
**Source:** `docs/client-input/NOVA-STRUKTURA-SAJTA-DR-TERZIC.docx` (Marta's raw structure notes)
**Purpose:** map the DOCX to site routes, separate ready vs. pending content, and flag every
numerical/factual claim that needs client confirmation before it's treated as final. This is a
companion to `docs/IMPROVEMENT-REPORT.md` (the master plan), not a replacement for it.

> **Standing correction (2026-07-10):** the DOCX is the primary source of truth for Serbian
> content. If Marta wrote a direct claim or number, treat it as client-provided and use it — do
> not remove or soften it unless it's clearly an unfinished internal note (e.g. "Šaljem CV",
> "možda nešto drugo?", "ubaciti sliku", "otvori donji prozor..."). §2 below has been rewritten
> under this standing correction — the previous version was more defensively hedged than the
> client actually asked for.
>
> **Important production note found this session:** the DOCX (`.docx`, a zip container) has
> **7 embedded OLE Word documents** under `word/embeddings/` (not just the top-level text) —
> these contain the detailed clinical content (HPV/wart types, papilloma/keratosis descriptions,
> Nd:YAG mechanism, acne protocols) that the plain-text extraction used in the 2026-07-09 session
> completely missed. There are also 7 `.emf` screenshots under `word/media/` that could not be
> decoded in this environment (no EMF renderer available — not Preview/QuickLook-compatible, no
> ImageMagick/LibreOffice installed). **If a future session needs to re-read this DOCX, unzip it
> and run `textutil -convert txt` on each file under `word/embeddings/*.docx` too, not just the
> top-level document — otherwise most of the real clinical detail will be invisible again.**

---

## 1. Route mapping

| DOCX section | Site route(s) | Status this pass |
|---|---|---|
| Naslovna (hero + stats) | `/` (`app/page.tsx`, `sr.ts` → `home.hero`, `home.stats`) | ✅ Updated |
| O nama (full story + short story + team + values) | `/o-nama` | ✅ Updated |
| Naš tim (Marta, Biljana, Snežana, Milica, Melissa, Sonja) | `/o-nama` | ✅ Marta + Snežana done; Biljana pending CV; Milica/Melissa/Sonja added as name+role only |
| Usluge (6 categories, ~40 bullet services) | `/usluge` + `lib/service-catalog.ts` + `app/usluge/*` | 🟡 Partial — see §4 |
| Full face / personalizovani estetski pristup | `/usluge/full-face` | ✅ Flagship page, fully expanded with Marta's detailed content — see §12 |
| Oprema (8 devices, final Marta DOCX list) | `/oprema` | ✅ Updated to final DOCX equipment list — see §5 and §12 |

---

## 2. Numerical / factual claims — client-provided, in use

Per the 2026-07-10 standing correction, these are Marta's own claims from the DOCX and are used
on the site as client-provided content. This table exists so a future session (or Marta herself)
can see every number at a glance in one place — not to imply they're improper or need walking
back.

| Claim | Where used | Note |
|---|---|---|
| **"25+ godina iskustva"** | Homepage hero/stats, o-nama story, Marta bio | Direct from DOCX (updated from the old site's "20+"). In use. |
| **"60+ dermatoloških procedura"** | Homepage stats | In use, matches the pre-existing verified site figure. Marta's own note in the DOCX — *"mozda nesto drugo?"* — flags that she herself may want to swap this for a different figure or framing; worth a quick check with her, not because the number is wrong but because she hasn't fully committed to it. |
| **"15000+ zadovoljnih pacijenata"** | Homepage stats | Direct from DOCX. In use, replacing the old site's invented "1000+". |
| **"više stotina hiljada uspešno izvedenih procedura"** (several hundred thousand procedures) | O nama story (`onama.storyP3`) | Direct from DOCX. **Restored 2026-07-10** — the 2026-07-09 session had softened this to "veliki broj" (a large number) as an unrequested editorial call; per the standing correction that was walked back and Marta's actual wording is back in `sr.ts`/`en.ts`/`ru.ts`. |
| "desetine hiljada izvedenih tretmana" (tens of thousands, laser procedures specifically) | Marta full bio (`onama.marta.bio1`) | Direct from DOCX, scoped to laser treatments specifically. In use. |

**If a genuinely unfinished/internal note is found** (patterns like "Šaljem CV", "možda ubaciti",
"otvori donji prozor jer ima još teksta...", "slike koje se ne uklapaju...") — those are Marta's
working notes to herself, not public copy, and should stay excluded or flagged as TODO (see §7 for
the CV example already handled this way).

---

## 3. Homepage (§B) — what changed

- Hero title: "Ekskluzivna nega vaše kože" → **"Personalizovana briga o vašoj koži"** (split
  across `titleLine1`/`titleLine2` to preserve the existing italic-line-2 styling).
- Hero description: replaced with Marta's own positioning sentence (individual approach,
  diagnostics + treatment, careful treatment selection, natural results, long-term skin health) —
  used near-verbatim per "prefer client wording" rule, since it already reads as premium/concise.
- Hero trust item "20+ godina iskustva" → "25+ godina iskustva".
- Stats strip: 25+ / 2 / 60+ / **15000+** (was 1000+, see §2 flag above).
- Homepage doctor teaser bio for Dr. Marta replaced with DOCX's own "short version for top of
  page" paragraph (pioneer laser dermatology, Allergan national trainer, natural results). Dr.
  Marta's title updated from "Specijalista dermatovenerologije" to "Osnivač ordinacije i
  specijalista dermatovenerologije" (adapted from DOCX "CEO", which doesn't read naturally in
  Serbian medical-site copy — documenting this adaptation choice here).
- **Not touched (explicitly out of scope for this pass, belongs to M0):** fake testimonials
  section, fake contact-form success state, services marquee/carousel behavior. These remain
  exactly as flagged in `IMPROVEMENT-REPORT.md` M0.

---

## 4. Services (§D) — catalog vs. real content (updated 2026-07-10)

### Reusable structure added this session
`components/service-page-layout.tsx` gained one new **optional** section — `methods?: string[]`,
rendered as "Metode i Tehnologije" between "Šta je" and "Kako funkcioniše", only when provided.
This is the one structural change made to support the richer DOCX content (many services now have
a genuine, distinct list of modalities/technologies that didn't have a natural home in the
existing `whatIsIt`/`howItWorks`/`idealCandidates`/`expectedResults`/`faqs` shape). All existing
pages that don't pass `methods` render exactly as before — verified no visual regression.

### Rewritten this session with real, richly-detailed DOCX content
The 2026-07-09 session's plain-text DOCX extraction missed **7 embedded OLE Word documents**
inside the `.docx` (see the note at the top of this file) — those documents contain the specific
clinical detail (HPV biology, wart types, papilloma/keratosis descriptions, Nd:YAG laser mechanism,
detailed acne protocols) that justified rewriting the following pages in full:

- **`/usluge/bradavice-papilomi-keratoze-moluske`** — full rewrite. Now includes: HPV cause and
  contagious nature (70+ virus types), autoinoculation, 2–6 month appearance after contact, wart
  types (vulgar/common, plantar, genital/condyloma with the cervical-screening note for women),
  papilloma/soft fibroma and seborrheic keratosis descriptions, and the 3 real methods (cryotherapy,
  radiowave surgery, Er:YAG ablative laser) with the 7–14 day crust-healing detail. Kept the "no
  guaranteed permanent cure" framing for HPV (medically accurate, not overclaiming) since that's a
  clinical fact from the source document itself, not an editorial hedge.
- **`/usluge/kapilari-i-hemangiomi-laser`** — full rewrite. Now includes: telangiectasia/spider
  nevus/hemangioma descriptions, causes (sun, wind, hormones, genetics), the Nd:YAG 1064nm
  mechanism (hemoglobin absorbs energy → heat coagulates the vessel), sensation during treatment,
  1–3 sessions every 4–6 weeks, and same-day aftercare detail. Added a candidate line for rosacea
  ("poseban protokol rada" per the DOCX) without inventing the protocol itself, since the DOCX only
  references it, doesn't detail it.
- **`/usluge/akne`** — significant rewrite (title was previously mislabeled "Medicinska
  Dermatologija" inside its own hero — fixed to "Lečenje Akni"). Added: individualization factors
  (age, sex, habits, metabolism, hormones), the PCOS/insulin-resistance adult-acne note with
  gynecologist/endocrinologist involvement, and the specific laser protocols (Nd:YAG 5–6
  weekly then monthly maintenance; Clear Skin/FDA-approved 4–6 sessions every 2–3 weeks), chemical
  peel series cadence, and comedoextraction.
- **`/usluge/full-face`** — enriched (kept the existing philosophy/harmony framing from the
  2026-07-09 pass, added the specifics this session's instructions asked for): MD Codes™
  methodology with the Dr. Mauricio de Maio attribution, structural-aging paragraph (bones,
  muscles, fat pads, ligaments; midface, under-eye tired look, marionette lines, lower-third
  laxity), and the real product/brand list (Juvederm, Allergan botulinum toxin type A, HarmonyCa,
  Juvelook, Morpheus8, Fotona 3D/4D/5D, Clear Skin, Clear Lift, DVL, Nd:YAG, Er:YAG,
  biorevitalization, PRP, polynucleotides, exosomes) as a `methods` list and FAQ. **One claim
  intentionally still not restored**: DOCX says fillers/botox can *"podmladiti lice za 5 do 10
  godina"* (look 5–10 years younger) — this is a quantified result guarantee, a different category
  from factual methodology/brand attribution, and stays softened to "svežiji, odmorniji izgled"
  per the master plan's Cut List (never invent/promise quantified results). Flag for Marta if she
  wants this specific number restored — get it in writing first.

### Light enrichments (small, targeted additions to already-solid pages)
- **`/usluge/medicinska-dermatologija`** — added the embedded doc's opening line: the exam is for
  both children and adults, and covers skin, visible mucosa, nails, and hair comprehensively.
- **`/usluge/dermoskopija`** — added a paragraph naming the actual equipment (DermLite DL5 +
  Canfield D200EVO) and its 2 extra real capabilities already documented on `/oprema`: digital AI
  diagnostics and trichoscopy (AI scalp/hair analysis).

### Verified, not touched (DOCX gives no new content beyond what's already live)
- `/usluge/podmladjivanje-fotona-3d-4d-5d`, `/usluge/strije-laser`,
  `/usluge/gljivicna-oboljenja-laser`, `/usluge/hemijski-pilinzi`, `/usluge/botoks-fileri`,
  `/usluge/prp`, `/usluge/profhilo`, `/usluge/morpheus8`, `/usluge/laserska-epilacija`.

### New catalog entry (title-only — do not fabricate a full page)
- **"Hirurško uklanjanje mladeža sa PH dijagnostikom"** added to `lib/service-catalog.ts`
  (Dermatovenerologija category, slug `hirursko-uklanjanje-mladeza`) — this DOCX bullet had no
  catalog entry at all before. No embedded-doc content was found for it, so it's title-only and
  falls through to the generic `[slug]` template, per the "don't fabricate depth" rule.

### Known duplication (not created by this pass, not fixed — documented per "no cherry-picking" rule)
The catalog has 3–4 overlapping thin entries for the same lesion types split by modality
(`radiotalasna-dermohirurgija`, `tecni-azot`, `uklanjanje-keratoza-laser` all still fall through to
the generic `[slug]` template). This is pre-existing catalog architecture (M4 territory — "i18n the
catalog" / "typed service content shape" / retire `buildServiceCopy()`). Not resolved here;
flagging so M4 doesn't get blindsided.

### Only titles/placeholders (from DOCX, no real content yet — updated 2026-07-10)
- **Dermatovenerologija**: lečenje rozacee (DOCX only references "poseban protokol", doesn't
  detail it — mentioned as a candidate note on the vascular page, no dedicated page), opadanje
  kose, pojačano znojenje, hirurško uklanjanje mladeža sa PH dijagnostikom (now has a catalog
  entry, see above — still title-only, no dedicated page).
- **Laserski tretmani**: rozacea-laser, akne-laser (real akne laser detail now lives on the main
  `/usluge/akne` page instead — no separate laser-specific page created, avoids duplicating the
  same Nd:YAG/Clear Skin content twice), uklanjanje pigmentnih promena (melasma/lentigo/PIH —
  only generically covered via `/oprema`'s SP Dynamis entry, no service-level prose found).
- **Estetska dermatologija**: laserski pilinzi (no dedicated page; distinct from the already-solid
  `/usluge/hemijski-pilinzi`), uklanjanje ožiljaka / uklanjanje strija as *general* catalog items
  (the *laser-specific* versions already have real content on `/usluge/strije-laser` and via the
  Fotona flagship page).
- **Kozmetologija**: medicinski/biološki tretmani lica, savetovanje za negu, Dermapen as a
  *service* (Dermapen's 2 real capabilities are already documented as equipment on `/oprema` —
  not enough distinct content to justify a separate service page yet).
- **Dermomapiranje** (full-body mole mapping) — has a catalog entry, no dedicated page; its content
  is already partly covered inside `/usluge/dermoskopija`'s "dermomapiranje" paragraph.
- All of the above remain on the generic `[slug]` template; do not hand-write copy for them until
  Marta supplies more than a title (per "don't invent depth" rule).

---

## 5. Equipment (§E) — `/oprema` mapping against DOCX

| DOCX equipment | Current site (before this pass) | Action taken |
|---|---|---|
| AvalancheLase by Fotona (hair removal + folliculitis) | "Light Sheer ET" by **Lumenis** — brand not in DOCX at all | **Renamed/corrected** to AvalancheLase/Fotona per client source. ⚠️ **Needs confirmation**: was the Lumenis Light Sheer actually replaced, or is this an omission in Marta's notes? Don't treat the Lumenis→Fotona swap as settled until she confirms. |
| SP Dynamis by Fotona (rejuvenation, scars, striae, pigment, vascular, benign lesions, fungal nail, rosacea, acne) | "SP Spectro" by Fotona — **wrong model name**, and its treatment list duplicated hair-removal/folliculitis (already covered by the other Fotona device) | **Corrected model name** to SP Dynamis; **removed the duplicated** hair-removal bullets (now live only under AvalancheLase); added "Lečenje akni" bullet per DOCX. |
| Harmony XL Pro by Alma | Not present | **Added** (rosacea, poikiloderma, skin rejuvenation, pigmentation, acne, scar removal — all from DOCX). |
| Morpheus 8 | Existed only as a *service* (`/usluge/morpheus8`), not as equipment | **Added as equipment entry**, cross-linked to the existing service page. |
| Ellman Radiosurgery | Present, matches closely | Tightened wording to match DOCX phrasing; kept the pre-existing "Elektroliza (trajno uklanjanje sedih i plavih dlačica)" bullet as a 3rd treatment alongside the 2 DOCX-listed ones (real capability, not contradicted by DOCX, not removed without cause — see §12). ⚠️ **Still open**: client asked (2026-07-13) why a 3rd item shows when her list only names two; this row's documented reason is the answer, but it's flagged here again in case she'd rather it were removed. |
| CryoPro / CryoPen | Present as "CryoPen" only | **Relabeled** "CryoPro & CryoPen" per DOCX; treatments already matched. |
| DermLite DL5 + Canfield D200EVO dermatoscope | "DermLite DL3" only, 2 bullets | **Corrected model** (DL3→DL5), **added Canfield D200EVO** to the same card (DOCX presents them as one combined heading), **added** digital AI diagnostics + trichoscopy (AI hair/scalp analysis) bullets. |
| Dermapen | Not present | **Added** (hair growth stimulation, facial skin quality — pores/pigmentation/fine lines). |
| *(not in DOCX at all)* Zimmer Cryo 6 / Cryo Tube (cryolipolysis) | Present through 2026-07-12 | **Removed 2026-07-13** — confirmed absent from Marta's current DOCX equipment list (9 devices → 8), so the listing and its `oprema.devices.zimmer` translations were deleted from `sr.ts`/`en.ts`/`ru.ts` and `deviceConfig`. See §12. |

Manufacturer logos (Fotona, Alma, InMode, Ellman, Cortex, H&O, Canfield, Dermapen PNGs supplied by the
user into `public/images/Logos/`) were tried on each equipment card in several treatments (bordered
chip, grayscale badge, bare inline image) but were dropped from the final UI: with 8 differently-shaped
brand marks in a row, every version read as visually noisy/distracting rather than clean. Final cards
are plain text (manufacturer name, device name, subtitle, description) — see §12. The logo PNGs remain
in `public/images/Logos/` unused, in case a future pass wants to revisit this with a different layout.

All equipment/treatment copy is on `/oprema`, which **is** wired to `sr.ts`/`en.ts`/`ru.ts` via
`t.oprema.devices` (see the i18n-status correction in §6 below — an earlier version of this note
incorrectly called the page Serbian-only/hardcoded).

Note: Morpheus8's manufacturer is displayed as "InMode" — this is a well-established public fact
(InMode makes Morpheus8), not sourced from the DOCX, which didn't list a manufacturer for it.
Flagging only because it's the one attribution in this pass not directly copied from client text.

---

## 6. i18n status

- **Dedicated service pages** (`akne`, `full-face`, etc.) pass their content as a literal Serbian
  `serviceData` object into `ServicePageLayout` — the page-specific copy (whatIsIt, methods, FAQs...)
  is Serbian-only, hardcoded, not wired to `sr.ts`/`en.ts`/`ru.ts`. Only the shared UI chrome around
  it (`t.servicePage.*` labels like "Saznajte više", "Tretmani") is translated. This was already true
  before this session (flagged in the master plan's i18n scorecard row) — editing/adding Serbian
  content here does **not** regress EN/RU, since these routes never had content translations to begin
  with. No TODO needed beyond the master plan's existing M4 item ("i18n the catalog").
- **Correction (2026-07-13): `/oprema` is not in the same bucket as the bullet above.** Unlike the
  dedicated service pages, `/oprema` pulls its device copy through `t.oprema.devices[key]`, and
  `oprema.devices` genuinely exists in all three of `sr.ts`/`en.ts`/`ru.ts` (verified by reading the
  files directly, not just this doc's prior claim). An earlier version of this note incorrectly
  lumped `/oprema` in with the hardcoded service pages — that was wrong. `/oprema` is i18n-wired; the
  8-device content (descriptions, subtitles, treatment lists) is translated and kept in sync across
  all three locale files as part of this pass.
- **Homepage + O nama** *are* i18n-wired. Every new/changed key added to `sr.ts` this pass got a
  matching key in `en.ts` and `ru.ts` with a real (not placeholder) translation, so the build's
  structural type check (`Dictionary = typeof sr`) stays satisfied and EN/RU visitors never see a
  literally missing string. **These EN/RU translations are AI-assisted, not client-reviewed** —
  flagging for native proofreading before launch:
  - `home.hero.titleLine1/titleLine2/description`, `home.stats`, `home.hero.trustItems[0]`,
    `home.doctorsList[0].bio`, `home.doctorsList[0].title`
  - `onama.heroIntro` (new key), `onama.storyTitle/storyP1-3`, `onama.specialistsTitle`,
    `onama.values` (new set), `onama.marta.bio1/bio2/bio3` (bio3 new), `onama.marta.specializations`,
    `onama.snezana` (new), `onama.otherTeamTitle` / `onama.otherTeam` (new)
- **New 2026-07-10**: `servicePage.methodsLabel` / `servicePage.methodsTitle` added to all three
  translation files (shared UI labels for the new optional "Metode i Tehnologije" section in
  `ServicePageLayout` — see §4). These are short, low-risk labels ("Approach" / "Methods &
  Technologies" style), translated directly, no proofreading concern.

---

## 7. Images/assets — missing or flagged for replacement

> **Convention update (2026-07-10):** client-provided/replacement images are now dropped in
> `public/images/client/` (flat, not `public/images/client/marta-docx/`). Check that folder before
> writing any image-related code; if a file matching a service already exists there, use it instead
> of inventing a path or reusing a generic placeholder.
>
> `uklanjanje-virusnih-bradavica-kondiloma-i-moluski.png` (1500×832) was supplied there this session
> and is now the hero image for `/usluge/bradavice-papilomi-keratoze-moluske`, replacing the shared
> generic `dermatology-treatment.jpg` it used before. The clipart-style "doctor examining a back with
> a magnifying glass" image Marta flagged as not fitting the brand was **not** used anywhere, per her
> explicit note.

- No photo exists for **Snežana Stojković** — used a neutral icon-avatar placeholder (no image
  file), not a stock photo, per rule 7 (don't use DOCX screenshots, don't fake a headshot).
- No photos for **Milica Dobrić, Melissa Ćelović, Sonja Bubulj** — listed as name+role text only,
  no image slot attempted.
- **Dr. Biljana Petković — CV not yet sent** ("Šaljem CV" in DOCX). Left her existing bio
  untouched (it's generic/plausible, not fabricated-to-order) and added a code comment
  `TODO: replace with real CV content from Marta` at her block in `app/o-nama/page.tsx`. Do not
  publish her bio as final until the real CV arrives.
- DOCX explicitly flags some existing site images as mismatched/needing replacement ("Slike koje
  se ne uklapaju... bi bilo ok da promenimo") but doesn't specify which ones beyond a screenshot —
  no action taken (can't act on an unspecified reference), but noting the client wants an image
  pass on `/usluge`.
- Per rule 7, no DOCX screenshots were used as site assets anywhere in this pass.

---

## 8. Explicitly not done in the 2026-07-09 session (historical, kept for the record)

- M0 integrity fixes (broken gallery paths, fake testimonials, fake form success, intro-replay,
  `ignoreBuildErrors`, `three` deps) — untouched, that was a content pass, not M0. (These were
  since fixed in a dedicated M0 session — see `IMPROVEMENT-REPORT.md` changelog.)
- Catalog i18n / typed `ServiceContent` schema / retiring `buildServiceCopy()` — M4 scope, not
  started (still not started as of 2026-07-10 — see §9).
- Full equipment↔service cross-link UI (M5 item) — equipment copy references which services each
  device powers in prose, but no dedicated clickable cross-link component was built (still true).

---

## 9. Testimonials / real patient-experience section — resolved 2026-07-10 (see §11)

Update: the user pasted real, verbatim Google review text directly into the session on 2026-07-10
(after the attempt below failed to retrieve it programmatically). A curated "Iskustva Pacijenata"
section was built from that real text — see §11 for the full implementation summary. The attempt
notes below are kept for the historical record of why WebSearch/WebFetch couldn't get there on their
own.

### Original attempt (2026-07-10, superseded above)

The 2026-07-10 session's instructions asked for a real "Iskustva pacijenata" section sourced from
curated, lightly-adapted **real public Google reviews** (not fake, not invented) — explicitly
different from the fake testimonials removed in M0.

**What was attempted:** `WebSearch` for the clinic's reviews, then `WebFetch` on:
- The clinic's actual Google Maps listing (redirects through a consent page; Maps review content
  is rendered client-side by JavaScript and isn't retrievable through a plain fetch-and-convert
  tool).
- `hipokratija.rs`'s dedicated patient-experience page for this clinic — the page **explicitly
  states there are no reviews posted** ("Ne postoje iskustva za ovu specijalizaciju").
- A relevant `doktor.rs` forum thread about Belgrade dermatologists — no mention of this clinic at
  all.

**Result: no real, verifiable review text could be retrieved with the tools available in this
session.** Given the explicit instruction *"do not invent reviews, names, or meanings"*, and that
fabricating review-shaped content while labeling it "adapted from public reviews" would be worse
than the original fake testimonials (it would falsely claim a real source), **no testimonials
section was built this session.** The homepage keeps the honest "Naš Pristup" philosophy-card
section from the M0 pass.

**Recommended next step for whoever picks this up:** either (a) Marta/the client exports the
actual review text from the Google Business Profile dashboard (copy-paste or screenshot) and hands
it over directly, or (b) confirms there simply aren't reviews yet worth featuring — at which point
building the section with real content becomes a fast, low-risk follow-up (the "Naš Pristup"
section's card component can likely be reused/adapted for this).

---

## 10. Summary of the 2026-07-10 service-content implementation pass

- Read the DOCX's 7 embedded OLE Word documents (previously missed) and used them as the primary
  new source for this pass — see the note at the top of this file.
- Extended `ServicePageLayout` with one new optional `methods` section (see §4).
- Rewrote 4 service pages with real, detailed content: `bradavice-papilomi-keratoze-moluske`,
  `kapilari-i-hemangiomi-laser`, `akne`, `full-face`.
- Lightly enriched 2 already-solid pages: `medicinska-dermatologija`, `dermoskopija`.
- Added 1 missing catalog entry (title-only): "Hirurško uklanjanje mladeža sa PH dijagnostikom".
- Restored one previously-softened client claim ("više stotina hiljada uspešno izvedenih
  procedura") per the standing correction — see §2.
- Attempted, could not implement: real-review testimonials section — see §9.
- Not touched, out of scope: M1 token/geometry work, catalog i18n (M4), equipment↔service
  clickable cross-links (M5).

---

## 11. Summary of the 2026-07-10 targeted content-supplement pass

Follow-up pass while the user manually cross-checked Marta's DOCX against the live site, finding
specific gaps the earlier extraction passes had missed. Explicitly **not** M1 design-system work.

- **"Dijagnostika i lečenje kožnih i polnih bolesti" / "Dermatologija za celu porodicu" — now
  visible.** `/usluge/medicinska-dermatologija` (`app/usluge/medicinska-dermatologija/page.tsx`) hero
  title changed from the previous "Medicinska Dermatologija" to the catalog's actual display name,
  **"Dijagnostika i Lečenje Kožnih i Polnih Bolesti"**, and the subtitle now leads with **"Dermatologija
  za celu porodicu"** as the requested tagline/podnaslov, followed by the descriptive sentence. The
  `whatIsIt` opening sentence was replaced with the user's exact cleaned wording ("Specijalistički
  pregled dece i odraslih u ordinaciji Dr Terzić obuhvata sveobuhvatan pregled kože, vidljivih
  sluzokoža i kožnih tvorevina, uključujući nokte i kosu."), which also removed the one em dash that
  was in the old copy. Page metadata (`<title>`/description) updated to match. No duplicate page was
  created; the existing route/catalog entry already matched, only the on-page hero text was stale.

- **Bradavice/papilomi/keratoze/moluske page — restructured, not just a content check.** The page
  already had real DOCX-sourced content from the prior session but presented it as 3 long paragraphs.
  Per this session's explicit formatting requirement, added one small, precedented extension to
  `components/service-page-layout.tsx`: an optional `whatIsItSections?: { heading, body?, items? }[]`
  prop (same pattern as the earlier session's `methods` addition — optional, backward-compatible,
  renders nothing on pages that don't pass it). `app/usluge/bradavice-papilomi-keratoze-moluske/page.tsx`
  now uses it for 6 headed sections: *Šta su bradavice i HPV*, *Kako se prenose*, *Tipovi bradavica*
  (4 bulleted types: vulgarne, plantarne, ravne mladalačke, filiformne, none of which had all been
  enumerated before), *Kondilomi (polne bradavice)*, *Papilomi i seboroične keratoze*, and *Važno je
  znati: mogućnost recidiva*. Also added a new FAQ ("Da li bradavice mogu same da nestanu?") covering
  the spontaneous-regression point from the DOCX that wasn't previously surfaced. All of the
  session's requested Serbian Latin typo fixes were applied while rewriting (mlađe, takođe, prođu,
  najvećeg, šire, muškaraca, žena, citološke — all correct in the new copy).

- **Bradavice page image — client file found and used.** `public/images/client/` was empty at the
  start of this session; the user added
  `uklanjanje-virusnih-bradavica-kondiloma-i-moluski.png` (1500×832) mid-session. Confirmed present,
  wired in as the page's `imageSrc`, replacing the generic shared `dermatology-treatment.jpg`. See
  the note added to §7.

- **Real patient reviews — implemented.** The user pasted verbatim Google review text directly
  (resolving the §9 dead end from the prior session). Curated 8 of the reviews for a new "Iskustva
  Pacijenata" section on the homepage (`app/page.tsx`), placed directly after the existing "Naš
  Pristup" section (kept, not replaced — both read cleanly on the page). Reused the existing
  `TestimonialCard` component (no new component needed) in a `sm:grid-cols-2 lg:grid-cols-4` grid.
  Reviewers are attributed as first name + last initial (Nataša D., Sean S., Diane, Nevena A., Ana
  I., Pedja D., Marina V., Natali D.) — no names were invented, none were fabricated verbatim-and-
  unlabeled (English/Serbian originals were lightly shortened for web readability, consistent with
  the session's "ok to shorten and lightly adapt" rule). Coverage across the requested angles: trust
  in Dr. Marta + thorough explanation (Nataša D., Pedja D.), professionalism (Sean S., Diane, Pedja
  D.), international/English-speaking patient confidence (Sean S., Diane), family/long-term trust
  (Nevena A.), dermatology/service results (Ana I., laser hair removal), clinic atmosphere (Natali
  D.), plus a short punchy trust quote (Marina V.). Added the required subtle source line: "Izvodi
  iz javno dostupnih recenzija pacijenata." New i18n keys: `home.reviewsSection`, `home.reviewsList`,
  `home.reviewsSource` in all three of `sr.ts`/`en.ts`/`ru.ts`. **EN/RU review text is an AI-assisted
  translation of the same real reviews** (the Serbian originals were translated into English for the
  originally-English reviews' SR/RU counterparts and vice versa), not independently sourced — flagged
  here the same way the 2026-07-10 M0 session flagged its other AI-assisted translations, for native
  proofreading before launch.

- **Em dash cleanup — public copy only.** Swept every `—` in `app/`, `components/`, `lib/` (168
  occurrences found). ~140 were in rendered copy across 15 files (mostly the recurring "Label — detalj"
  list-item pattern, replaced with a colon; prose clause breaks replaced with a comma; two
  double-dash parentheticals replaced with real parentheses; one bare "— Author" quote-attribution
  prefix removed since the design already has a visual rule above it). Code comments were
  deliberately left untouched (not rendered to users) — confirmed by a final repo-wide grep that the
  only remaining `—` characters are inside `{/* ... */}` or `//` comments.

- **One Serbian Latin typo fixed in visible copy**: `podmladjuje` → `podmlađuje` in
  `app/usluge/botoks-fileri/page.tsx`. The rest of the session's typo checklist
  (prilagodjen/ledja/izmedju/odžavanje/takodje/mladje/prodju/najveceg/zena/citoloske) was grepped
  repo-wide and found already clean — no occurrences left to fix. Note: `podmladjivanje-fotona-3d-4d-5d`
  and `podmladjivanje-estetika` are URL slugs, not copy — intentionally left as-is (changing a slug
  breaks links).

- **Consistency fix (small, tied to the title change above):** the one other page linking to
  `/usluge/medicinska-dermatologija` by label (`kapilari-i-hemangiomi-laser`'s related-services list)
  had it as "Medicinska dermatologija" — updated to the new display name for consistency.

- Verified: `npx tsc --noEmit`, `npm run build`, and `npm run dev -- --port 3123` with Playwright
  checks across `/`, `/o-nama`, `/usluge`, `/usluge/medicinska-dermatologija`,
  `/usluge/bradavice-papilomi-keratoze-moluske`, `/usluge/akne`, `/usluge/full-face`, `/oprema`,
  `/kontakt`, `/galerija` at 1440×900 and 390×844 — see `IMPROVEMENT-REPORT.md` changelog for the
  full results.

- **Not done, out of scope**: M1 token/geometry work, the final Marta client review report, new
  client questions document, whole-site redesign, and no medical copy beyond what the DOCX/user
  supplied was invented.

---

## 12. Summary of the 2026-07-13 Oprema cleanup + Full Face expansion pass

Wrap-up pass only — no redesign, no new content invented beyond what the client supplied.

- **Oprema (`/oprema`) trimmed to Marta's final 9-item DOCX list, minus Zimmer → 8 devices.**
  Zimmer Cryo 6 / Cryo Tube CL02 was confirmed absent from Marta's current equipment list (it was
  already flagged in §5 as "not in DOCX at all, needs client confirmation before removing" — that
  confirmation came in this session), so it was removed from `deviceConfig` in
  `app/oprema/page.tsx` and from `oprema.devices` in `sr.ts`/`en.ts`/`ru.ts`.
- **Manufacturer logos tried, then removed.** Several treatments were tested directly on the
  equipment cards (a bordered logo chip, a grayscale badge, a bare inline image) using the PNGs the
  user supplied into `public/images/Logos/`. With 8 differently-shaped brand marks side by side, all
  versions read as visually distracting rather than clean, so the final UI reverted to plain text
  cards: manufacturer name, device name, italic subtitle, description. No icons, no logos, no boxes.
  The PNG files themselves were left in place, unused, in case a future pass wants a different layout.
- **Ellman still shows 3 treatments, not 2 — flagged, not changed.** Marta's list names 2 use
  cases (viral warts/condylomas/molluscum, papillomas/keratoses); the site also shows a 3rd
  ("Elektroliza — trajno uklanjanje sedih i plavih dlačica") that was deliberately kept in an earlier
  pass as a real, DOCX-uncontradicted capability (see §5 row). This wrap-up pass did not remove it,
  since removing content wasn't part of the requested scope and a documented reason for keeping it
  already exists — flagging again here in case Marta wants it dropped to match her list exactly.
- **`/oprema` i18n-status correction.** This doc previously (incorrectly) said `/oprema` was
  Serbian-only/hardcoded like the dedicated service pages. It isn't — it's wired through
  `t.oprema.devices` in all three locale files. §6 above has been corrected.
- **Full Face (`/usluge/full-face`) expanded using Marta's full supplied content**, still built on
  the shared `ServicePageLayout` component (same as every other fully-furnished service page, not a
  bespoke layout). Added a 7-entry `whatIsItSections` block covering: *Svako lice ima svoju priču*
  (facial anatomy/why faces look tired with age), *Podmlađivanje za 5 do 10 godina*, *Principi kojima
  se vodim* (her 5 stated principles), *MD Codes™ metodologija* (full Dr. Mauricio de Maio
  attribution), *Nega i kvalitet kože* (now naming Jalupro Super Hydro, Volite, and hemijski pilinzi
  explicitly, which weren't on the page before), *Zašto su bitni konsultacija i pregled* (including
  correcting congenital traits — small chin, thin/asymmetric lips, asymmetric brows), and *Kako
  izabrati pravi estetski tretman* (her 7-point checklist). `methods`, `idealCandidates`,
  `expectedResults`, and `faqs` were expanded to match (FAQs 5→6, candidates 4→6). The client's raw
  notes repeated the same checklist and process-steps content twice in different phrasings; these
  were consolidated once each rather than duplicated on the page.
- **Verified**: `npx tsc --noEmit`, `npm run build`, and `npm run dev -- --port 3123` with browser
  checks across `/`, `/usluge`, `/usluge/full-face`, `/oprema` at 1440×900 and 390×844, plus the WIP
  password gate. See `IMPROVEMENT-REPORT.md` changelog for the full results.
- **Not done, out of scope**: removing the Ellman 3rd bullet, replacing/re-adding equipment logos,
  any M1 design-system work, and no medical copy beyond what Marta's DOCX/notes supplied was invented.
