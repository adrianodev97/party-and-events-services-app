import { Box, styled, Typography } from '@mui/material'

export const MUIStyledHeroSection = styled('section')(({ theme }) => ({}))

export const MUIStyledHeroFlag = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroTitle = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroDescription = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroImageBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1',

  img: {
    objectFit: 'contain',
  },
}))
