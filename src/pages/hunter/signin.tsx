import {
  Link as ChakraLink,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { TextInput } from 'components/TextInput'
import { signInSchema } from 'utils/yupSchemas'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignInData {
  email: string
  password: string
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const highlightColor = 'green.500'

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
    <>
      <Head>
        <title>Sign In | Devspot</title>
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
          <VStack align="center" justify="center">
            <Image
              src="/img/logo-green.png"
              alt="Devspot"
              w="max"
              objectFit="cover"
            />
            <Heading align="center" fontWeight="normal">
              Encontre devs e entre em contato
            </Heading>
          </VStack>
          <VStack align="flex-start" maxW="20rem" spacing="5">
            <Heading as="h3" color={highlightColor}>
              Login para Hunters
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
            <Button
              type="submit"
              fullWidth={true}
              backgroundColor={highlightColor}
              isLoading={isSubmitting}
            >
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
        </SimpleGrid>
      </Container>
    </>
  )
}
