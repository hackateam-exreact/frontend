import {
  Link as ChakraLink,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import React, { useState } from 'react'

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
  firstName: string
  lastName: string
  email: string
  password: string
}

export function SignUpForm({ target = 'dev' }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const highlightColor = target === 'dev' ? 'blue.500' : 'green.500'

  const { handleSignUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  const onSubmit = async (values: SignUpData) => {
    await handleSignUp(values)
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
      <VStack w="100%" spacing="1">
        <TextInput
          inputName="firstName"
          error={errors.firstName}
          type="firstName"
          placeholder="Nome"
          {...register('firstName')}
        />
        <TextInput
          inputName="lastName"
          error={errors.lastName}
          type="lastName"
          placeholder="Sobrenome"
          {...register('lastName')}
        />
        <TextInput
          inputName="email"
          error={errors.email}
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <TextInput
          inputName="password"
          error={errors.password}
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
