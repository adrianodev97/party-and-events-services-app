'use client'

import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'PartYou',
  description: 'Find works for you',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt_BR">
      <body>{children}</body>
    </html>
  )
}
