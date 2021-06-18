import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export const signUpSchema = yup.object().shape({
  first_name: yup.string().required('Nome obrigatório'),
  last_name: yup.string().required('Sobrenome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export const editProfileSchema = yup.object().shape({
  about: yup.string().required('Sobre obrigatório'),
  name: yup.string().required('Nome obrigatório'),
  email: yup.string(),
  contact: yup.string(),
  location: yup.string()
})
