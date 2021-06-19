import { FiChevronDown, FiCode, FiUser } from 'react-icons/fi'
import {
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack
} from '@chakra-ui/react'

import { Button } from 'components/Button'
import { GetStaticProps } from 'next'
import Router from 'next/router'
import { useState } from 'react'

export default function Home() {
  const [isBannerLoading, setIsBannerLoading] = useState(true)
  const [isLogoLoading, setIsLogoLoading] = useState(true)
  const buttonProps = {
    fontSize: '1rem',
    fontWeight: '400',
    fontFamily: 'Ubuntu',
    marginLeft: '1rem',
    w: '52',
    py: '4rem'
  }
  const bannerSize = '550px'

  return (
    <>
      <Flex
        w="100%"
        maxW="1400px"
        mx="auto"
        p="8"
        height="70vh"
        alignItems="center"
        justifyContent="center"
      >
        <SimpleGrid columns={2} w="100%">
          <VStack align="flex-start" spacing="20">
            <Skeleton h="64px" w="270px" isLoaded={!isLogoLoading}>
              <Image
                src="/img/logo.png"
                alt="Logo Devstop"
                h="64px"
                w="270px"
                onLoad={() => setIsLogoLoading(false)}
              />
            </Skeleton>
            <VStack align="flex-start">
              <Text fontFamily="Ubuntu" fontSize="3rem">
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
            </VStack>
          </VStack>
          <SkeletonCircle
            w={bannerSize}
            h={bannerSize}
            isLoaded={!isBannerLoading}
          >
            <Image
              w={bannerSize}
              h={bannerSize}
              src="/img/banner.svg"
              alt="Banner Img Devspot"
              ml="auto"
              onLoad={() => setIsBannerLoading(false)}
            />
          </SkeletonCircle>
        </SimpleGrid>
      </Flex>
      <Flex h="30vh" bg="gray.800">
        <Flex w="100%" maxW="1400px" mx="auto" alignItems="center">
          <VStack align="flex-start">
            <Text fontSize="2rem" fontWeight="500" fontFamily="Ubuntu">
              O que você deseja fazer?
            </Text>
          </VStack>

          <HStack spacing="5" ml="auto">
            <Button
              backgroundColor="blue.500"
              leftIcon={<Icon as={FiCode} fontSize="32" />}
              onClick={() => Router.push('/search')}
              {...buttonProps}
            >
              Explorar
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<Icon as={FiUser} />}
                rightIcon={<Icon as={FiChevronDown} />}
                backgroundColor="green.500"
                {...buttonProps}
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
          </HStack>
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
