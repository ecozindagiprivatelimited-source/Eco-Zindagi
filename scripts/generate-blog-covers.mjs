import fs from 'fs'
import path from 'path'

const blogDir = 'c:/Users/_/Downloads/eco-zindagi-website-build/public/blog'
fs.mkdirSync(blogDir, { recursive: true })

const covers = [
  { slug: 'zero-waste-starts-in-pakistani-kitchens', color: '#2d6a4f', icon: '🏠', label: 'Kitchen' },
  { slug: 'EcoBuck-inside-the-engineering', color: '#1b4332', icon: '⚙️', label: 'EcoBuck' },
  { slug: 'brownboost-and-the-carbon-balance', color: '#6b4c2a', icon: '🌿', label: 'BrownBoost' },
  { slug: 'community-ecobuck-pilot-schools', color: '#264653', icon: '🏫', label: 'Community' },
  { slug: 'zevyer-partnership-clean-tech', color: '#2a9d8f', icon: '🤝', label: 'Partnership' },
  { slug: 'growmix-from-waste-to-soil', color: '#40916c', icon: '🌱', label: 'GrowMix' },
  { slug: 'source-segregation-guide-pakistan', color: '#52b788', icon: '♻️', label: 'Segregation' },
  { slug: 'odor-control-indoor-composting', color: '#1d3557', icon: '💨', label: 'Odor Control' },
  { slug: 'housing-societies-zero-waste', color: '#386641', icon: '🏘️', label: 'Societies' },
  { slug: 'smart-cities-waste-management', color: '#023047', icon: '🏙️', label: 'Smart Cities' },
  { slug: 'school-cafeteria-waste-solutions', color: '#588157', icon: '🍽️', label: 'Schools' },
  { slug: 'biogas-basics-home-and-community', color: '#e9c46a', icon: '🔥', label: 'Biogas' },
  { slug: 'composting-in-apartments', color: '#606c38', icon: '🏢', label: 'Apartments' },
  { slug: 'activated-carbon-filters-explained', color: '#3a5a40', icon: '🛡️', label: 'Filters' },
  { slug: 'circular-economy-pakistan-2026', color: '#2d6a4f', icon: '♾️', label: 'Circular' },
  { slug: 'eco-caddy-mini-setup-guide', color: '#74c69d', icon: '🪣', label: 'Caddy' },
  { slug: 'dry-waste-recycling-at-home', color: '#457b9d', icon: '📦', label: 'Recycling' },
  { slug: 'women-led-clean-tech-pakistan', color: '#9d4edd', icon: '💪', label: 'Leadership' },
  { slug: 'lahore-waste-crisis-solutions', color: '#bc6c25', icon: '📍', label: 'Lahore' },
  { slug: 'institutional-partnership-playbook', color: '#1b263b', icon: '📋', label: 'Playbook' },
]

for (const c of covers) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c.color};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0f2618;stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#g)"/>
  <circle cx="680" cy="80" r="120" fill="white" opacity="0.06"/>
  <circle cx="120" cy="380" r="90" fill="white" opacity="0.05"/>
  <text x="48" y="72" fill="#a7f3d0" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="3">ECO ZINDAGI JOURNAL</text>
  <text x="48" y="240" fill="white" font-family="Arial,sans-serif" font-size="72">${c.icon}</text>
  <text x="48" y="310" fill="white" font-family="Arial,sans-serif" font-size="36" font-weight="700">${c.label}</text>
  <rect x="48" y="330" width="80" height="4" fill="#f4a41c" rx="2"/>
</svg>`
  fs.writeFileSync(path.join(blogDir, `${c.slug}.svg`), svg)
  console.log('created', c.slug)
}
