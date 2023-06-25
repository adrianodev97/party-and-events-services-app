import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { theme } from '.'
import { ReactNode } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
