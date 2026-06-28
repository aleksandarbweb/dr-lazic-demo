// Simple shared-password gate for the work-in-progress site.
// This is a soft access gate so the client can preview the WIP — not hardened
// security. The password defaults to a baked-in value but can be overridden in
// production by setting the SITE_PASSWORD environment variable in Vercel.

export const GATE_COOKIE = 'dt_site_access'
export const GATE_TOKEN = 'granted'

export function getGatePassword(): string {
  return process.env.SITE_PASSWORD || 'admindrterzic'
}

/** Only allow same-origin absolute paths; reject protocol-relative / backslash tricks. */
export function safeNextPath(raw: string): string {
  return raw.startsWith('/') && !raw.startsWith('//') && !raw.startsWith('/\\') ? raw : '/'
}

/** Escape a string for safe interpolation into an HTML attribute. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * Self-contained HTML for the lock screen, rendered directly by middleware so it
 * is not wrapped by the site's layout (navbar/footer/intro overlay).
 */
export function lockHtml(nextPath: string, error: boolean): string {
  const safeNext = escapeHtml(safeNextPath(nextPath))
  const errorBlock = error
    ? `<p class="err" role="alert">Pogrešna lozinka. Pokušajte ponovo.</p>`
    : ''
  return `<!doctype html>
<html lang="sr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Ordinacija Dr. Terzić — Pristup</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #faf9f7;
    color: #1a1a1a;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .card { width: 100%; max-width: 380px; text-align: center; }
  .eyebrow {
    font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
    color: #b91c1c; margin-bottom: 14px;
  }
  h1 { font-family: 'Playfair Display', Georgia, serif; font-weight: 500; font-size: 34px; line-height: 1.1; }
  .sub { font-size: 14px; color: #6b6b6b; margin-top: 14px; margin-bottom: 32px; }
  form { display: flex; flex-direction: column; gap: 14px; }
  input {
    width: 100%; border: 1px solid #e5e0da; background: #fff;
    padding: 14px 16px; font-size: 15px; color: #1a1a1a; outline: none;
    transition: border-color .15s ease;
  }
  input:focus { border-color: #b91c1c; }
  button {
    width: 100%; border: none; cursor: pointer;
    background: #1a1a1a; color: #fff;
    padding: 14px 16px; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    transition: background-color .15s ease;
  }
  button:hover { background: #b91c1c; }
  .err { color: #b91c1c; font-size: 13px; }
</style>
</head>
<body>
  <main class="card">
    <p class="eyebrow">Ordinacija</p>
    <h1>Dr. Terzić</h1>
    <p class="sub">Sajt je u izradi. Unesite lozinku za pristup.</p>
    <form action="/api/unlock" method="POST" autocomplete="off">
      <input type="hidden" name="next" value="${safeNext}" />
      <input type="password" name="password" placeholder="Lozinka" aria-label="Lozinka" autofocus required />
      ${errorBlock}
      <button type="submit">Pristupi</button>
    </form>
  </main>
</body>
</html>`
}
