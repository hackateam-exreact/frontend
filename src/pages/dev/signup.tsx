import { FiEye, FiEyeOff } from 'react-icons/fi'
import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Head from 'next/head'
import Router from 'next/router'
import { TextInput } from 'components/TextInput'
import { signUpSchema } from 'utils/yupSchemas'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const highlightColor = 'blue.500'

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  const onSubmit = async (values: SignUpData) => {
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Sign Up | Devspot</title>
      </Head>

      <Container direction="row" w="100vw" h="5rem">
        <Flex align="center" w="100%" maxW="992px" mx="auto">
          <IconButton
            aria-label="Voltar para página inicial"
            icon={<Icon as={FaLongArrowAltLeft} />}
            color={highlightColor}
            variant="ghost"
            onClick={() => Router.push('/')}
          />
        </Flex>
      </Container>

      <Container
        alignItems="center"
        justifyContent="center"
        w="100vw"
        h="calc(100vh - 5rem)"
      >
        <SimpleGrid
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          columns={2}
          columnGap={40}
          maxW="992px"
          mx="auto"
        >
          <VStack align="flex-start" maxW="20rem" spacing="5">
            <Heading as="h3" color={highlightColor}>
              Cadastro
            </Heading>
            <Text as="span" fontSize="sm" color="gray.500">
              Preencha os dados abaixo para começar.
            </Text>
            <VStack w="100%" spacing="1">
              <TextInput
                name="firstName"
                error={errors.firstName}
                type="firstName"
                placeholder="Nome"
                {...register('firstName')}
              />
              <TextInput
                name="lastName"
                error={errors.lastName}
                type="lastName"
                placeholder="Sobrenome"
                {...register('lastName')}
              />
              <TextInput
                name="email"
                error={errors.email}
                type="email"
                placeholder="Email"
                {...register('email')}
              />
              <TextInput
                name="password"
                error={errors.password}
                rightIcon={
                  showPassword ? (
                    <Icon
                      as={FiEyeOff}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <Icon as={FiEye} onClick={() => setShowPassword(true)} />
                  )
                }
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
              />
            </VStack>
            <Button type="submit" fullWidth={true} isLoading={isSubmitting}>
              Cadastrar
            </Button>
          </VStack>
          <VStack align="center" justify="center">
            <Image
              src="/img/logo.png"
              alt="Devspot"
              w="max"
              objectFit="cover"
            />
            <Heading align="center" fontWeight="normal">
              Seja bem-vindo Dev!! <br />
              Aqui é o seu lugar
            </Heading>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  )
}
