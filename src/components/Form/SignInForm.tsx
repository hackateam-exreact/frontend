import {
  Link as ChakraLink,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { Button } from 'components/Button'
import Link from 'next/link'
import { TextInput } from 'components/TextInput'
import { signInSchema } from 'utils/yupSchemas'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignInFormProps {
  target?: 'dev' | 'hunter'
}

interface SignInData {
  email: string
  password: string
}

export function SignInForm({ target = 'dev' }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const highlightColor = target === 'dev' ? 'blue.500' : 'green.500'

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(signInSchema)
  })

  const onSubmit = async (values: SignInData) => {
    console.log(values)
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
        Login para Devs
      </Heading>
      <VStack w="100%" spacing="1">
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
        Entrar
      </Button>
      <Text as="span" fontSize="sm" color="gray.500">
        Não tem conta?
      </Text>
      <Link href="/dev/signup" passHref={true}>
        <ChakraLink color={highlightColor} fontSize="sm">
          Cadastre-se
        </ChakraLink>
      </Link>
    </VStack>
  )
}
