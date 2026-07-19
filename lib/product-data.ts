export interface Product {
  id: string
  name: string
  slug: string
  category: string
  price: number
  image: string
  description: string
  longDescription: string
  specs: string[]
  ecoScore: number
  inStock: boolean
  featured?: boolean
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  type: 'founder' | 'partner' | 'advisor' | 'intern'
}

export const products: Product[] = [
  {
    id: '1',
    name: 'BioLoop-60 Zero-Waste System',
    slug: 'bioloop-60',
    category: 'Smart Bins',
    price: 44999,
    image: '/products/bioloop-60.png',
    description: 'Flagship smart composting & waste-sorting unit for modern Pakistani homes.',
    longDescription:
      'BioLoop-60 separates organics, dry recyclables, and reject waste at the source. Charcoal filtration, bio-inoculum support, and sensor monitoring keep processing odor-free and indoor-friendly while connecting to app insights and EcoBucks rewards.',
    specs: ['8L Organics Caddy', '12L Dry Recyclables', '4L Reject Drawer', '28L Compost Starter'],
    ecoScore: 98,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Basic Zero-Waste Bin (40L)',
    slug: 'basic-zero-waste-bin',
    category: 'Smart Bins',
    price: 12999,
    image: '/products/basic-zero-waste-bin.png',
    description: 'Affordable 3-way segregation & composting starter for apartments and small families.',
    longDescription:
      'Separate organics, recyclables, and reject waste with odor-controlled charcoal filtration. Removable buckets, foot-pedal operation, and compost-ready design built for modern Pakistani kitchens.',
    specs: ['40L total capacity', '20L Organics · 15L Recyclables · 5L Reject', 'Charcoal filter lid', 'Food-grade PP'],
    ecoScore: 94,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Eco Caddy Mini (5L)',
    slug: 'eco-caddy-mini',
    category: 'Smart Bins',
    price: 2499,
    image: '/products/eco-caddy-mini.png',
    description: 'Compact countertop caddy for daily kitchen organics with ventilated lid.',
    longDescription:
      'Perfect for apartments and studios. BPA-free body, charcoal filter slot, and easy-clean design for collecting fruit peels, tea grounds, and veggie scraps before they reach your main bin.',
    specs: ['5L capacity', '235×160×215 mm', 'BPA-free PP', 'Dishwasher-safe body'],
    ecoScore: 92,
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Community BioLoop 120L',
    slug: 'community-bioloop-120l',
    category: 'Smart Bins',
    price: 449999,
    image: '/products/community-bioloop-120l.png',
    description: 'Institutional zero-waste & supplemental biogas pilot unit for schools and societies.',
    longDescription:
      'Designed for schools, universities, cafés, and housing societies. Segregates organics, recyclables, and reject waste while producing low-pressure biogas and nutrient-rich digestate through anaerobic digestion.',
    specs: ['120L/day input', '0.2–0.4 m³ biogas/day', 'Lockable service access', 'Mobile caster option'],
    ecoScore: 97,
    inStock: true,
  },
  {
    id: '5',
    name: 'Compost Tumbler (60L)',
    slug: 'compost-tumbler-60l',
    category: 'Composting',
    price: 18999,
    image: '/products/compost-tumbler-60l.png',
    description: 'Dual-chamber 60L tumbler for continuous home & garden composting.',
    longDescription:
      'Two 30L chambers let one side mature while you fill the other. UV-stabilized drum, powder-coated steel frame, aeration holes, and 360° tumbling for faster decomposition.',
    specs: ['60L total · 2×30L chambers', 'UV-stabilized PP', 'Tool-free assembly', '640×480×630 mm'],
    ecoScore: 93,
    inStock: true,
  },
  {
    id: '6',
    name: 'GrowMix (10 KG)',
    slug: 'growmix-10kg',
    category: 'Growing Media',
    price: 1299,
    image: '/products/growmix-10kg.png',
    description: 'Premium organic potting media from compost blend, cocopeat & biochar.',
    longDescription:
      'Nutrient-rich, non-chemical growing media that improves water retention, soil structure, and plant health. Ideal for pots, kitchen gardens, and home green spaces across Pakistan.',
    specs: ['10 KG pack', 'pH 6.5–7.5', 'Compost + cocopeat + biochar', '6-month shelf life'],
    ecoScore: 96,
    inStock: true,
  },
  {
    id: '7',
    name: 'BrownBoost (2 KG)',
    slug: 'brownboost-2kg',
    category: 'Consumables',
    price: 549,
    image: '/products/brownboost-2kg.png',
    description: 'Carbon-balance refill for wet kitchen waste — absorbs moisture & reduces odor.',
    longDescription:
      'Sprinkle over wet organics in Eco Zindagi caddies and bins. Cocopeat, rice-husk biochar, and dry browns improve carbon balance and keep kitchen waste easier to manage.',
    specs: ['2 KG resealable pack', 'Cocopeat + biochar blend', 'Works with all EZ bins', 'Launch priority'],
    ecoScore: 95,
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    name: 'OdorGuard Cartridge',
    slug: 'odorguard-cartridge',
    category: 'Consumables',
    price: 399,
    image: '/products/odorguard-cartridge.png',
    description: 'Activated carbon odor-control cartridge for caddies & bins.',
    longDescription:
      'High-adsorption coconut shell carbon traps odor molecules and harmful gases. Drop-in replacement — no tools required. Effective for 30–45 days.',
    specs: ['30–45 day life', 'Coconut shell carbon', 'Food-grade PP casing', 'Fits all EZ products'],
    ecoScore: 91,
    inStock: true,
  },
  {
    id: '9',
    name: 'Activated Carbon Filter',
    slug: 'activated-carbon-filter',
    category: 'Consumables',
    price: 349,
    image: '/products/activated-carbon-filter.png',
    description: 'High-performance odor & air purification filter refill.',
    longDescription:
      'Traps ammonia, H₂S, VOCs, and airborne impurities. Vented cover, pre-filter layer, and durable food-grade casing for all Eco Zindagi bins and caddies.',
    specs: ['90×70×15 mm', '~40g weight', '2-year sealed shelf life', '30–45 day filter life'],
    ecoScore: 90,
    inStock: true,
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Areeba Syed',
    role: 'CEO & Founder',
    bio: 'Biotechnologist and entrepreneur leading Eco Zindagi toward sustainability and impact-driven growth. Recognized through the NetZero Challenge, PM National Innovation Award, Pakistan Innovation Hub, and climate education initiatives.',
    image: '/team/areeba-syed.png',
    type: 'founder',
  },
  {
    name: 'Sadeeq Khan',
    role: 'Partner / Founder & Senior Program Manager',
    bio: 'Startup community builder with GCC and UAE market experience. Drives Eco Zindagi’s growth through strategic planning, partnerships, and high-impact team building.',
    image: '/team/sadeeq-khan.png',
    type: 'partner',
  },
  {
    name: 'Anwar Ul Haq',
    role: 'Financial Advisor',
    bio: 'Finance and venture operations expert who has supported 200+ startups, enabled PKR 300M+ revenue, and helped secure PKR 220M+ in investment support.',
    image: '/team/anwar-ul-haq.png',
    type: 'advisor',
  },
  {
    name: 'Zahid Iqbal',
    role: 'Startup Growth Advisor',
    bio: 'Ecosystem builder with experience at Ignite, BridgeStart Pakistan, and HR Waves Consulting — focused on founder enablement and sustainable startup growth.',
    image: '/team/zahid-iqbal.png',
    type: 'advisor',
  },
  {
    name: 'Dr. Maha Rehman',
    role: 'Sustainability Advisor',
    bio: 'Pakistani biotechnologist, Research Officer at PCSIR Islamabad, and CEO of Bahar MediCart. Brings expertise in biotechnology, healthcare innovation, environmental biotechnology, molecular biology, bioinformatics, and research to support long-term sustainable impact.',
    image: '/team/dr-maha-rehman.png',
    type: 'advisor',
  },
  {
    name: 'Lilah Ahmad',
    role: 'Sustainability & Material Intern',
    bio: 'Material engineer skilled in sustainability, advanced materials, failure analysis, and technical optimization — with experience in engineering documentation and sustainable development.',
    image: '/team/lilah-ahmad.png',
    type: 'intern',
  },
  {
    name: 'Arsalan Khalil',
    role: 'AI Intern',
    bio: 'Emerging ML engineer focused on intelligent systems, MLOps, LLM fine-tuning, seismic detection, explainable AI, and scalable deployment.',
    image: '/team/arsalan-khalil.png',
    type: 'intern',
  },
  {
    name: 'Waleed Tariq',
    role: 'AI Intern / IoT Division',
    bio: 'GIKI software engineering student building AI-integrated systems with Python, Flask, Django, AWS, Docker, NLP, and chatbot development.',
    image: '/team/waleed-tariq.png',
    type: 'intern',
  },
  {
    name: 'Alishba Farrukh',
    role: 'Sustainability & Design Intern',
    bio: 'GCWUS Sialkot student bringing creative thinking and sustainable design passion to Eco Zindagi’s environmental mission.',
    image: '/team/alishba-farrukh.png',
    type: 'intern',
  },
  {
    name: 'Toqeer Ahmed',
    role: 'AI Researcher & Software Intern',
    bio: 'GIKI Software Engineering student and AI researcher working on medical diagnosis, computer vision, NLP, and generative AI — with leadership at ACM GIKI and SOPHEP.',
    image: '/team/toqeer-ahmed.png',
    type: 'intern',
  },
  {
    name: 'Yashir Nadeem',
    role: 'IoT & Sustainability Intern',
    bio: 'Aspiring Chemical Engineer and sustainability advocate with a strong interest in water, environment, and low-cost sustainable solutions. Brings community service experience from Alkhidmat Foundation Pakistan, The Citizens Foundation, UN Movers Program, and Millennium Campus Network, with a focus on SDG 6: Clean Water & Sanitation.',
    image: '/team/yashir-nadeem.png',
    type: 'intern',
  },
  {
    name: 'Abdullah Ijaz',
    role: 'AI Intern / IoT Division',
    bio: 'Software Engineering student at GIKI focused on full-stack development, intelligent systems, and scalable backend solutions. Technical skills span React, Flask, Django, AI & Machine Learning, TensorFlow, Scikit-Learn, NLP, AWS, Docker, GitHub Actions, CI/CD, and REST APIs.',
    image: '/team/abdullah-ijaz.png',
    type: 'intern',
  },
  {
    name: 'Masooma Tassaduq',
    role: 'Research Assistant',
    bio: 'Biotechnologist and Research Assistant contributing to sustainability-focused research initiatives. Supports environmental responsibility, sustainable solutions, innovation, and science-driven impact to help Eco Zindagi build practical solutions for people and the planet.',
    image: '/team/masooma-tassaduq.png',
    type: 'intern',
  },
]

export const internOpenings = [
  'Sustainability & Design Intern',
  'AI & Machine Learning Intern',
  'Material Engineering Intern',
  'Content & Community Intern',
]

export const awards = [
  { year: 2026, title: 'Clean-Tech Startup Showcase', issuer: 'Pakistan Innovation Forum' },
  { year: 2025, title: 'Circular Economy Pioneer', issuer: 'Green Pakistan Initiative' },
  { year: 2025, title: 'Women-Led Startup Spotlight', issuer: 'National Incubation Center' },
  { year: 2024, title: 'Zero-Waste Product Design', issuer: 'Sustainable Futures Lab' },
]

export const impactStats = [
  { metric: 'Households Onboarded', value: '2,400+', unit: 'across Pakistan', change: '+68%' },
  { metric: 'Waste Diverted', value: '18T+', unit: 'from landfills', change: '+52%' },
  { metric: 'Cities & Campuses', value: '12+', unit: 'active pilots', change: '+40%' },
  { metric: 'EcoBucks Earned', value: '850K+', unit: 'reward points', change: '+120%' },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
