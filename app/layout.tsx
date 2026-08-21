import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import { CurrencyProvider } from '@/lib/currency-context'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'
const plusJakarta = Plus_Jakarta_Sans({
variable: '--font-plus-jakarta',
subsets: ['latin'],
weight: ['400', '500', '600', '700'],
})
const outfit = Outfit({
variable: '--font-outfit',
subsets: ['latin'],
weight: ['500', '600', '700', '800'],
})
export const metadata: Metadata = {
title: 'Eco Zindagi — Clean-Tech Zero-Waste for Pakistan',
description: "Pakistan's green clean-tech startup. Smart bins, composting systems, and circular living products — segregate today, compost tomorrow, zero waste everyday.",
icons: {
icon: [
{ url: '/favicon.png', type: 'image/png' },
{ url: '/eco-zindagi-logo.png', type: 'image/png' },
],
apple: '/apple-icon.png',
shortcut: '/favicon.png',
},
}
export const viewport: Viewport = {
colorScheme: 'light',
themeColor: '#4CAF50',
}
export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return (
<html
lang="en"
className={`light bg-background ${plusJakarta.variable} ${outfit.variable}`}
>
<body className="font-sans antialiased">
<CurrencyProvider>
<CartProvider>
{children}
<WhatsAppButton />
</CartProvider>
</CurrencyProvider>
{process.env.NODE_ENV === 'production' && <Analytics />}
{/* Meta Pixel */}
<Script
id="meta-pixel"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html: `
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;
 n.push=n;
 n.loaded=!0;
 n.version='2.0';
 n.queue=[];
 t=b.createElement(e);
 t.async=!0;
 t.src=v;
 s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}
 (window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1330236259182943');
 fbq('track', 'PageView');
 `,
}}
/>
</body>
</html>
)
}
