import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'

import { Container } from 'components/Container'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Head from 'next/head'
import Router from 'next/router'
import { SignUpForm } from 'components/Form/SignUpForm'

export default function SignInPage() {
  const highlightColor = 'blue.500'

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
        <SimpleGrid columns={2} columnGap={40} maxW="992px" mx="auto">
          <SignUpForm />
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
