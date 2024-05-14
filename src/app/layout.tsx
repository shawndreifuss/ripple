import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnarToaster } from '@/components/ui/sonner'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RippleEffect',
  description: 'All in one Agency Solution',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['RippleEffect', 'Agency', 'Solution'],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <meta name="description" content="Built with Next.js and TypeScript" />
      <link rel="icon" href="/assets/logo-icon.png" />
      <link rel="preload" href="http://localhost:3000/_next/static/css/app/site/page.css?v=1715043308787" as="style"/> 
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <Toaster />
            <SonnarToaster position="bottom-left" />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}