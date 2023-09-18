import { Box, styled, Typography } from '@mui/material'

export const MUIStyledHeroSection = styled('section')(({ theme }) => ({}))
export const MUIStyledHeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5rem',
  [theme.breakpoints.only('sm')]: {
    gap: '3rem',
  },
  [theme.breakpoints.only('xs')]: {
    flexDirection: 'column-reverse',
  },
}))

export const MUIStyledHeroInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

export const MUIStyledHeroFlag = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroTitle = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroDescription = styled(Typography)(({ theme }) => ({}))

export const MUIStyledHeroImageBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1',

  img: {
    maxWidth: '500px',
    objectFit: 'contain',
    margin: '0 auto',
  },
}))
