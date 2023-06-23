import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    customPalette: {
      primary: { main: string; light: string; dark: string; hover: string }
      secondary: { main: string; light: string; dark: string; hover: string }
      text: { primary: string; secondary: string; contrast: string }
      background: {
        main: string
        default: string
      }
    }
    customTypography: {
      heading1: {
        desktop: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
        mobile: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
      }
      heading2: {
        desktop: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
        mobile: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
      }
      heading3: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      heading4: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      body1: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      body2: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      button: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions {
    customPalette?: {
      primary: { main: string; light: string; dark: string; hover: string }
      secondary: { main: string; light: string; dark: string; hover: string }
      text: { primary: string; secondary: string; contrast: string }
      background: {
        main: string
        default: string
      }
    }
    customTypography?: {
      heading1: {
        desktop: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
        mobile: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
      }
      heading2: {
        desktop: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
        mobile: {
          fontSize: CSSProperties['fontSize']
          fontWeight: CSSProperties['fontWeight']
          lineHeight: CSSProperties['lineHeight']
        }
      }
      heading3: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      heading4: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      body1: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      body2: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
        lineHeight: CSSProperties['lineHeight']
      }
      button: {
        fontSize: CSSProperties['fontSize']
        fontWeight: CSSProperties['fontWeight']
      }
    }
  }
}
