'use client'

import { MUIHeader } from '@/components/MUIHeader'
import { ReduxProvider } from '@/store/provider'
import { ThemeProvider } from '@/style/theme/ThemeProvider'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <MUIHeader />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}
