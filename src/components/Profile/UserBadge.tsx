import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'

interface UserBadgeProps {
  user: IUser
}

export function UserBadge({ user }: UserBadgeProps) {
  return (
    <HStack spacing="3">
      <Avatar src={user.avatar} />
      <VStack align="flex-start">
        <Text
          fontSize="sm"
          fontWeight="bold"
        >{`${user.first_name} ${user.last_name}`}</Text>
        <Text fontSize="xs" color="gray.500">
          {user.email}
        </Text>
      </VStack>
    </HStack>
  )
}
