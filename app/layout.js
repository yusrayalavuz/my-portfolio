import { Fraunces, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata = {
  title: 'Yüsra Yalavuz — Frontend & AI Developer',
  description:
    'Frontend development, veri analizi ve yapay zeka tabanlı çözümler geliştirerek kullanıcı odaklı modern dijital deneyimler oluşturuyorum.',
  keywords: [
    'frontend developer',
    'React',
    'Next.js',
    'TypeScript',
    'AI',
    'veri analizi',
    'Yüsra Yalavuz',
  ],
  authors: [{ name: 'Yüsra Yalavuz' }],
  openGraph: {
    title: 'Yüsra Yalavuz — Frontend & AI Developer',
    description: 'Kod, tasarım ve yapay zekayı bir araya getiriyorum.',
    url: 'https://yusrayalavuz.dev',
    siteName: 'Yüsra Yalavuz Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yüsra Yalavuz — Frontend & AI Developer',
    description: 'Kod, tasarım ve yapay zekayı bir araya getiriyorum.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}