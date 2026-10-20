/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        // "Laserski pilinzi" was retired at the client's request (2026-10-20). The page was
        // previously in the sitemap, so send inbound links to the closest equivalent service
        // instead of a 404.
        source: '/usluge/laserski-piling',
        destination: '/usluge/hemijski-pilinzi',
        permanent: true,
      },
      {
        // The Morpheus8 device was sold, so the treatment is no longer offered (2026-10-20).
        // There is no equivalent service to point at, so the old URL lands on the service index.
        source: '/usluge/morpheus8',
        destination: '/usluge',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
