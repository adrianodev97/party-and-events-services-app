import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTheme extends Theme {}

  // eslint-disable-next-line no-unused-vars
  interface CustomThemeOptions extends ThemeOptions {}

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
