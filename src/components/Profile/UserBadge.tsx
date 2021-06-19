import {
  Avatar,
  Button,
  Link as ChakraLink,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'

import { IUser } from 'interfaces/user'
import Link from 'next/link'

interface UserBadgeProps {
  user: IUser
  badgeSide?: 'left' | 'right'
}

export function UserBadge({ user, badgeSide = 'left' }: UserBadgeProps) {
  return (
    <HStack spacing="3" align="center">
      {badgeSide === 'left' && <Avatar src={user.avatar} />}
      <VStack>
        {user.name ? (
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
        ) : (
          <HStack>
            <Button>Sign In</Button>
            <Button variant="outline">Sign Up</Button>
          </HStack>
        )}
      </VStack>
      {badgeSide === 'right' && <Avatar src={user.avatar} name={user.name} />}
    </HStack>
  )
}
