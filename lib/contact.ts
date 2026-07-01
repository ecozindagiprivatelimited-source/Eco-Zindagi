export const WHATSAPP_NUMBER = '923359463244'
export const WHATSAPP_DISPLAY = '+92 335 9463244'
export const CONTACT_EMAIL = 'hello@ecozindagi.pk'
export const CONTACT_LOCATION = 'eEarn Innovation Hub, Hasan Chowk, Mureer, Murree Rd, Chamanzar Colony, Rawalpindi, 46000, Pakistan'
export const CONTACT_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=eEarn+Innovation+Hub+Hasan+Chowk+Mureer+Murree+Rd+Chamanzar+Colony+Rawalpindi+46000+Pakistan'

export function whatsappUrl(message?: string): string {
  const text = message ?? 'Hi Eco Zindagi! I would like to know more about your products.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/eco-zindagi/',
  facebook: 'https://www.facebook.com/profile.php?id=61574371894937',
  instagram: 'https://www.instagram.com/ecozindagi.pk?igsh=YzQ3MG9mMWQ0aGZh',
  whatsapp: whatsappUrl(),
} as const
