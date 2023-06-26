import { styled } from '@mui/material'
import Image from 'next/image'

export const MUIStyledLoginSection = styled('section')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '1.5s',
  backgroundImage: 'url("../../img/confet.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
}))

export const MUIStyledLoginBlock = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '800px',
  height: '500px',
  margin: '20px',

  [theme.breakpoints.down('md')]: {
    maxWidth: '400px',
    height: '650px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const MUIStyledInfoBoxBg = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '40px',
  width: '100%',
  height: '420px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#586da780',
  boxShadow: '0 5px 45px rgba(0, 0, 0, 0.15)',
  borderRadius: '5px',
  transition: '1.5s',

  button: {
    cursor: 'pointer',
    padding: '10px 20px',
    background: '#fff',
    color: '#333',
    fontWeight: '400',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
  },

  '&.active': {
    background: '#f5a33680',
    transition: '1.5s',
  },

  [theme.breakpoints.down('md')]: {
    top: '0',
    height: '100%',
  },
}))

export const MUIStyledSignInBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    width: '100%',
    height: '150px',
    bottom: '0',

    '&.active': {
      top: '0',
    },
  },
}))

export const MUIStyledSignUpBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    width: '100%',
    height: '150px',
    bottom: '0',
  },
}))

export const MUIStyledHaveAccountTitle = styled('h2')(({ theme }) => ({
  color: '#fff',
  fontSize: '1.2em',
  fontWeight: '500',
  marginBottom: '10px',
}))

export const MUIStyledFormBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '0%',
  left: '0',
  width: '50%',
  height: '100%',
  background: '#fff',
  zIndex: '999',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 5px 45px rgba(0, 0, 0, 0.25)',
  transition: '0.5s ease-in-out',
  overflow: 'hidden',
  borderRadius: '5px',

  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: '0.5s',
  },

  '&.active': {
    left: '50%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '500px',
    top: '0',
    boxShadow: 'none',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',

    '&.active': {
      left: '0',
      top: '150px',
      borderRadius: '0',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
}))

export const MUIStyledFormSignIn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '0',
  width: '100%',
  padding: '0 50px 50px',
  transition: '0.5s',
  button: {
    background: '#586da7',
  },
  h3: {
    color: '#586da7',
  },

  '&.active': {
    left: '-100%',
    transitionDelay: '0',
  },
}))

export const MUIStyledLogoBox = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}))

export const MUIStyledlogo = styled(Image)(({ theme }) => ({ width: '200px' }))

export const MUIStyledFormSignUp = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
  padding: '0 50px 50px',
  transition: '0.5s',
  left: '100%',
  transitionDelay: '0s',

  '&.active': {
    left: '0',
    transitionDelay: '0.25s',
  },

  button: {
    background: '#f5a336',
  },
  h3: {
    color: '#f5a336',
  },
}))

export const MUIStyledSignUpForm = styled('div')(({ theme }) => ({
  left: '100%',
  transitionDelay: '0s',
}))

export const MUIStyledFormTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5em',
  color: '$primary',
  marginBottom: '20px',
  fontWeight: '600',
}))

export const MUIStyledSignInForm = styled('div')(({ theme }) => ({
  transitionDelay: '0.25s',
}))

export const MUIStyledInlineInput = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
}))
