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
import { useState } from 'react'
import {
  MUIStyledFormBox,
  MUIStyledFormSignIn,
  MUIStyledFormSignUp,
  MUIStyledFormTitle,
  MUIStyledHaveAccountTitle,
  MUIStyledInfoBoxBg,
  MUIStyledInlineInput,
  MUIStyledLoginBlock,
  MUIStyledLoginSection,
  MUIStyledLogoBox,
  MUIStyledSignInBox,
  MUIStyledSignInForm,
  MUIStyledSignUpBox,
  MUIStyledSignUpForm,
  // MUIStyledlogo,
} from './styles'

export const LoginPage = () => {
  const [activeForm, setActiveForm] = useState<boolean>(true)

  const changeLogin = () => {
    activeForm ? setActiveForm(false) : setActiveForm(true)
  }

  return (
    <MUIStyledLoginSection className={activeForm ? 'active' : ''}>
      <MUIStyledLoginBlock>
        <MUIStyledInfoBoxBg className={activeForm ? 'active' : ''}>
          <MUIStyledSignInBox className={activeForm ? '' : 'active'}>
            <MUIStyledHaveAccountTitle>
              Já possui conta?
            </MUIStyledHaveAccountTitle>
            <Button className="signinBtn" onClick={changeLogin}>
              Entrar
            </Button>
          </MUIStyledSignInBox>
          <MUIStyledSignUpBox className={activeForm ? 'active' : ''}>
            <MUIStyledHaveAccountTitle>
              Não possui conta?
            </MUIStyledHaveAccountTitle>
            <Button className="signupBtn" onClick={changeLogin}>
              Cadastrar
            </Button>
          </MUIStyledSignUpBox>
        </MUIStyledInfoBoxBg>
        <MUIStyledFormBox className={activeForm ? 'active' : ''}>
          <MUIStyledFormSignIn className={activeForm ? 'active' : ''}>
            <MUIStyledLogoBox className="logo">
              {/* <MUIStyledlogo src={logo} fill alt="logo" /> */}
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
          <MUIStyledFormSignUp className={activeForm ? 'active' : ''}>
            <MUIStyledSignUpForm>
              <MUIStyledFormTitle>Cadastro</MUIStyledFormTitle>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                sx={{ flexDirection: 'row' }}
              >
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
              <MUIStyledInlineInput className="inline-input">
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
              </MUIStyledInlineInput>
              <MUIStyledInlineInput className="inline-input">
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
              </MUIStyledInlineInput>
              <Button color="secondary">Criar Conta</Button>
            </MUIStyledSignUpForm>
          </MUIStyledFormSignUp>
        </MUIStyledFormBox>
      </MUIStyledLoginBlock>
    </MUIStyledLoginSection>
  )
}
