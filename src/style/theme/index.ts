import { createTheme } from '@mui/material'
import { customPalette } from './customPalette'
import { customTypography } from './customTypography'

import './types'

export const theme = createTheme({
  customPalette,
  customTypography,
  components: {
    // Button
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: customPalette.primary.main,
              padding: '.75rem 1.5rem',
              '&:hover': {
                backgroundColor: customPalette.primary.hover,
              },
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              fontSize: '16px',
              padding: '.75rem 1.5rem',
              '&:hover': {
                // backgroundColor: customPalette.primary.hover,
              },
            }),
          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              fontSize: '16px',
              '&:hover': {
                // backgroundColor: customPalette.primary.hover,
              },
            }),
        }),
      },
    },
    // Accordion
    MuiAccordion: {
      styleOverrides: {
        root: {
          maxWidth: '800px',
          margin: '0 !important',
          padding: '1rem 0',
          boxShadow: 'none',
          borderBottom: '1px solid #E9E9E9',

          h6: {
            fontSize: '1rem',
            color: customPalette.text.primary,
          },

          p: {
            fontSize: '1rem',
            color: customPalette.text.secondary,
          },

          '&::before': {
            height: '0',
          },
        },
      },
    },
  },
})
