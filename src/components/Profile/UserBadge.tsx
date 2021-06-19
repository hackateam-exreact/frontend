import {
  Avatar,
  Link as ChakraLink,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
} from '@chakra-ui/react'

import { IUser } from 'interfaces/user'
import Link from 'next/link'
import Router from 'next/router'
import { useAuth } from 'hooks/useAuth'

interface UserBadgeProps {
  user: IUser
  badgeSide?: 'left' | 'right'
}

export function UserBadge({ user, badgeSide = 'left' }: UserBadgeProps) {
  const { handleSignOut } = useAuth()

  return (
    <HStack spacing="3" align="center">
      {badgeSide === 'left' && <Avatar src={user.avatar} />}
      <VStack align="flex-start">
        {user.name && (
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
      {badgeSide === 'right' && (
        <Menu>
          <MenuButton>
            <Avatar src={user.avatar} />
          </MenuButton>
          <MenuList bg="black.500">
            {user.name ? (
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => Router.push('/dev/signin')}>
                  Sign In
                </MenuItem>
                <MenuItem onClick={() => Router.push('/dev/signup')}>
                  Sign Up
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      )}
    </HStack>
  )
}
