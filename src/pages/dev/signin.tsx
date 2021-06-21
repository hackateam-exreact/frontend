import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  VStack
} from '@chakra-ui/react'

import { Container } from 'components/Container'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { SignInForm } from 'components/Form/SignInForm'

export default function SignInPage() {
  const highlightColor = 'blue.500'

  return (
    <>
      <Head>
        <title>Sign In | Devspot</title>
      </Head>

      <Container direction="row" w="100%" h="5rem">
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
        w="100%"
        h="calc(100vh - 5rem)"
      >
        <Flex
          maxW="992px"
          mx="auto"
          direction={{ sm: 'column', lg: 'row' }}
          align="center"
          justify={{ sm: 'space-evenly', lg: 'space-between' }}
          h="100%"
          w="100%"
        >
          <VStack align="center" justify="center">
            <Image
              src="/img/logo.png"
              alt="Devspot"
              w="350px"
              objectFit="cover"
            />
            <Heading align="center" fontWeight="normal">
              Encontre e ajude seus amigos devs
            </Heading>
          </VStack>
          <SignInForm />
        </Flex>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
