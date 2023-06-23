import { IThemeProviderProps } from './types'
import { ThemeProvider } from '@mui/material'
import { theme } from '..'

export const MUIThemeProvider = ({ children }: IThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
