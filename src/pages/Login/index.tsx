import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material'
import { useEffect, useState } from 'react'
import {
  MUIStyledFormBox,
  MUIStyledFormSignIn,
  MUIStyledFormSignUp,
  MUIStyledFormTitle,
  MUIStyledHaveAccountTitle,
  MUIStyledInfoBoxBg,
  MUIStyledLoginBlock,
  MUIStyledLoginSeciton,
  MUIStyledLogoBox,
  MUIStyledSignInBox,
  MUIStyledSignInForm,
  MUIStyledSignUpBox,
  MUIStyledSignUpForm,
  MUIStyledlogo,
} from './styles'

export const LoginPage = () => {
  const [activeForm, setActiveForm] = useState({})

  const changeLogin = () => {
    activeForm ? setActiveForm(false) : setActiveForm(true)
  }

  useEffect(() => {
    alert(activeForm)
  }, [activeForm])

  return (
    <MUIStyledLoginSeciton
      className={['loginPage', activeForm ? 'active' : ''].join(' ')}
    >
      <MUIStyledLoginBlock>
        <MUIStyledInfoBoxBg className="blueBg">
          <MUIStyledSignInBox className="box signin">
            <MUIStyledHaveAccountTitle>
              Já possui conta?
            </MUIStyledHaveAccountTitle>
            <Button className="signinBtn" onClick={changeLogin}>
              Entrar
            </Button>
          </MUIStyledSignInBox>
          <MUIStyledSignUpBox className="box signup">
            <MUIStyledHaveAccountTitle>
              Não possui conta?
            </MUIStyledHaveAccountTitle>
            <Button className="signupBtn" onClick={changeLogin}>
              Cadastrar
            </Button>
          </MUIStyledSignUpBox>
        </MUIStyledInfoBoxBg>
        <MUIStyledFormBox
          className={['formBx', activeForm ? 'active' : ''].join(' ')}
        >
          <MUIStyledFormSignIn className="form signinForm">
            <MUIStyledLogoBox className="logo">
              <MUIStyledlogo src={logo} fill alt="logo" />
            </MUIStyledLogoBox>
            <MUIStyledSignInForm>
              <MUIStyledFormTitle>Login</MUIStyledFormTitle>
              <TextField label="Email" />
              <TextField
                label="Senha"
                type="password"
                autoComplete="current-password"
              />
              <Button>Login</Button>
            </MUIStyledSignInForm>
          </MUIStyledFormSignIn>
          <MUIStyledFormSignUp className="form signupForm">
            <MUIStyledSignUpForm>
              <MUIStyledFormTitle>Cadastro</MUIStyledFormTitle>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value="cliente"
                  control={<Radio />}
                  label="Cliente"
                />
                <FormControlLabel
                  value="profissional"
                  control={<Radio />}
                  label="Profissional"
                />
              </RadioGroup>
              <TextField label="Nome Completo / Razão Social" />
              <TextField label="Email" />
              <div className="inline-input">
                <TextField label="Telefone" />
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Segmento</InputLabel>
                  <Select native>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </div>
              <div className="inline-input">
                <TextField
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                />
                <TextField
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
              <Button color="secondary">Criar Conta</Button>
            </MUIStyledSignUpForm>
          </MUIStyledFormSignUp>
        </MUIStyledFormBox>
      </MUIStyledLoginBlock>
    </MUIStyledLoginSeciton>
  )
}
