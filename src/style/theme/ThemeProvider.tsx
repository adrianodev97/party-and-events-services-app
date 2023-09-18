import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { theme } from './theme'
import { ReactNode } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
