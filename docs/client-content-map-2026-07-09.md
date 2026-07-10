# Client Content Map — NOVA STRUKTURA SAJTA DR TERZIC.docx

**Date produced:** 2026-07-10 (requested/filed as 2026-07-09 per session instructions)
**Updated:** 2026-07-10 (service-content implementation pass — see §9)
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
| Full face / personalizovani estetski pristup | `/usluge/full-face` | ✅ New flagship page written this pass |
| Oprema (9 devices) | `/oprema` | ✅ Updated — see §5 |

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
| Ellman Radiosurgery | Present, matches closely | Tightened wording to match DOCX phrasing; kept the pre-existing "Elektroliza" bullet (real capability, not contradicted by DOCX, not removed without cause). |
| CryoPro / CryoPen | Present as "CryoPen" only | **Relabeled** "CryoPro & CryoPen" per DOCX; treatments already matched. |
| DermLite DL5 + Canfield D200EVO dermatoscope | "DermLite DL3" only, 2 bullets | **Corrected model** (DL3→DL5), **added Canfield D200EVO** to the same card (DOCX presents them as one combined heading), **added** digital AI diagnostics + trichoscopy (AI hair/scalp analysis) bullets. |
| Dermapen | Not present | **Added** (hair growth stimulation, facial skin quality — pores/pigmentation/fine lines). |
| *(not in DOCX at all)* Zimmer Cryo 6 / Cryo Tube (cryolipolysis) | Present | **Left untouched, not deleted** — absence from Marta's new structure could mean the service was dropped, or simply wasn't in scope of this particular document (it's body-contouring, not face/skin). ⚠️ **Needs client confirmation** before removing a live equipment listing. |

All equipment/treatment copy is on `/oprema` (Serbian-only page, not i18n-wired — see note below).

Note: Morpheus8's manufacturer is displayed as "InMode" — this is a well-established public fact
(InMode makes Morpheus8), not sourced from the DOCX, which didn't list a manufacturer for it.
Flagging only because it's the one attribution in this pass not directly copied from client text.

---

## 6. i18n status

- **Dedicated service pages** (`akne`, `full-face`, etc.) and **`/oprema`** are Serbian-only,
  hardcoded (not wired to `sr.ts`/`en.ts`/`ru.ts`). This was already true before this session
  (flagged in the master plan's i18n scorecard row) — editing/adding Serbian content here does
  **not** regress EN/RU, since those routes never had translations to begin with. No TODO needed
  beyond the master plan's existing M4 item ("i18n the catalog").
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

## 9. Testimonials / real patient-experience section — attempted, not implemented (2026-07-10)

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
