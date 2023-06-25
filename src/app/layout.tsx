import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/store/provider'
import { ThemeProvider } from '@/style/theme/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PartYou',
  description: 'Find works for you',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider>layout{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
