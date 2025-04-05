import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adriel Gama | Front-end Developer',
  description:
    'Front-End Developer with over 6 years of experience in responsive web projects. Specialist in interactive interfaces, complex designs, and innovative solutions, ensuring cross-browser compatibility and an optimized user experience.',
  keywords: [
    'Adriel Gama',
    'desenvolvedor front-end',
    'web responsiva',
    'interfaces interativas',
    'experiência do usuário',
    'otimização de desempenho',
    'Next.js',
    'React',
    'TypeScript',
    'UI/UX',
    'desenvolvimento web',
    'cross-browser',
    'soluções inovadoras',
  ],
  authors: [{ name: 'Adriel Gama', url: 'https://x.com/adrielgama' }],
  creator: 'Adriel Gama',
  publisher: 'Adriel Gama',
  metadataBase: new URL('https://adrielgama.dev'),
  manifest: '/favicon/site.webmanifest',

  openGraph: {
    title: 'Adriel Gama | Front-end Developer',
    description:
      'Front-end Developer with more than 6 years of experience in web development.',
    url: 'https://adrielgama.dev',
    siteName: 'Adriel Gama',
    images: [
      {
        url: '/adrielgama-og.png',
        width: 800,
        height: 800,
        alt: 'Adriel Gama - Front-end Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Adriel Gama | Front-end Developer',
    description:
      'Front-end Developer with more than 6 years of experience in web development.',
    images: '/adrielgama-og.png',
    creator: '@adrielgama',
  },

  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} data-theme="light">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
        <Toaster richColors theme="light" />
      </body>
    </html>
  )
}
