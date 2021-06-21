import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { FiMousePointer } from 'react-icons/fi'
import { IUser } from 'interfaces/user'
import Router from 'next/router'

interface UserSearchProps {
  user: IUser
}

export function UserSearch({ user }: UserSearchProps) {
  return (
    <Flex
      w="100%"
      p="2rem"
      bg="gray.800"
      my="1rem"
      flexDirection="column"
      borderRadius="8"
    >
      <Flex w="100%" alignItems="center" justifyContent="flex-start">
        <Avatar size="lg" name={user.name} src={user.avatar}></Avatar>

        <Flex mx="1rem" flexDirection="column">
          <Text fontFamily="Ubuntu" fontSize="1.5rem" fontWeight="700">
            {user.name}
          </Text>
          <Text fontFamily="Roboto" fontSize="sm" color="gray.500">
            {user.email}
          </Text>
        </Flex>
      </Flex>

      <Text my="2rem" fontFamily="Roboto" fontWeight="400" fontSize="16">
        {user.about}
      </Text>

      <hr />
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mt="2rem"
      >
        <Button
          backgroundColor="blue.500"
          fullWidth={false}
          w="250px"
          p="2rem"
          onClick={() => Router.push(`/dev/profile/${user.id}`)}
          leftIcon={<Icon as={FiMousePointer} fontSize="24" />}
        >
          Visitar perfil
        </Button>
      </Flex>
    </Flex>
  )
}
