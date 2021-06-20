import { FiChevronDown, FiCode, FiUser } from 'react-icons/fi'
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'

import { Button } from 'components/Button'
import { GetStaticProps } from 'next'
import Router from 'next/router'

export default function Home() {
  return (
    <>
      <Flex w="100vw" h="70vh" align="center">
        <Flex
          direction={{ sm: 'column', lg: 'row' }}
          w="100%"
          maxW="1400px"
          mx="auto"
          align="center"
          justify="space-between"
          p="8"
        >
          <VStack align={{ sm: 'center', lg: 'flex-start' }}>
            <Image src="/img/logo.png" alt="Logo Devstop" h="64px" w="270px" />
            <Text fontSize="3xl">
              Encontre outros{' '}
              <Text as="span" color="blue.500">
                devs
              </Text>
              <br />
              de todo o Brasil e
              <br />
              ajude a{' '}
              <Text as="span" color="green.500">
                comunidade
              </Text>
            </Text>
            <Text fontSize="xl" align={{ sm: 'center', lg: 'left' }}>
              Conheça desenvolvedores que estão no mercado e produza conteúdo em
              apenas uma plataforma
            </Text>
          </VStack>
          <Image
            src="/img/banner.svg"
            alt="Rocket"
            w={{ sm: '200px', lg: 'max' }}
            h={{ sm: '200px', lg: 'max' }}
            objectFit="cover"
          />
        </Flex>
      </Flex>
      <Flex w="100vw" h="30vh" align="center" bg="gray.800">
        <Flex
          direction={{ sm: 'column', lg: 'row' }}
          w="100%"
          maxW="1400px"
          mx="auto"
          align="center"
          justify="space-between"
        >
          <Text fontSize="2xl">O que você deseja fazer?</Text>
          <Stack direction={{ sm: 'column', lg: 'row' }} spacing="5" mt="3">
            <Button py="8" leftIcon={<Icon as={FiCode} fontSize="32" />}>
              Explorar
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<Icon as={FiUser} />}
                rightIcon={<Icon as={FiChevronDown} />}
                py="8"
                backgroundColor="green.500"
              >
                Entrar/Cadastrar
              </MenuButton>
              <MenuList bg="black.500">
                <MenuItem onClick={() => Router.push('/dev/signin')}>
                  Entrar
                </MenuItem>
                <MenuItem onClick={() => Router.push('/dev/signup')}>
                  Cadastrar
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
