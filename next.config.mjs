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
    ]
  },
}

export default nextConfig
