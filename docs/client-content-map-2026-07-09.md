# Client Content Map — NOVA STRUKTURA SAJTA DR TERZIC.docx

**Date produced:** 2026-07-10 (requested/filed as 2026-07-09 per session instructions)
**Updated:** 2026-07-10 (service-content implementation pass — see §9)
**Updated again:** 2026-07-10 (client-content supplement pass: dermatologija-za-celu-porodicu subtitle,
bradavice page restructure, real patient reviews, em-dash/typo cleanup — see §11)
**Updated again:** 2026-07-14 (full `/usluge` category/subservice replacement per Marta's final
7-category structure, relayed directly by the user — see §13; supersedes §4's 6-category taxonomy)
**Updated again:** 2026-07-14 (official Opšta dermatovenerologija content pass: 12 pages given final
Marta-sourced or explicit-pending content, logo overlay + step-spacing fix applied site-wide — see §15)
**Updated again:** 2026-07-14 (Estetska dermatologija pending-banner pass: 12 of 19 bullets flagged
pending, `full-face` confirmed as the only genuine Marta-sourced page in this category — see §16)
**Updated again:** 2026-07-14 (remaining categories: Laseri/Radiotalasna/Kriohirurgija/Kompjuterizovana
dermoskopija verified as near-total overlap with earlier passes, vaskularne-promena content merged
with fresh Laseri-specific text, 4 new Kozmetologija pending pages, full-face missing-image note — see §17)
**Updated again:** 2026-07-16 (Marta client-preview prep pass: mobile marquee fix, equal service-card
geometry, fresh em-dash/typo scan, client-facing report + email draft — see §18; this closes out the
manual Marta DOCX Serbian content-intake phase, see the dated snapshot below)
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
>
> **Standing public-copy rule (added 2026-07-16):** no em dash ("—" / `&mdash;`) in rendered site
> copy — replace with a comma, colon, parentheses, hyphen, or sentence break, whichever reads best.
> Legitimate en dashes ("–") in numeric ranges (e.g. "1–3 sessions") or established label/detail
> pairs (e.g. "Allergan – National Trainer") are not em dashes and stay as-is. Never touch URL
> slugs. Also keep scanning visible Serbian copy for OCR/diacritic typos (prilagodjen, izmedju,
> takodje, odrzavanje, hladjenje, ledja, mladje, prodju, etc.) on every content pass — see the
> mirrored rule in `docs/IMPROVEMENT-REPORT.md`'s "Standing Public-Copy Rules" section for the full
> list. This is a recurring check, not a one-time cleanup: the 2026-07-10 pass (§11) missed content
> added in later passes, and the 2026-07-16 pass (§18) found and fixed a fresh batch.

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

> **Superseded 2026-07-14 (see §13):** the 6-category taxonomy described in this section
> (Dermatologija / Estetika / Estetska dermatologija / Laserski tretmani / Dermatovenerologija /
> Kozmetologija) has been fully replaced by Marta's final 7-category structure. The category names,
> `id`s, and much of the subservice list below are historical — kept here for the record of how the
> catalog evolved and because the underlying rich dedicated-page content described below (bradavice,
> kapilari, akne, full-face rewrites) is still live and still accurate; only the top-level
> categorization and the exact subservice bullet list changed. See §13 for the current structure.

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

---

## 13. Summary of the 2026-07-14 full `/usluge` category restructure

**Source of this pass:** the user pasted Marta's category/subservice list directly in chat, stating
explicitly it was transcribed by them from the Marta DOCX ("exact instructions based on me going
through the exact marta docx") — not extracted or interpreted by this session. Treated as
client-provided text per the standing correction at the top of this file: used verbatim (with only
spelling/capitalization normalization — e.g. "moluski" → "moluske", "I" → "i" where clearly a typo),
no softening, no invented depth.

### What changed
The site's category taxonomy went from **6 categories** (Dermatologija, Estetika, Estetska
dermatologija, Laserski tretmani, Dermatovenerologija, Kozmetologija — §4 above) to Marta's **7
categories**, replacing the `/usluge` page and homepage services shortcuts entirely:

1. **Opšta dermatovenerologija** — subtitle "Dermatologija za celu porodicu" (rendered under the
   category heading on `/usluge`, italic, per Marta's instruction to include it as a subheading).
2. **Estetska dermatologija** (19 subservices)
3. **Laseri u dermatologiji** (11 subservices)
4. **Radiotalasna hirurgija** (1 subservice)
5. **Kriohirurgija – terapija tečnim azotom** (1 subservice)
6. **Kompjuterizovana dermoskopija** (1 subservice)
7. **Kozmetologija** (4 subservices)

Files changed:
- `lib/service-catalog.ts` — full rewrite of `serviceCategories` (added optional `subtitle?: string`
  to the category type for the "Dermatologija za celu porodicu" line).
- `app/usluge/page.tsx` — renders `category.subtitle` under the `<h2>` when present.
- `lib/nav.ts` — `CategoryKey` type and the header dropdown's 7 `{ categoryKey, href }` pairs,
  anchors now `#opsta-dermatovenerologija`, `#estetska-dermatologija`, `#laseri-u-dermatologiji`,
  `#radiotalasna-hirurgija`, `#kriohirurgija`, `#kompjuterizovana-dermoskopija`, `#kozmetologija`.
- `app/page.tsx` — homepage `servicesConfig` (icon + href per category, 7 entries, order-matched to
  `home.servicesList`). Icons: Stethoscope, Sparkles, Zap, Waves, Snowflake, Microscope, HandHeart.
- `lib/i18n/translations/{sr,en,ru}.ts` — `nav.categoriesDropdown` (7 keys) and `home.servicesList`
  (7 title/description entries) updated in all three locales.

### Slug-reuse decisions (judgment calls, not explicit in Marta's list — flag for her review)
Marta's list repeats several treatments across categories by design (e.g. "Lečenje rozacee" appears
under Opšta dermatovenerologija, Estetska dermatologija, *and* Laseri u dermatologiji as "Laserski
tretmani rozacee" — same treatment, different taxonomy lens). Rather than creating duplicate thin
pages, repeated/overlapping bullets were pointed at **one shared slug**, reusing the existing
hand-written dedicated pages wherever the topic matched:
- "Lečenje akni" / "Laserski tretman akni" (3 bullets) → `/usluge/akne`
- "Uklanjanje virusnih bradavica, kondiloma i moluske" / "Uklanjanje papiloma i keratoza" /
  "Lasersko uklanjanje benignih promena" / "Uklanjanje benignih promena" (radiotalasna) /
  "Uklanjanje virusnih bradavica i keratoza" (kriohirurgija) — **5 bullets across 4 categories** →
  `/usluge/bradavice-papilomi-keratoze-moluske` (the already-rich HPV/wart/keratosis page from §4).
- "Uklanjanje vaskularnih promena – kapilari i hemangiomi" / "Lasersko uklanjanje kapilara i
  hemangioma" / "Lasersko uklanjanje vaskularnih promena" (3 bullets) → `/usluge/kapilari-i-hemangiomi-laser`
- "Dermoskopski pregled mladeža" / "Pregled mladeža" (kompjuterizovana dermoskopija category) →
  `/usluge/dermoskopija`
- "Hijaluronski fileri" **and** "Botulinum toksin – botox" (now listed as 2 separate bullets by
  Marta) → both point to the existing combined `/usluge/botoks-fileri` page rather than splitting it
  or sending botox to a thin generic page. **Flag for Marta:** if she wants these as genuinely
  separate pages with distinct copy, that's new work, not a slug/routing change.
- "Biorevitalizacije" → `/usluge/profhilo` (Profhilo is the clinic's biorevitalization product)
- "Personalizovano podmlađivanje laserom: lica, vrata, dekoltea i šaka" (2 bullets) →
  `/usluge/podmladjivanje-fotona-3d-4d-5d` (existing Fotona flagship page)
- "Epilacija laserom/medicinskim laserom" (2 bullets) → `/usluge/laserska-epilacija`
- "Uklanjanje strija" / "Laserski tretmani strija" (2 bullets) → `/usluge/strije-laser`
- "Lečenje gljivičnih oboljenja noktiju" / "Laserski tretman gljivičnih infekcija nokatne regije"
  (2 bullets) → `/usluge/gljivicna-oboljenja-laser`
- "Dijagnostika i lečenje kožnih i polnih bolesti" → `/usluge/medicinska-dermatologija`

All other bullets with no obvious dedicated-page match (e.g. Kolagen stimulatori, Mezoterapija,
Laserski tretman uraslih dlačica, Uklanjanje ožiljaka, Laserski pilinzi, Pojačano znojenje, all 4
Kozmetologija items, Pigmentne promene) got a clean new slug and fall through to the existing generic
`[slug]/page.tsx` template (`buildServiceCopy()`), exactly like the ~40 undocumented services already
did before this pass (see §4's "Only titles/placeholders" list — that mechanism is unchanged, still
flagged for retirement under M4). No new medical copy was hand-written for any of these.

### Images
Most catalog entries reuse existing stock imagery from `/images/Services/` (or the specific PNGs
already in use for Fotona, epilacija, strije, gljivična) matched by treatment theme — this is a
placeholder measure, consistent with M4's pending "per-service image slots" item, not a regression
but also not resolved.

**Found mid-session and wired in:** an untracked folder,
`public/images/Services/opsta-dermatovenerologija/` (renamed 2026-07-14 from the original
non-ASCII `opšta_dermatovenerologija/` for URL/path safety — see §14) (5 real in-clinic
procedure/patient photos —
acne close-up, laser vascular treatment, radiowave wart/papilloma removal, cryo/keratosis removal),
was already present on disk before this pass started, clearly prepared for this exact restructure
(filenames match the new Opšta dermatovenerologija bullets 1:1). Wired 4 of the 5 into
`lib/service-catalog.ts` as real `imageSrc` values (replacing the generic stock fallback) for:
"Uklanjanje virusnih bradavica, kondiloma i moluski", "Uklanjanje papiloma i keratoza", "Uklanjanje
vaskularnih promena", and "Lečenje akni". Also discovered — and fixed — that
`app/usluge/bradavice-papilomi-keratoze-moluske/page.tsx` was pointing its hero image at
`/images/client/uklanjanje-virusnih-bradavica-kondiloma-i-moluski.png`, a file that had already been
deleted from disk (pre-existing uncommitted state, not caused by this pass) — broken image on that
page until now. Repointed it to the new
`uklanjanje-bradavica-kondiloma-papiloma.png`, the clear topical replacement.
**Not wired in, flagged for confirmation:** the 5th image, `lecenje-koznih-i-polnih-bolesti.png` (a
posed stock-style photo of a doctor examining a patient's back), was left out of
"Dijagnostika i lečenje kožnih i polnih bolesti" — it reads as a generic stock photo rather than
real clinic photography like the other 4, and this file previously flagged a similar "clipart-style
doctor examining a back" image as not fitting the brand (§7). Left on disk, unused; ask Marta before
using it.

---

## 14. Summary of the 2026-07-14 folder-rename cleanup pass

Small follow-up to §13, requested before commit: the untracked image folder used non-ASCII
characters (`opšta_dermatovenerologija`, with š and an underscore), unsafe for URLs/paths. Renamed
to `public/images/Services/opsta-dermatovenerologija/` (ASCII, hyphenated, matching the site's
existing slug convention). Filenames inside the folder were left unchanged, as instructed.

- Updated the 4 `imageSrc` references in `lib/service-catalog.ts` and the 1 hero-image reference in
  `app/usluge/bradavice-papilomi-keratoze-moluske/page.tsx` to the new path.
- Verified zero remaining code references to the old `opšta_dermatovenerologija` path (a grep hit in
  this doc's §13 is expected — it's prose describing the rename, not a live reference) and confirmed
  the new `opsta-dermatovenerologija` path resolves at every usage site.
- Verified all 5 files physically exist in the new folder location.
- Verified: `npx tsc --noEmit` clean, `npm run build` passes (same route count/output as §13), and a
  Playwright check of `/`, `/usluge`, `/usluge/bradavice-papilomi-keratoze-moluske`, and
  `/usluge/medicinska-dermatologija` — all 4 pages render with 0 console errors (only the
  pre-existing, unrelated favicon 404 on `/`) and the renamed image displays correctly on the
  bradavice page.
- No commit made, nothing pushed, per instruction. `/usluge` category/content from §13 is untouched.

### i18n
`lib/service-catalog.ts` (the `/usluge` page content itself) remains **Serbian-only**, consistent
with the pre-existing pattern documented in §6 — this was not in scope to fix (that's M4 territory).
However, the **homepage services shortcuts and header dropdown are i18n-wired**, so `nav.categoriesDropdown`
and `home.servicesList` were updated with real translations in all three locale files, not just
Serbian, to avoid leaving EN/RU visitors with dead category links or stale category names. **These
EN/RU translations are AI-assisted, not client-reviewed** — same caveat as the rest of §6's list;
flag for native proofreading before launch.

### Verified
`npx tsc --noEmit` (clean), `npm run build` (success, all routes generated, no broken links), and
`npm run dev -- --port 3123` with a Playwright check of `/` and `/usluge` (all 7 categories render
with correct titles/subtitle/links, homepage services grid shows all 7 cards with correct hrefs) plus
spot-checks that reused dedicated pages (`full-face`, `botoks-fileri`) and new generic-template pages
(`pigmentne-promene`, `dermapen`) all return 200.

### Not done, out of scope
Splitting Hijaluronski fileri / Botox into separate content pages, writing real (non-template) copy
for any of the newly-added generic-template slugs, new per-service images, and any i18n work on the
`/usluge` catalog itself (category/subservice names, still Serbian-only).

---

## 15. Summary of the 2026-07-14 official Opšta dermatovenerologija content pass

**Source of this pass:** the user stated all 12 Opšta dermatovenerologija subservices are now
**official** — either Marta's exact given text (verbatim, lightly cleaned for grammar/OCR spacing
only) or, where she has no text yet, an explicit "pending" state so she can see exactly what's
missing when shown the live site. This supersedes the placeholder/generic-template state some of
these pages were in after §13.

### Shared component changes (`components/service-page-layout.tsx`)
- **Logo overlay, site-wide.** Added a small "dr terzic beli logo.png" watermark to the bottom-right
  corner of every service page's hero image (`w-24 md:w-32`, `opacity-80`) — this renders for *every*
  page using `ServicePageLayout`, i.e. all dedicated pages and the ~40 pages still served by the
  generic `[slug]` template, satisfying "should be added on all the service images" in one change.
  `gljivicna-oboljenja-laser` already had a hand-coded version of this pattern from an earlier pass
  (used as the sizing/style reference); the 5 bespoke pages that don't use `ServicePageLayout`
  (`botoks-fileri`, `laserska-epilacija`, `podmladjivanje-fotona-3d-4d-5d`, `strije-laser`,
  `gljivicna-oboljenja-laser`) were not touched by this specific change since they render their own
  hero image markup — `gljivicna-oboljenja-laser` already has it, the other 4 don't yet and are
  flagged for a follow-up pass if the logo should extend there too.
- **Fixed a real spacing bug in "Kako Funkcioniše."** The numbered red step boxes were rendering with
  zero gap between them site-wide. Root cause: each step was wrapped individually in its own
  `StaggerItem` (one child per wrapper), so the `last:mb-0` Tailwind class matched *every* step (each
  is `:last-child` of its own single-child wrapper), zeroing the `mb-10` margin on all of them, not
  just the actual last one. Fixed by moving the gap to `space-y-10` on the `StaggerChildren` container
  and removing the broken `mb-10 last:mb-0` from the inner step div. This fixes step spacing on every
  page using `ServicePageLayout`, not just the Opšta dermatovenerologija pages.
- **`howItWorks` / `idealCandidates` / `expectedResults` / `faqs` are now optional props**, each
  section conditionally rendered only when a non-empty array is supplied (previously required,
  forcing every page to show all four sections even when there was nothing real to put in them).
- **New `pendingNotice?: string` prop** renders a visible amber/warning callout under the hero
  subtitle — used on every page below where Marta's official text is still outstanding.
- Separately, a parallel background pass (already in progress when this session started) fixed a
  pre-existing grammar bug in the "Šta je {title}?" About heading (broke for non-noun titles) by
  adding an `aboutHeading?: string` override prop and an `aboutFallback` translation key. Not part of
  this session's requested scope, but its output was consumed as-is per the harness's own note not to
  revert it; this session added the two `aboutHeading` values it had flagged as still missing
  (`bradavice-papilomi-keratoze-moluske`, the new `uklanjanje-papiloma-i-keratoza`).

### Per-service outcome (all 12 Opšta dermatovenerologija bullets)
1. **Dijagnostika i lečenje kožnih i polnih bolesti** (`medicinska-dermatologija`) — stripped down
   per explicit instruction: `whatIsIt` is now Marta's exact one sentence only, everything else
   (previously-invented howItWorks/candidates/results/FAQs from the §4/§10 passes) removed and
   replaced with a `pendingNotice` banner. Image: `lecenje-koznih-i-polnih-bolesti.png` (the file
   flagged in §13 as "not wired in, needs confirmation" — now explicitly confirmed by the user as the
   correct image for this exact service).
2. **Uklanjanje virusnih bradavica, kondiloma i moluski** (`bradavice-papilomi-keratoze-moluske`) —
   content unchanged (already real, from §4), retitled to drop "Papiloma, Keratoza" now that those
   have their own page, trimmed the now-redundant papiloma/keratoza subsection and FAQ/candidate/
   result bullets, cross-linked to the new page.
3. **Uklanjanje papiloma i keratoza** — **new dedicated page**
   (`app/usluge/uklanjanje-papiloma-i-keratoza/page.tsx`), split out from the bradavice page because
   it was a same-category slug duplicate (two different bullets in Opšta dermatovenerologija silently
   sharing one page — see the new code comment in `lib/service-catalog.ts`). Full content synthesized
   from Marta's exact given text: 3 methods (radiotalasna hirurgija, ablativni Er:YAG laser,
   krioterapija), papilomi description, keratoze description, healing/scarring paragraph.
4. **Uklanjanje vaskularnih promena – kapilari i hemangiomi** (`kapilari-i-hemangiomi-laser`) — fully
   rewritten to Marta's newly-supplied structured text (already close in substance to the §4 version,
   but now restructured into her exact labeled breakdown: tipovi, prošireni kapilari, hemangiomi,
   princip rada, osećaj tokom tretmana, trajanje, broj tretmana, vidljivi rezultati, nakon tretmana).
5. **Lečenje rozacee** — **new dedicated pending page**, replacing the generic `[slug]` template.
6. **Dermoskopski pregled mladeža** (`dermoskopija`) — judgment call: kept the existing real content
   (DermLite/Canfield equipment description, already substantive and not fabricated-sounding) rather
   than deleting it, but added a `pendingNotice` banner clarifying the *specific clinical description*
   Marta would supply for this listing is still outstanding. Also fixed a pre-existing mislabeled
   related-service link ("Medicinska dermatologija" was pointing to `/usluge/akne`).
7. **Lečenje opadanja kose** — **new dedicated pending page**, replacing the generic `[slug]`
   template.
8. **Lečenje gljivičnih oboljenja noktiju** (`gljivicna-oboljenja-laser`) — same judgment call as
   dermoskopija: this bespoke page already has substantial real content (FDA approval, protocol,
   liver-safety framing) that isn't fabricated-looking, so it was kept with a hand-coded pending
   banner added (matches the page's own custom hero styling, not `ServicePageLayout`).
9. **Lečenje akni** (`akne`) — rewritten to incorporate the additional detail in Marta's newly-supplied
   text not previously captured: explicit "Roakutan" brand name, the invasive/ablative laser
   resurfacing option (distinct from the neinvazivni Nd:YAG/Clear Skin protocols), restructured into
   her 5-part narrative (individualni pristup, terapija laserom, hemijski pilinzi i komedoekspresija,
   sistemska terapija, ishrana i hormonski faktori) via `whatIsItSections`.
10. **Uklanjanje pigmentnih promena** — **new dedicated pending page**.
11. **Lečenje pojačanog znojenja** — **new dedicated pending page**.
12. **Hirurško uklanjanje mladeža sa PH dijagnostikom** — **new dedicated pending page**.

### Judgment calls made without asking (flagged here for review)
- Dermoskopija and gljivičnih oboljenja pages kept their existing real content instead of being wiped
  to bare pending pages like the other 5 — reasoning: their content is factual and non-generic
  (equipment specs, FDA approval, protocol timing), unlike the fake `buildServiceCopy()` boilerplate
  the user was reacting against. If Marta's upcoming text should fully replace rather than supplement
  what's there, say so and these two can be stripped down to match the other 5's pending-only pattern.
- "Hijaluronski fileri" and "Botulinum toksin – botox" still share `botoks-fileri` (flagged already in
  §13) — not revisited this pass since no new instruction addressed it.

### Verified
`npx tsc --noEmit` clean; `npm run build` succeeds (39 top-level routes, up from 38 — the new
`uklanjanje-papiloma-i-keratoza` page); `npm run dev -- --port 3123` with Playwright checks of all 12
Opšta dermatovenerologija pages plus `/usluge` — all return HTTP 200, all show 0 console errors
(aside from the pre-existing unrelated favicon 404), logo overlay confirmed rendering correctly on
`akne` and `medicinska-dermatologija`, step-spacing fix confirmed visually on `akne`'s "Kako
Funkcioniše" section, pending banner confirmed rendering correctly on `rozacea` and
`medicinska-dermatologija`, and the `/usluge` listing confirmed "Uklanjanje papiloma i keratoza" now
resolves to its own distinct URL instead of the shared bradavice slug.

### Not done, out of scope
Extending the logo overlay to the 4 bespoke pages that don't use `ServicePageLayout` and don't
already have it (`botoks-fileri`, `laserska-epilacija`, `podmladjivanje-fotona-3d-4d-5d`,
`strije-laser`); stripping dermoskopija/gljivicna-oboljenja-laser down to bare pending pages (kept
their real content, see judgment call above); any work outside Opšta dermatovenerologija; no commit
made, nothing pushed.

> **Correction (2026-07-14, see §16):** re-checked during the Estetska dermatologija pass — `laserska-epilacija`
> and `strije-laser` already had the logo overlay (likely from the same background pass that added the
> `aboutHeading` fixes). Only `botoks-fileri` and `podmladjivanje-fotona-3d-4d-5d` were actually missing it;
> both were fixed in §16.

---

## 16. Summary of the 2026-07-14 Estetska dermatologija pending-banner pass

**Source of this pass:** the user asked to go through every page in the Estetska dermatologija
category. Their recollection: only `full-face` is populated with content directly from Marta.
Anything identical to an Opšta dermatovenerologija service (already handled in §15) can stay as-is;
everything else should get a banner noting Marta's info is still required.

### Verification of the user's recollection
Read all remaining dedicated pages before touching anything. `full-face` is confirmed genuine
Marta-voice content (first-person "pristupam", "kreiram", her 5 stated principles, MD Codes™
attribution — matches the writing style already established as hers in §12/§13). The other 7
dedicated pages (`botoks-fileri`, `profhilo`, `morpheus8`, `podmladjivanje-fotona-3d-4d-5d`,
`laserska-epilacija`, `strije-laser`, `hemijski-pilinzi`) read as polished, professionally-written
dermatology content but in a generic third-person voice with no Marta-specific attribution — this
matches the user's stated belief that they aren't verbatim Marta text, so all 7 got the pending
treatment per instruction.

### Category breakdown (19 bullets → 13 unique non-full-face, non-shared items)
**Left untouched — shared with Opšta dermatovenerologija (already correct from §15):**
"Lečenje rozacee" → `rozacea` (pending banner already there), "Lasersko uklanjanje kapilara i
hemangioma" → `kapilari-i-hemangiomi-laser` (real content), "Lečenje akni" → `akne` (real content),
"Uklanjanje pigmentnih promena" → `pigmentne-promene` (pending banner already there).

**Left untouched — confirmed genuine Marta content:** "Personalizovani Full Face tretmani" →
`full-face`.

**Pending banner added, existing content kept (7 dedicated pages):**
- `profhilo`, `morpheus8`, `hemijski-pilinzi` — use `ServicePageLayout`, so this was a one-line
  `pendingNotice` addition.
- `botoks-fileri`, `podmladjivanje-fotona-3d-4d-5d`, `laserska-epilacija`, `strije-laser` — bespoke
  hand-coded layouts, so the banner was added manually matching the same amber-callout markup/style
  used elsewhere. `botoks-fileri` and `podmladjivanje-fotona-3d-4d-5d` were also missing the logo
  overlay (see correction above) — added while already in the hero markup.

**New dedicated pending pages created (5, replacing the fake generic `[slug]` template):**
`kolagen-stimulatori`, `mezoterapija`, `urastanje-dlaka-folikulitis`, `uklanjanje-oziljaka`,
`laserski-piling` — same minimal honest pattern as §15's 5 new Opšta dermatovenerologija pages
(one-line `whatIsIt` placeholder + `pendingNotice`, no fabricated depth).

### Verified
`npx tsc --noEmit` clean; `npm run build` succeeds (39 top-level routes, same count as §15 — 5 new
dedicated pages replace what were previously catch-all `[slug]` routes, not new top-level entries);
`npm run dev -- --port 3123` with Playwright checks — all 13 pages return HTTP 200, 0 console errors
beyond the pre-existing favicon 404; banner and logo overlay visually confirmed on `botoks-fileri`;
pending page pattern visually confirmed on `kolagen-stimulatori`; confirmed `full-face` has zero
banner/pending text (untouched).

### Not done, out of scope
No content was rewritten or removed — this pass only added banners/new minimal pages, it did not
touch the "Laseri u dermatologiji" category (where `urastanje-dlaka-folikulitis` and
`uklanjanje-oziljaka` also appear, sharing the same now-updated dedicated pages — correctly so, per
the cross-category sharing rule); no commit made, nothing pushed.

---

## 17. Summary of the 2026-07-14 remaining-categories pass (Laseri, Radiotalasna, Kriohirurgija, Kompjuterizovana dermoskopija, Kozmetologija)

**Source of this pass:** the user gave the final 5 categories' bullet lists directly (transcribed from
Marta's docx, same standing as §13/§15/§16) and asked for the same treatment: link correctly to
already-populated pages where a bullet duplicates an earlier one, add pending banners where nothing's
been supplied yet. The user also supplied fresh text specifically for "Lasersko uklanjanje vaskularnih
promena" under Laseri u dermatologiji and asked it to be reconciled with the Opšta dermatovenerologija
version already live on `kapilari-i-hemangiomi-laser`.

### Laseri u dermatologiji (11 bullets) — near-total overlap
Every single bullet in this category turned out to already share a slug with a page handled in §15 or
§16 (per `lib/service-catalog.ts`, unchanged by this pass): `laserska-epilacija`,
`urastanje-dlaka-folikulitis`, `podmladjivanje-fotona-3d-4d-5d`, `rozacea`, `uklanjanje-oziljaka`,
`strije-laser`, `pigmentne-promene`, `bradavice-papilomi-keratoze-moluske` (also shared with
Radiotalasna hirurgija and Kriohirurgija — see below), `gljivicna-oboljenja-laser`, `akne` — all
already either real content or a pending banner. Verified all 10 resolve correctly; no changes needed.

**The 11th, "Lasersko uklanjanje vaskularnih promena," got a real content merge.** Compared the fresh
text against what's live on `kapilari-i-hemangiomi-laser` (written in §15 from the Opšta
dermatovenerologija version): the Princip rada / Osećaj tokom tretmana / Trajanje tretmana / Broj
tretmana / Nakon tretmana sections are verbatim identical between the two versions Marta gave — same
service, not a duplicate to split. Two differences: (1) the Laseri version adds a 4th vascular-change
type, "crvenilo lica i rozacea," to the original 3 (prošireni kapilari, spider nevusi, hemangiomi); (2)
it adds an explicit instruction — "Za crvenilo lica i rozaceu postoji poseban protokol rada. Staviti
ovde link za rozaceu" — to link out to the rozacea page. Both were merged into the single existing
page: added the 4th type to the `whatIsItSections` types list, appended a sentence to "Vidljivi
rezultati tretmana" referencing the separate rosacea protocol, and added "Lečenje rozacee" as the first
`relatedServices` entry (a real clickable link) since `ServicePageLayout`'s section bodies are plain
text and can't render an inline link mid-paragraph — this was the closest faithful way to honor "staviti
ovde link" given the component's structure. No catalog change needed; both the Opšta dermatovenerologija
and Laseri u dermatologiji bullets already pointed at this same slug.

### Radiotalasna hirurgija, Kriohirurgija, Kompjuterizovana dermoskopija (1 bullet each)
All three already point at pages with real or pending content from earlier passes
(`bradavice-papilomi-keratoze-moluske`, `bradavice-papilomi-keratoze-moluske`, `dermoskopija`
respectively) — verified correct, no changes needed. Note: the Radiotalasna/Kriohirurgija bullets both
say "keratoze, papilomi, bradavice" but the bradavice page they link to no longer covers
papiloma/keratoza specifically (split out to `uklanjanje-papiloma-i-keratoza` in §15) — this is a
known, accepted simplification from §15 (the bradavice page cross-links to the papiloma/keratoza page
in its own `relatedServices`), not re-litigated here.

### Kozmetologija (4 bullets) — all new
None of "Medicinski higijenski tretmani lica," "Biološki tretmani lica," "Dermapen," or "Savetovanje
za negu lica" overlap any already-handled service or have a dedicated page — all 4 were previously
falling through to the fake generic `[slug]` template. Created 4 new dedicated pending pages, same
minimal honest pattern as §15/§16, cross-linked to each other via `relatedServices`.

### Full Face — missing-image note
Per the user: all text content on `full-face` is confirmed complete and official (§15/§16 already
established this is the one page in Estetska dermatologija with genuine Marta-voice content), but the
hero image Marta supplied for it was never found on disk (confirmed again this pass — no untracked or
misplaced file matching "full face" anywhere under `public/images/`). Added a `pendingNotice` on this
page specifically about the missing image (distinct wording from the "content pending" banners used
elsewhere, since the text itself is not in question) so it's visible when Marta reviews the site.

### Verified
`npx tsc --noEmit` clean; `npm run build` succeeds (39 top-level routes, same count as §16 — the 4 new
Kozmetologija pages replace what were previously catch-all `[slug]` routes); `npm run dev -- --port
3123` with Playwright checks — all touched/new pages return HTTP 200, 0 console errors beyond the
pre-existing favicon 404; confirmed the "Crvenilo lica i rozacea" 4th type renders on
`kapilari-i-hemangiomi-laser` along with a working `/usluge/rozacea` related-service link; confirmed
the missing-image banner renders on `full-face`; confirmed via in-page JS evaluation that every link
under the Kozmetologija/Kriohirurgija/Radiotalasna/Kompjuterizovana dermoskopija headings on `/usluge`
resolves to the expected href.

### Not done, out of scope
No further content rewrites beyond the vaskularne-promena merge; `ServicePageLayout` was not extended
to support inline links inside `whatIsItSections` body text (worked around via `relatedServices`
instead — flag if a future session wants a more structurally faithful inline-link solution); no commit
made, nothing pushed.

---

## 18. Summary of the 2026-07-16 Marta client-preview prep pass

**Source of this pass:** the user's compiled instructions for a first full client-review preparation
pass — not a new content-intake session. No new Marta text was introduced; this pass audited the
current code, fixed two real UX bugs, ran a fresh public-copy scan, and produced the client-facing
report/email described in `docs/client-preview/`.

### Mobile marquee fix (`app/page.tsx`)
The equipment-logo and patient-review homepage sections used a `requestAnimationFrame` auto-scroll
loop on every viewport, and the equipment section was `overflow-x-hidden` (manual scroll was
literally impossible there, on any device). On mobile this produced the reported "laggy" feel: an
animation loop fighting a touch-scroll gesture that couldn't even engage for equipment, plus a
separate tripled-list "jump when near the boundary" effect (also feeding the mobile services
carousel) that could visibly teleport mid-drag.
- Added a `(max-width: 767px)` `matchMedia` check (`isMobile` state). The RAF auto-scroll loop now
  skips entirely on mobile widths **and** when `prefers-reduced-motion` is set (the previous version
  computed `shouldReduce` but never actually used it to gate the marquee — a real, pre-existing bug).
- Removed the tripled-list/boundary-jump effect entirely (it was the only source of mid-drag
  teleporting, shared by the services carousel, reviews, and — implicitly — anything copying the
  pattern later). Mobile now renders plain, single-copy lists with native `overflow-x-auto` +
  `snap-x snap-mandatory` scrolling and zero JS position writes, so there is nothing left to fight a
  drag or jump mid-gesture.
- Equipment section changed from `overflow-x-hidden` to `overflow-x-auto` (with snap on mobile only,
  `md:snap-none` on desktop) so manual scrolling is possible on **every** viewport, not just mobile —
  this was required for the "manual scrolling/dragging must remain possible" desktop rule too, since
  the old version blocked all manual interaction even with a mouse/trackpad.
- Desktop RAF autoplay is retained for both sections (still genuinely smooth — same accumulator-based
  position tracking already fixed in the 2026-07-14 pass), now pauses on hover **and** focus **and**
  pointer-down for both sections (equipment previously only paused on mouse hover; reviews already had
  the fuller set).
- **Real bug found and fixed while verifying pause behavior with Playwright**: the cleanup function was
  cancelling the marquee's animation loop by `cancelAnimationFrame`-ing a frame id captured once, up
  front — but the recursive `tick` function reschedules itself every frame via its own
  `requestAnimationFrame` call, so only the very first, long-since-fired frame id was ever tracked.
  Cancelling it did nothing: once started, a loop ran forever, immune to future pause-state changes.
  Confirmed via direct instrumentation that hovering correctly set `partnersPaused` to `true` on the
  first `mouseenter`, yet `scrollLeft` kept advancing anyway — an earlier, leaked loop (with `false`
  baked into its closure) was still running in parallel. Fixed with a `let cancelled = false` flag
  checked at the top of `tick`, set once in the effect's cleanup — the standard correct pattern for a
  self-rescheduling RAF loop in a React effect. This was pre-existing (not introduced by this pass) but
  had never been caught before because no earlier pass tested pause behavior directly rather than
  reading the code. Verified via `scrollLeft` sampling: hovering now freezes both marquees bit-for-bit
  (identical value across 6 samples over 900ms) and resumes cleanly on unhover.
- Added a subtle "Prevucite za još" / "Swipe for more" hint (new `home.swipeHint` i18n key, all 3
  locales) under the equipment and reviews sections on mobile only, and wired in the existing
  `servicesSection.swipeMobile` key next to the services carousel's dot indicator — that key existed
  in all 3 locale files already but was never actually rendered anywhere (a real dead-string bug).
- No visual change to desktop layout; no new dependencies; no redesign.

### Equal service-card geometry (`app/usluge/page.tsx`)
The `/usluge` category grids already used CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
xl:grid-cols-4`), so column *widths* were already equal. The reported unevenness was a **height** bug:
each card's `StaggerItem` wrapper had no explicit height, so a grid item that's naturally taller
than its row (default `align-items: stretch` in CSS Grid) stretched invisibly, but the visible
bordered `<Link>` box inside it did not — it only took its own content height. One-line service names
rendered a short box; two-line wrapped names rendered a taller box; both sat inside a same-height
invisible wrapper, so rows visibly misaligned.
- Added `items-stretch` to the grid container (explicit, matches the default but documents intent),
  `h-full` to each `StaggerItem`, and `h-full w-full` plus `flex-shrink-0` on the chevron icon to the
  `<Link>` itself, so every card in a row now fills the row's full height and the icon doesn't get
  compressed when a label wraps to two lines.
- No hrefs changed, no services merged or split, no slugs touched. Verified visually across all 7
  categories at 1440×900 and 390×844 (see §Verification below).

### Fresh public-copy scan
A second em-dash sweep (the first was §11, 2026-07-10) found **34 new occurrences** in rendered copy
added by later passes — the "Label — detail" pattern had crept back into the 14 generic pending-page
templates (`description`/`subtitle` fields), the `full-face` `pendingNotice`, and — notably — into
5 of the 8 homepage patient-review quotes and several `onama`/`marta`/`snezana` strings in `en.ts` and
`ru.ts` (the AI-assisted translations reintroduced em dashes that the Serbian originals didn't have).
All fixed with a comma, colon, or sentence break depending on what read best; no meaning was changed,
no client-provided claim was softened. One RU-only inconsistency was also caught and fixed: the
`marta.badges` array used an em dash in `ru.ts` ("Allergan — национальный тренер") where `sr.ts`/
`en.ts` used a legitimate en dash for the same label — normalized to match. A repo-wide grep confirms
zero `—`/`&mdash;` remain in `app/`, `components/`, or `lib/` outside of code comments (`//` and
`{/* */}`), which are correctly out of scope. A parallel grep for the known OCR/diacritic typo list
(prilagodjen, izmedju, takodje, odrzavanje, hladjenje, ledja, mladje, prodju, etc.) found zero
remaining occurrences in rendered copy — only the intentionally-diacritic-free URL slug
`podmladjivanje-fotona-3d-4d-5d`, correctly left untouched. The standing no-em-dash rule is now
documented at the top of this file and in `IMPROVEMENT-REPORT.md`'s new "Standing Public-Copy Rules"
section, so future passes check it as a matter of course rather than needing a dedicated sweep.

### Client-facing report and email draft
Created (not published as a public route):
- `docs/client-preview/MARTA-PREGLED-SAJTA.md` and `.html` — the full clickable client report, all
  7 categories, all 49 catalog bullets, status derived from the current code (`pendingNotice` presence
  in `ServicePageLayout` pages, the 5 bespoke hand-coded banners, or absence of either).
- `docs/client-preview/MARTA-EMAIL-DRAFT.md` — a ready-to-send Serbian email pointing Marta at the
  report.

### Verification performed
`npx tsc --noEmit` clean; `npm run build` succeeds; `npm run dev -- --port 3123` with the
`dt_site_access=granted` gate cookie — all 6 main routes and all 30 distinct `/usluge/[slug]` routes
(covering all 49 catalog bullets, several of which intentionally share a slug) return HTTP 200. See
the dated snapshot below for the full per-route status table and the Verification section of this
session's final report-back for viewport/console/reduced-motion checks.

### Not done, out of scope
No new Marta content was invented; no service pages were merged or split (the Hijaluronski
fileri/Botox shared-page question from §13 is still open — flagged again in the client report); no
EN/RU proofreading pass (still AI-assisted pending native review, per §6); no domain/DNS work (client
report only asks Marta for the information needed); no commit pushed.

---

## Current client-preview snapshot (2026-07-16)

> **This section is the authoritative status summary for the current client-preview milestone.**
> Read this first if you only have time for one section.

- The user manually reviewed Marta's complete `NOVA-STRUKTURA-SAJTA-DR-TERZIC.docx` document,
  section by section, across multiple sessions, and relayed all of it into these implementation
  passes (§13, §15, §16, §17). That manual review is treated as authoritative per the standing
  correction at the top of this file.
- **Every structure and content item from Marta's document is now represented on the Serbian site.**
  All 7 categories and all 49 catalog bullets (`lib/service-catalog.ts`) resolve to a real, working
  page — verified HTTP 200 for every one this session (§18).
- **Where Marta supplied full text, it has been incorporated** — verbatim or lightly cleaned for
  grammar/OCR spacing only, never softened or invented around (§2's standing correction).
- **Where Marta did not supply final text and/or an image, the page exists and is clearly marked**
  with a visible amber `pendingNotice` banner (or, for `full-face`, a text-complete/image-missing
  banner) so she can see exactly what's outstanding when she reviews the live site.
- **This completes the manual Marta DOCX Serbian content-intake phase.** It does **not** mean: final
  launch QA is done, the EN/RU translations are client-reviewed (they remain AI-assisted per §6),
  final imagery is in place, SEO work has started, or the M1 visual-design-system milestone (see
  `IMPROVEMENT-REPORT.md`) has begun.

### Full route inventory (all 49 catalog bullets, current code, 2026-07-16)

Legend: ✅ Real = Marta-sourced content, no pending banner. ✅ Real (image pending) = text complete,
hero image outstanding. 🟡 Pending (kept) = existing non-fabricated content kept, banner added noting
Marta's official text is still outstanding. 🟡 Pending (minimal) = one-line placeholder + banner, no
invented depth. Routes repeated across categories are intentional (§13) and marked "(shared)".

**1. Opšta dermatovenerologija** — subtitle "Dermatologija za celu porodicu"
| Bullet | Route | Status |
|---|---|---|
| Dijagnostika i lečenje kožnih i polnih bolesti | `/usluge/medicinska-dermatologija` | 🟡 Pending (minimal) |
| Uklanjanje virusnih bradavica, kondiloma i moluski | `/usluge/bradavice-papilomi-keratoze-moluske` | ✅ Real |
| Uklanjanje papiloma i keratoza | `/usluge/uklanjanje-papiloma-i-keratoza` | ✅ Real |
| Uklanjanje vaskularnih promena – kapilari i hemangiomi | `/usluge/kapilari-i-hemangiomi-laser` | ✅ Real |
| Lečenje rozacee | `/usluge/rozacea` | 🟡 Pending (minimal) |
| Dermoskopski pregled mladeža | `/usluge/dermoskopija` | 🟡 Pending (kept) |
| Lečenje opadanja kose | `/usluge/opadanje-kose` | 🟡 Pending (minimal) |
| Lečenje gljivičnih oboljenja noktiju | `/usluge/gljivicna-oboljenja-laser` | 🟡 Pending (kept) |
| Lečenje akni | `/usluge/akne` | ✅ Real |
| Uklanjanje pigmentnih promena | `/usluge/pigmentne-promene` | 🟡 Pending (minimal) |
| Lečenje pojačanog znojenja | `/usluge/pojacano-znojenje` | 🟡 Pending (minimal) |
| Hirurško uklanjanje mladeža sa PH dijagnostikom | `/usluge/hirursko-uklanjanje-mladeza` | 🟡 Pending (minimal) |

**2. Estetska dermatologija** (19 bullets)
| Bullet | Route | Status |
|---|---|---|
| Personalizovani Full Face tretmani by dr Marta Terzić | `/usluge/full-face` | ✅ Real (image pending) |
| Hijaluronski fileri | `/usluge/botoks-fileri` | 🟡 Pending (kept) (shared with Botulinum toksin) |
| Botulinum toksin – botox | `/usluge/botoks-fileri` | 🟡 Pending (kept) (shared) |
| Kolagen stimulatori | `/usluge/kolagen-stimulatori` | 🟡 Pending (minimal) |
| Biorevitalizacije | `/usluge/profhilo` | 🟡 Pending (kept) |
| Mezoterapija | `/usluge/mezoterapija` | 🟡 Pending (minimal) |
| PRP | `/usluge/prp` | ✅ Real |
| Personalizovano podmlađivanje laserom: lica, vrata, dekoltea i šaka | `/usluge/podmladjivanje-fotona-3d-4d-5d` | 🟡 Pending (kept) |
| Tretmani radiofrekventnim mikronidlingom – Morpheus8 | `/usluge/morpheus8` | 🟡 Pending (kept) |
| Epilacija laserom – trajno uklanjanje dlačica | `/usluge/laserska-epilacija` | 🟡 Pending (kept) |
| Laserski tretman problema uraslih dlačica (folikulitis) | `/usluge/urastanje-dlaka-folikulitis` | 🟡 Pending (minimal) |
| Lečenje rozacee | `/usluge/rozacea` | 🟡 Pending (minimal) (shared with Opšta dermatovenerologija) |
| Uklanjanje ožiljaka | `/usluge/uklanjanje-oziljaka` | 🟡 Pending (minimal) |
| Uklanjanje strija | `/usluge/strije-laser` | 🟡 Pending (kept) |
| Lasersko uklanjanje kapilara i hemangioma | `/usluge/kapilari-i-hemangiomi-laser` | ✅ Real (shared with Opšta dermatovenerologija) |
| Lečenje akni | `/usluge/akne` | ✅ Real (shared with Opšta dermatovenerologija) |
| Hemijski pilinzi | `/usluge/hemijski-pilinzi` | 🟡 Pending (kept) |
| Laserski pilinzi | `/usluge/laserski-piling` | 🟡 Pending (minimal) |
| Uklanjanje pigmentnih promena: melasma, PIH, lentigo | `/usluge/pigmentne-promene` | 🟡 Pending (minimal) (shared with Opšta dermatovenerologija) |

**3. Laseri u dermatologiji** (11 bullets, all shared with other categories — no new routes)
| Bullet | Route | Status |
|---|---|---|
| Epilacija medicinskim laserom – trajno uklanjanje dlačica | `/usluge/laserska-epilacija` | 🟡 Pending (kept) (shared) |
| Laserski tretman problema uraslih dlačica (folikulitis) | `/usluge/urastanje-dlaka-folikulitis` | 🟡 Pending (minimal) (shared) |
| Personalizovano podmlađivanje laserom: lica, vrata, dekoltea i šaka | `/usluge/podmladjivanje-fotona-3d-4d-5d` | 🟡 Pending (kept) (shared) |
| Laserski tretmani rozacee | `/usluge/rozacea` | 🟡 Pending (minimal) (shared) |
| Laserski tretmani ožiljaka | `/usluge/uklanjanje-oziljaka` | 🟡 Pending (minimal) (shared) |
| Laserski tretmani strija | `/usluge/strije-laser` | 🟡 Pending (kept) (shared) |
| Lasersko uklanjanje vaskularnih promena | `/usluge/kapilari-i-hemangiomi-laser` | ✅ Real (shared) |
| Lasersko uklanjanje pigmentnih promena: melasma, lentigo | `/usluge/pigmentne-promene` | 🟡 Pending (minimal) (shared) |
| Lasersko uklanjanje benignih promena: keratoze, papilomi, bradavice | `/usluge/bradavice-papilomi-keratoze-moluske` | ✅ Real (shared) |
| Laserski tretman gljivičnih infekcija nokatne regije | `/usluge/gljivicna-oboljenja-laser` | 🟡 Pending (kept) (shared) |
| Laserski tretman akni | `/usluge/akne` | ✅ Real (shared) |

**4. Radiotalasna hirurgija** (1 bullet, shared route)
| Bullet | Route | Status |
|---|---|---|
| Uklanjanje benignih promena: keratoze, papilomi, bradavice | `/usluge/bradavice-papilomi-keratoze-moluske` | ✅ Real (shared) |

**5. Kriohirurgija – terapija tečnim azotom** (1 bullet, shared route)
| Bullet | Route | Status |
|---|---|---|
| Uklanjanje virusnih bradavica i keratoza | `/usluge/bradavice-papilomi-keratoze-moluske` | ✅ Real (shared) |

**6. Kompjuterizovana dermoskopija** (1 bullet, shared route)
| Bullet | Route | Status |
|---|---|---|
| Pregled mladeža | `/usluge/dermoskopija` | 🟡 Pending (kept) (shared with Opšta dermatovenerologija) |

**7. Kozmetologija** (4 bullets, all new dedicated pending pages)
| Bullet | Route | Status |
|---|---|---|
| Medicinski higijenski tretmani lica | `/usluge/medicinski-higijenski-tretmani-lica` | 🟡 Pending (minimal) |
| Biološki tretmani lica | `/usluge/bioloski-tretmani-lica` | 🟡 Pending (minimal) |
| Dermapen | `/usluge/dermapen` | 🟡 Pending (minimal) |
| Savetovanje za negu lica | `/usluge/savetovanje-za-negu-lica` | 🟡 Pending (minimal) |

**Totals:** 49 catalog bullets → 30 distinct routes. 5 routes are fully real content (`akne`,
`bradavice-papilomi-keratoze-moluske`, `uklanjanje-papiloma-i-keratoza`,
`kapilari-i-hemangiomi-laser`, `prp`), 1 is text-complete/image-pending (`full-face`), 9 kept their
existing non-fabricated content with a pending-official-text banner added, and 15 are minimal
one-line placeholders with a pending banner. All 30 catalog slugs now have a dedicated route folder.

**Note found this session:** the generic `[slug]/page.tsx` catch-all's `generateStaticParams` still
returns all 30 slugs from `allServices` (unchanged, pre-existing), so `npm run build` still generates
a fabricated-generic-copy page for every single slug even though each one is shadowed by its own
literal route. Verified via direct HTML inspection of two routes (`medicinska-dermatologija`,
`dermapen`) that Next.js's router always serves the literal dedicated page, never the generic
fallback — this is not a live content bug, Marta will never see fabricated copy. It is, however, 30
pages of wasted/dead build output and a latent risk if a dedicated route is ever deleted without also
narrowing `generateStaticParams`. Flagging for the existing M4 "retire `buildServiceCopy()`" item
(§4) rather than fixing here, since narrowing that function's param list is a code change beyond this
session's scope (mobile scroll, card geometry, copy scan, client report) and not something Marta
asked for.

### Known open questions for Marta (carried into the client report)
- Should "Hijaluronski fileri" and "Botulinum toksin – botox" stay on one shared page
  (`/usluge/botoks-fileri`) or be split into two dedicated pages later? (§13, still open.)
- Confirm the Full Face hero image, Biljana's CV, and which of the 24 pending-banner pages she wants
  to prioritize sending text for first.
