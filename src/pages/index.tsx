import { Flex, Button, Text, Icon, Image } from '@chakra-ui/react'
import { FiCode, FiUser } from 'react-icons/fi'
import Router from 'next/router'

export default function Home() {
  return (
    <>
      <Flex
        w="100%"
        maxW="1400px"
        m="0 auto"
        p="2rem"
        my="2rem"
        height="70vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w="50%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          h="100%"
        >
          <Image
            src="/img/logo.png"
            alt="Logo Devstop"
            h="64px"
            w="270px"
            mb="5rem"
          />

          <Flex flexDirection="column">
            <Text my="1rem" fontFamily="Ubuntu" fontSize="3rem">
              Encontre outros{' '}
              <Text as="span" color="blue.500">
                devs
              </Text>
              <br /> de todo o Brasil e <br />
              ajude a{' '}
              <Text as="span" color="green.500">
                comunidade
              </Text>
            </Text>
            <Text
              fontSize="1.5rem"
              fontFamily="Roboto"
              fontWeight="400"
              lineHeight="29.5px"
            >
              Conheça desenvolvedores que estão <br />
              no mercado e produza conteúdo em <br />
              apenas uma plataforma <br />
            </Text>
          </Flex>
        </Flex>
        <Image
          w="50%"
          h="100%"
          src="/img/banner.svg"
          alt="Banner Img Devspot"
        />
      </Flex>
      <Flex height="30vh" bg="gray.800">
        <Flex
          w="100%"
          maxW="1400px"
          m="1rem auto"
          p="2rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <Text fontSize="2rem" fontWeight="500" fontFamily="Ubuntu">
              O que você deseja fazer?
            </Text>
            <Text>
              Você seria um recrutador <br /> ou um desenvolvedor?
            </Text>
          </Flex>

          <Flex w="40%" justifyContent="space-around">
            <Button
              w="45%"
              py="4rem"
              bg="blue.500"
              _hover={{ bg: '#506EF9' }}
              onClick={() => Router.push('/dev/signup')}
            >
              <Icon as={FiCode} fontSize="32" />
              <Text
                fontSize="1rem"
                fontWeight="400"
                fontFamily="Ubuntu"
                marginLeft="1rem"
              >
                Desenvolvedor
              </Text>
            </Button>
            <Button
              w="45%"
              py="4rem"
              bg="green.500"
              _hover={{ bg: '#03D05F' }}
              onClick={() => Router.push('/hunter/signup')}
            >
              <Icon as={FiUser} fontSize="32" />
              <Text
                fontSize="1rem"
                fontWeight="400"
                fontFamily="Ubuntu"
                marginLeft="1rem"
              >
                Recrutador
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
