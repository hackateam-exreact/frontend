import { Flex, Avatar, Text, Icon } from '@chakra-ui/react'
import { Button } from 'components/Button'
import Router from 'next/router'
import { FiMousePointer } from 'react-icons/fi'

interface UserSearchProps {
  userToken: string
  urlImageUser?: string
  nameUser: string
  emailUser: string
  descUser: string
  numberArticle: number
  numberProjects: number
}

export function UserSearch({
  userToken,
  urlImageUser,
  nameUser,
  emailUser,
  descUser,
  numberArticle,
  numberProjects
}: UserSearchProps) {
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
        <Avatar size="lg" name={nameUser} src={urlImageUser}></Avatar>

        <Flex mx="1rem" flexDirection="column">
          <Text fontFamily="Ubuntu" fontSize="1.5rem" fontWeight="700">
            {nameUser}
          </Text>
          <Text fontFamily="Roboto" fontSize="sm" color="gray.500">
            {emailUser}
          </Text>
        </Flex>
      </Flex>

      <Text my="2rem" fontFamily="Roboto" fontWeight="400" fontSize="16">
        {descUser}
      </Text>

      <hr />
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mt="2rem"
      >
        <Text fontFamily="Poppins" fontSize="0.875rem" color="gray.500">
          Mais de{' '}
          <Text as="span" color="blue.500">
            {numberProjects}
          </Text>{' '}
          projetos
          <br />e{' '}
          <Text as="span" color="blue.500">
            {numberArticle}
          </Text>{' '}
          artigos escritos
        </Text>

        <Button
          backgroundColor="blue.500"
          fullWidth={false}
          w="250px"
          p="2rem"
          onClick={() => Router.push(`/dev/profile/${userToken}`)}
          leftIcon={<Icon as={FiMousePointer} fontSize="24" />}
        >
          Visitar perfil
        </Button>
      </Flex>
    </Flex>
  )
}
