'use client'

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

import { useFormik } from 'formik'
import * as yup from 'yup'

export const LoginPage = () => {
  const [activeForm, setActiveForm] = useState<boolean>(true)

  const changeLogin = () => {
    activeForm ? setActiveForm(false) : setActiveForm(true)
  }

  const validationSchema: yup.ObjectSchema<any> = yup.object({
    email: yup
      .string()
      .trim()
      .email('Please enter a valid email address')
      .required('Email is required.'),
    password: yup
      .string()
      .trim()
      .min(6, 'Please enter a valid password')
      .required('Please enter your password'),
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit: any = (values: any) => {
    alert(`${values.email} ${values.password}`)
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <MUIStyledLoginSection className={activeForm ? 'active' : ''}>
      <MUIStyledLoginBlock>
        <MUIStyledInfoBoxBg className={activeForm ? 'active' : ''}>
          <MUIStyledSignInBox className={activeForm ? 'active' : ''}>
            <MUIStyledHaveAccountTitle>
              Já possui conta?
            </MUIStyledHaveAccountTitle>
            <Button onClick={changeLogin}>Entrar</Button>
          </MUIStyledSignInBox>
          <MUIStyledSignUpBox className={activeForm ? 'active' : ''}>
            <MUIStyledHaveAccountTitle>
              Não possui conta?
            </MUIStyledHaveAccountTitle>
            <Button onClick={changeLogin}>Cadastrar</Button>
          </MUIStyledSignUpBox>
        </MUIStyledInfoBoxBg>
        <MUIStyledFormBox className={activeForm ? 'active' : ''}>
          <MUIStyledFormSignIn className={activeForm ? 'active' : ''}>
            <MUIStyledLogoBox>
              {/* <MUIStyledlogo src={logo} fill alt="logo" /> */}
            </MUIStyledLogoBox>
            <MUIStyledSignInForm onSubmit={formik.handleSubmit}>
              <MUIStyledFormTitle>Login</MUIStyledFormTitle>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Senha"
                type="password"
                name="password"
                autoComplete="current-password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button type="submit">Login</Button>
            </MUIStyledSignInForm>
          </MUIStyledFormSignIn>
          <MUIStyledFormSignUp className={activeForm ? 'active' : ''}>
            <MUIStyledSignUpForm onSubmit={formik.handleSubmit}>
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
              <TextField label="Nome Completo / Razão Social" fullWidth />
              <TextField label="Email" fullWidth />
              <MUIStyledInlineInput>
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
              <MUIStyledInlineInput>
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
