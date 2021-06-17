import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required('Nome obrigatório'),
  lastName: yup.string().required('Sobrenome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export const editProfileSchema = yup.object().shape({
  about: yup.string().required('Sobre obrigatório'),
  username: yup.string().required('Username obrigatório'),
  email: yup.string(),
  phone: yup.string()
})
