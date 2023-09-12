import { Typography } from '@mui/material'
import {
  MUIStyledAppBar,
  MUIStyledToolbar,
  MUIStyledButton,
  MUIStyledIconButton,
} from './styles'
import MenuIcon from '@mui/icons-material/Menu'

export const MUIHeader = () => {
  return (
    <MUIStyledAppBar position="static">
      <MUIStyledToolbar>
        <MUIStyledIconButton
          size="large"
          edge="start"
          color="info"
          aria-label="menu"
        >
          <MenuIcon />
        </MUIStyledIconButton>

        <MUIStyledButton variant="contained">Login</MUIStyledButton>
      </MUIStyledToolbar>
    </MUIStyledAppBar>
  )
}
