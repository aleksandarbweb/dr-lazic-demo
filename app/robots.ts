import type { MetadataRoute } from 'next'

// The site sits behind a WIP password gate (see middleware.ts) until launch —
// disallow crawling for now so nothing indexes the lock screen instead of the
// real pages. Flip `disallow` to `allow` here once the gate comes off.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://dr-terzic-site.vercel.app/sitemap.xml',
  }
}
