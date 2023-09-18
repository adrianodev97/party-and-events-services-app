import { createTheme } from '@mui/material/styles'

import './theme'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#586DA7',
      light: '#038C8C',
      dark: '#038C8C',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#F5A336',
      light: '#038C8C',
      dark: '#038C8C',
      contrastText: '#FFF',
    },
    text: {
      disabled: '#038C8C',
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#FFF',
      paper: '#F6F8F7',
    },
    grey: {
      '50': '#FAFAFA',
      '100': '#F5F5F5',
      '200': '#EEEEEE',
      '300': '#E0E0E0',
      '400': '#BDBDBD',
      '500': '#9E9E9E',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },
  },
  components: {
    // Button
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: theme.palette.primary.main,
              padding: '.75rem 1.5rem',
              '&:hover': {
                backgroundColor: '#FFF',
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
            color: '#FFF',
          },

          p: {
            fontSize: '1rem',
            color: '#FFF',
          },

          '&::before': {
            height: '0',
          },
        },
      },
    },
  },
})
