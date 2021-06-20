import { Link as ChakraLink, Flex, HStack, Image } from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { Searchbar } from './Searchbar'
import { UserBadge } from 'components/Profile/UserBadge'
import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'

export function Header() {
  const { user } = useAuth()
  const { asPath } = useRouter()

  const blacklist = ['/', '/dev/signin', '/dev/signup', '/dev/welcome']

  return (
    <>
      {!blacklist.includes(asPath) && (
        <Flex
          w="100%"
          h="6rem"
          borderBottom="1px"
          borderColor="gray.800"
          mb="1rem"
        >
          <HStack
            w="100%"
            maxW="1400px"
            mx="auto"
            align="center"
            spacing="10"
            px="5"
          >
            <Link href="/" passHref={true}>
              <ChakraLink>
                <Image
                  src="/img/logo.png"
                  alt="Devspot"
                  w="225px"
                  objectFit="cover"
                />
              </ChakraLink>
            </Link>
            <Searchbar />
            <UserBadge user={user} badgeSide="right" />
          </HStack>
        </Flex>
      )}
    </>
  )
}
