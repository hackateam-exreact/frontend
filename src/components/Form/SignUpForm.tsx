import {
  Link as ChakraLink,
  Heading,
  Icon,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react'
import { FiEye, FiEyeOff, FiKey, FiMail } from 'react-icons/fi'
import React, { useState } from 'react'

import { BsPerson } from 'react-icons/bs'
import { Button } from 'components/Button'
import Link from 'next/link'
import { TextInput } from 'components/TextInput'
import { signUpSchema } from 'utils/yupSchemas'
import { useAuth } from 'hooks/useAuth'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignUpFormProps {
  target?: 'dev' | 'hunter'
}

interface SignUpData {
  first_name: string
  last_name: string
  email: string
  password: string
}

export function SignUpForm({ target = 'dev' }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const highlightColor = target === 'dev' ? 'blue.500' : 'green.500'
  const toast = useToast()

  const { handleSignUp } = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  const onSubmit = async (values: SignUpData) => {
    try {
      await handleSignUp(values)
    } catch (error) {
      if (error.response.data.message.email[0]) {
        toast({
          title: 'Erro ao criar conta',
          description: 'Já existe uma conta com este email',
          status: 'error',
          duration: 3000,
          isClosable: true
        })

        reset()
      }
    }
  }

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      align="flex-start"
      maxW="20rem"
      spacing="5"
    >
      <Heading as="h3" color={highlightColor}>
        Cadastro
      </Heading>
      <Text as="span" fontSize="sm" color="gray.500">
        Preencha os dados abaixo para começar.
      </Text>
      <VStack w="100%" spacing="3">
        <TextInput
          inputName="first_name"
          error={errors.first_name}
          placeholder="Nome"
          leftIcon={<Icon as={BsPerson} />}
          {...register('first_name')}
        />
        <TextInput
          inputName="last_name"
          error={errors.last_name}
          placeholder="Sobrenome"
          leftIcon={<Icon as={BsPerson} />}
          {...register('last_name')}
        />
        <TextInput
          inputName="email"
          error={errors.email}
          type="email"
          placeholder="Email"
          leftIcon={<Icon as={FiMail} />}
          {...register('email')}
        />
        <TextInput
          inputName="password"
          error={errors.password}
          leftIcon={<Icon as={FiKey} />}
          rightIcon={
            <Icon
              as={showPassword ? FiEyeOff : FiEye}
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register('password')}
        />
      </VStack>
      <Button type="submit" fullWidth={true} isLoading={isSubmitting}>
        Cadastrar
      </Button>
      <Text as="span" fontSize="sm" color="gray.500">
        Já possui conta?
      </Text>
      <Link href="/dev/signin" passHref={true}>
        <ChakraLink color={highlightColor} fontSize="sm">
          Entrar
        </ChakraLink>
      </Link>
    </VStack>
  )
}
