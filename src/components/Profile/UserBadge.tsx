import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'

interface UserBadgeProps {
  user: IUser
  badgeSide?: 'left' | 'right'
}

export function UserBadge({ user, badgeSide = 'left' }: UserBadgeProps) {
  return (
    <HStack spacing="3">
      {badgeSide === 'left' && <Avatar src={user.avatar} />}
      <VStack align="flex-start">
        <Text
          fontSize="sm"
          fontWeight="bold"
        >{`${user.first_name} ${user.last_name}`}</Text>
        <Text fontSize="xs" color="gray.500">
          {user.email}
        </Text>
      </VStack>
      {badgeSide === 'right' && <Avatar src={user.avatar} />}
    </HStack>
  )
}
