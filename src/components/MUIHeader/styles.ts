import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material'

export const MUIStyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.customPalette.background.default,
}))

export const MUIStyledToolbar = styled(Toolbar)(({ theme }) => ({}))

// remove display none in dashboard route
export const MUIStyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
}))

export const MUIStyledTypography = styled(Typography)(({ theme }) => ({}))

export const MUIStyledButton = styled(Button)(({ theme }) => ({}))
