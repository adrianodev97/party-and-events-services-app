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

import { fb } from '../../services/hooks'

export const LoginPage = () => {
  const [activeForm, setActiveForm] = useState<boolean>(true)

  const changeLogin = () => {
    activeForm ? setActiveForm(false) : setActiveForm(true)
  }

  // Sign In Formik Validation

  const initialValues = {
    email: '',
    password: '',
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

  const onSubmit: any = (values: any) => {
    fb.authentication
      .in(values.email, values.password)
      .then((response) => {
        console.log(response)
        formik.resetForm()
      })
      .catch((error) => {
        console.log(error)
      }) // tratar com formik
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  // Sign Up Formik Validation

  const signUpInitialValues = {
    email: '',
    password: '',
    checkPassword: '',
  }

  const signUpValidationSchema: yup.ObjectSchema<any> = yup.object({
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
    checkPassword: yup
      .string()
      .trim()
      .min(6, 'Please enter a valid password')
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Please enter your password'),
  })

  const signUpOnSubmit: any = (values: any) => {
    fb.authentication
      .new(values.email, values.password)
      .then((response) => {
        console.log(response)
        signUpFormik.resetForm()
      })
      .catch((error) => {
        console.log(error)
      }) // tratar com formik
  }

  const signUpFormik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: signUpOnSubmit,
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
            <MUIStyledSignUpForm onSubmit={signUpFormik.handleSubmit}>
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
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                value={signUpFormik.values.email}
                onChange={signUpFormik.handleChange}
                error={
                  signUpFormik.touched.email &&
                  Boolean(signUpFormik.errors.email)
                }
                helperText={
                  signUpFormik.touched.email && signUpFormik.errors.email
                }
              />
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
                  name="password"
                  value={signUpFormik.values.password}
                  onChange={signUpFormik.handleChange}
                  error={
                    signUpFormik.touched.password &&
                    Boolean(signUpFormik.errors.password)
                  }
                  helperText={
                    signUpFormik.touched.password &&
                    signUpFormik.errors.password
                  }
                />
                <TextField
                  label="Senha"
                  type="password"
                  name="checkPassword"
                  autoComplete="current-password"
                  value={signUpFormik.values.checkPassword}
                  onChange={signUpFormik.handleChange}
                  error={
                    signUpFormik.touched.checkPassword &&
                    Boolean(signUpFormik.errors.checkPassword)
                  }
                  helperText={
                    signUpFormik.touched.checkPassword &&
                    signUpFormik.errors.checkPassword
                  }
                />
              </MUIStyledInlineInput>
              <Button type="submit" color="secondary">
                Criar Conta
              </Button>
            </MUIStyledSignUpForm>
          </MUIStyledFormSignUp>
        </MUIStyledFormBox>
      </MUIStyledLoginBlock>
    </MUIStyledLoginSection>
  )
}
