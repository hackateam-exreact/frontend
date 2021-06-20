import {
  Avatar,
  Link as ChakraLink,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import Router, { SingletonRouter } from 'next/router'

import { IUser } from 'interfaces/user'
import Link from 'next/link'
import { useAuth } from 'hooks/useAuth'

interface UserBadgeProps {
  user: IUser
  badgeSide?: 'left' | 'right'
}

interface AvatarMenuProps {
  user: IUser
  handleSignOut: () => void
  router: SingletonRouter
}

function AvatarMenu({ user, handleSignOut, router }: AvatarMenuProps) {
  const showUserInfo = useBreakpointValue({ sm: true, lg: false })

  return (
    <Menu>
      <MenuButton>
        <Avatar src={user.avatar} />
      </MenuButton>
      <MenuList bg="black.500">
        {user.name ? (
          showUserInfo ? (
            <>
              <MenuItem onClick={() => Router.push(`/dev/profile/${user.id}`)}>
                {user.name}
              </MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </>
          ) : (
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          )
        ) : (
          <>
            <MenuItem onClick={() => router.push('/dev/signin')}>
              Sign In
            </MenuItem>
            <MenuItem onClick={() => router.push('/dev/signup')}>
              Sign Up
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export function UserBadge({ user, badgeSide = 'left' }: UserBadgeProps) {
  const { handleSignOut } = useAuth()
  const showUserInfo = useBreakpointValue({ sm: false, lg: true })

  return (
    <HStack spacing="3" align="center">
      {badgeSide === 'left' && (
        <>
          <AvatarMenu
            user={user}
            handleSignOut={handleSignOut}
            router={Router}
          />
          <VStack align="flex-start">
            {user.name && showUserInfo && (
              <>
                <Link href={`/dev/profile/${user.id}`} passHref={true}>
                  <ChakraLink fontSize="sm" fontWeight="bold">
                    {user.name}
                  </ChakraLink>
                </Link>
                <Text fontSize="xs" color="gray.500">
                  {user.email}
                </Text>
              </>
            )}
          </VStack>
        </>
      )}
      {badgeSide === 'right' && (
        <>
          <VStack align="flex-start">
            {user.name && showUserInfo && (
              <>
                <Link href={`/dev/profile/${user.id}`} passHref={true}>
                  <ChakraLink fontSize="sm" fontWeight="bold">
                    {user.name}
                  </ChakraLink>
                </Link>
                <Text fontSize="xs" color="gray.500">
                  {user.email}
                </Text>
              </>
            )}
          </VStack>
          <AvatarMenu
            user={user}
            handleSignOut={handleSignOut}
            router={Router}
          />
        </>
      )}
    </HStack>
  )
}
