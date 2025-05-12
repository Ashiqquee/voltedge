/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'res.cloudinary.com',
      'via.placeholder.com',
      'cdn.pixabay.com',
      'storage.googleapis.com',
      'img.freepik.com',
      'assets.audiomack.com',
      'i.imgur.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
