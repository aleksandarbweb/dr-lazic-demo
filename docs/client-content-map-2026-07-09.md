# Client Content Map — NOVA STRUKTURA SAJTA DR TERZIC.docx

**Date produced:** 2026-07-10 (requested/filed as 2026-07-09 per session instructions)
**Source:** `docs/client-input/NOVA-STRUKTURA-SAJTA-DR-TERZIC.docx` (Marta's raw structure notes)
**Purpose:** map the DOCX to site routes, separate ready vs. pending content, and flag every
numerical/factual claim that needs client confirmation before it's treated as final. This is a
companion to `docs/IMPROVEMENT-REPORT.md` (the master plan), not a replacement for it.

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

## 2. Numerical / factual claims requiring client confirmation before final launch

**Do not treat these as final marketing claims until Marta explicitly confirms them in writing.**
They are used on the site now because they are client-provided (DOCX), per this session's
instructions, but they are unverified and some are self-flagged by Marta as uncertain.

| Claim | Where used | Status |
|---|---|---|
| **"25+ godina iskustva"** | Homepage hero/stats, o-nama story, Marta bio | DOCX explicitly states this (up from the site's old "20+"). Reasonably safe — matches Marta's known career start — but confirm exact year before calling it a hard guarantee. |
| **"60+ dermatoloških procedura"** | Homepage stats | DOCX itself says *"mozda nesto drugo?"* (Marta is unsure about this one / may want a different figure or framing). **Kept as-is (matches existing verified site figure) but flagged — ask Marta what she'd prefer here.** |
| **"15000+ zadovoljnih pacijenata"** | Homepage stats | **Client-provided, unverified.** This replaces the old site's invented "1000+" figure. Per session instructions this is used because it's client-sourced, but it is a large, unverifiable claim for a medical site — **get written confirmation from Marta before this ships to production**, ideally with a methodology (patient records count? estimate?). |
| **"više stotina hiljada uspešno izvedenih procedura"** (lit. "several hundred thousand procedures") | DOCX only — **not shipped**. In `onama.storyP3` this was replaced with the qualitative "veliki broj uspešno izvedenih procedura" (a large number). Editorial call, not a client instruction: a several-hundred-thousand-procedure claim is very hard to defend for this practice size and reads as overclaiming under the master plan's Cut List ("never invent... numbers"). **Flag for Marta**: if she wants a hard number restored here, get it in writing first — don't restore the DOCX figure by default. |
| "desetine hiljada izvedenih tretmana" (tens of thousands, laser procedures specifically) | Marta full bio (`onama.marta.bio1`) | Kept — smaller, more plausible, scoped specifically to laser treatments (matches her pioneer positioning). Still unverified but lower risk than the figure above. Flagging for consistency. |

**Recommendation:** before public launch, send Marta a one-page list of every number on the site
(this table + the M0 "Stats honesty pass" item) for sign-off.

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

## 4. Services (§D) — catalog vs. real content

### Already solid, verified, not touched
- `/usluge/akne` — substantive, non-generic content already in place (real FAQs, candidates,
  process). Matches DOCX's "lečenje akni" priority. **Verified, no changes needed.**
- `/usluge/podmladjivanje-fotona-3d-4d-5d`, `/usluge/strije-laser`,
  `/usluge/gljivicna-oboljenja-laser` — dedicated flagship pages, content matches DOCX laser
  section (Fotona 3D/4D/5D, strije, gljivične infekcije). **Verified, no changes needed.**
- `/usluge/medicinska-dermatologija`, `/usluge/dermoskopija`, `/usluge/hemijski-pilinzi`,
  `/usluge/botoks-fileri`, `/usluge/prp`, `/usluge/profhilo`, `/usluge/morpheus8`,
  `/usluge/laserska-epilacija` — existing flagship pages, not touched this pass (DOCX doesn't
  give materially new content for these beyond what's already live).

### New this pass (real DOCX content, not generic template)
- **`/usluge/full-face`** (NEW) — DOCX's richest content block (Marta's FULL FACE philosophy,
  principles, first-visit steps, results framing). Was previously falling through to the generic
  `buildServiceCopy()` template despite being a `featured: true` catalog entry — now has real,
  hand-written copy. Toned down one specific claim: DOCX says fillers/botox can
  *"podmladiti lice za 5 do 10 godina"* (make the face look 5–10 years younger) — this reads as a
  quantified result guarantee, which the master plan's Cut List explicitly forbids. Rewrote as
  qualitative ("svežiji, odmorniji izgled") instead of a number. Flagging this edit for Marta's
  awareness since it changes her original wording.
- **`/usluge/bradavice-papilomi-keratoze-moluske`** (NEW) — covers DOCX priorities #1+#2 (viral
  warts/condylomas/molluscum, papillomas/keratoses), cross-referencing the 3 modalities already
  documented on `/oprema` (radiowave surgery, cryotherapy, laser). Avoided claiming "permanent"
  removal for viral lesions (HPV-related warts can recur) — worded as risk-reduction, not a cure
  guarantee.
- **`/usluge/kapilari-i-hemangiomi-laser`** (NEW) — covers DOCX priority #3 (vascular lesion
  removal), using standard, textbook-accurate laser-dermatology language cross-referenced with the
  Fotona/Harmony XL Pro equipment entries.

### Known duplication (not created by this pass, not fixed — documented per "no cherry-picking" rule)
The catalog has 3–4 overlapping thin entries for the same lesion types split by modality
(`radiotalasna-dermohirurgija`, `tecni-azot`, `uklanjanje-keratoza-laser` all still fall through to
the generic `[slug]` template). This is pre-existing catalog architecture (M4 territory — "i18n the
catalog" / "typed service content shape" / retire `buildServiceCopy()`). Not resolved here;
flagging so M4 doesn't get blindsided.

### Only titles/placeholders (from DOCX, no real content yet)
- Dermatovenerologija bullets: lečenje rozacee, opadanja kose, pojačano znojenje, hirurško
  uklanjanje mladeža sa PH dijagnostikom — titles only in DOCX, no descriptive content given.
- Kozmetologija bullets: medicinski/biološki tretmani lica, savetovanje za negu — titles only.
- These remain on the generic `[slug]` template; do not hand-write copy for them until Marta
  supplies more than a title (per "don't invent depth" rule).

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

## 8. Explicitly not done this session (by design)

- M0 integrity fixes (broken gallery paths, fake testimonials, fake form success, intro-replay,
  `ignoreBuildErrors`, `three` deps) — untouched, this was a content pass, not M0. One exception:
  fixed the single broken `/images/ordinacijaonama.png` path in `o-nama/page.tsx` since it was a
  one-line, zero-risk fix directly in a file already being edited for content.
- Catalog i18n / typed `ServiceContent` schema / retiring `buildServiceCopy()` — M4 scope, not
  started.
- Full equipment↔service cross-link UI (M5 item) — equipment copy now correctly references which
  services each device powers in prose, but no dedicated clickable cross-link component was built.
