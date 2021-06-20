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
  avatar: yup.string().nullable(),
  about: yup.string().required('Sobre obrigatório').nullable(),
  first_name: yup.string().required('Nome obrigatório'),
  last_name: yup.string().required('Sobrenome obrigatório'),
  email: yup.string(),
  contact: yup
    .string()
    .max(11, 'Máximo de 11 dígitos (DDD + Número com 9)')
    .nullable(),
  status: yup.string().nullable(),
  location: yup.string().nullable()
})

export const createArticleSchema = yup.object().shape({
  link: yup.string().required('Link obrigatório'),
  title: yup.string().required('Título obrigatório')
})

export const createProjectSchema = yup.object().shape({
  title: yup.string().required('Título obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  repositories: yup.string()
})

export const createSkillSchema = yup.object().shape({
  skill: yup.string().required('Skill obrigatória'),
  experience: yup
    .number()
    .required('Experiência obrigatória (se menos de 1 ano, colocar 0)')
    .positive()
    .integer()
    .max(80),
  description: yup.string().required('Descrição obrigatória')
})
