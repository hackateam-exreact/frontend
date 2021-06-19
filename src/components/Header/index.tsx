import { Link as ChakraLink, Flex, HStack, Image } from '@chakra-ui/react'

import Link from 'next/link'
import { Searchbar } from './Searchbar'
import { UserBadge } from 'components/Profile/UserBadge'
import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'

export function Header() {
  const { user } = useAuth()
  const { asPath } = useRouter()

  let showHeader = true
  const length = asPath.split('/').length
  const page = asPath.split('/')[length - 1]
  if (page === 'signin' || page === 'signup' || asPath === '/') {
    showHeader = false
  }

  return (
    <>
      {showHeader && (
        <Flex w="100%" h="24" borderBottom="1px" borderColor="gray.800" mb="5">
          <HStack w="100%" maxW="1400px" mx="auto" align="center" spacing="10">
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
