import {
  Link as ChakraLink,
  Heading,
  Icon,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react'
import { FiEye, FiEyeOff, FiKey, FiMail } from 'react-icons/fi'

import { Button } from 'components/Button'
import Link from 'next/link'
import { TextInput } from 'components/TextInput'
import { signInSchema } from 'utils/yupSchemas'
import { useAuth } from 'hooks/useAuth'
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
  const { handleSignIn } = useAuth()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(signInSchema)
  })

  const onSubmit = async (values: SignInData) => {
    try {
      await handleSignIn(values)
    } catch (error) {
      toast({
        title: 'Error ao logar',
        description: 'Credenciais incorretas',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
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
        Login para Devs
      </Heading>
      <VStack w="100%" spacing="3">
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
