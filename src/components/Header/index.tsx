import {
  Link as ChakraLink,
  Flex,
  HStack,
  Image,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { Searchbar } from './Searchbar'
import { UserBadge } from 'components/Profile/UserBadge'
import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'

export function Header() {
  const { user } = useAuth()
  const { asPath } = useRouter()
  const isMobile = useBreakpointValue({ sm: true, lg: false })

  const blacklist = ['/', '/dev/signin', '/dev/signup', '/dev/welcome']

  return (
    <>
      {!blacklist.includes(asPath) && (
        <Flex
          direction="column"
          w="100%"
          h={{ lg: '6rem' }}
          borderBottom="1px"
          borderColor="gray.800"
          mb="1rem"
        >
          <Stack
            direction={{ sm: 'column', lg: 'column' }}
            w="100%"
            h="100%"
            maxW="1400px"
            mx="auto"
            align="center"
            spacing="10"
            p="5"
          >
            <HStack w="100%" h="100%">
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
              {!isMobile && <Searchbar />}
              <UserBadge user={user} badgeSide="right" />
            </HStack>
            {isMobile && <Searchbar />}
          </Stack>
        </Flex>
      )}
    </>
  )
}
