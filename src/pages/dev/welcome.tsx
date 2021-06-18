import { Heading, Icon, Image, Text, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { Container } from '../../components/Container'
import { FiThumbsUp } from 'react-icons/fi'
import Head from 'next/head'
import { useAuth } from 'hooks/useAuth'

export default function WelcomePage() {
  const { user, handleSignIn, tmpSignInValues } = useAuth()

  return (
    <>
      <Head>
        <title>Bem-vindo | Devspot</title>
      </Head>

      <Container
        alignItems="center"
        justifyContent="center"
        w="fit-content"
        h="100vh"
        mx="auto"
      >
        <VStack spacing="3" w="fit-content">
          <Image
            src="/img/check-circle.png"
            alt="Check Circle"
            w="255px"
            h="255px"
            objectFit="cover"
          />

          <Heading>Seja Bem Vindo {user.name}!!</Heading>
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
          onClick={() => handleSignIn(tmpSignInValues)}
        >
          Encontrar devs
        </Button>
      </Container>
    </>
  )
}
