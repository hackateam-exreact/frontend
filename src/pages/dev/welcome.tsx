import { Heading, Icon, Image, Text, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { Container } from '../../components/Container'
import { FiThumbsUp } from 'react-icons/fi'
import Head from 'next/head'
import Router from 'next/router'

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>Bem-vindo | Devspot</title>
      </Head>

      <Container
        alignItems="center"
        justifyContent="center"
        w="100vw"
        h="100vh"
      >
        <VStack spacing="3" w="fit-content">
          <Image
            src="/img/check-circle.png"
            alt="Check Circle"
            w="255px"
            h="255px"
            objectFit="cover"
          />

          <Heading>Seja Bem Vindo!!</Heading>
          <Text align="justify" fontSize="sm" color="gray.500">
            Agora é só explorar nossa plataforma e conhecer o mundo da
            tecnologia. Bora lá?
          </Text>
        </VStack>
        <Button
          leftIcon={<Icon as={FiThumbsUp} />}
          fullWidth={true}
          size="lg"
          mt="8"
          onClick={() => Router.push('/')}
        >
          Encontrar devs
        </Button>
      </Container>
    </>
  )
}
