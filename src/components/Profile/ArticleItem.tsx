import { Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'

import { FiClock } from 'react-icons/fi'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { UserBadge } from './UserBadge'

interface ArticleItemProps {
  user: IUser
  article: IArticle
}

export function ArticleItem({ user, article }: ArticleItemProps) {
  return (
    <VStack
      align="flex-start"
      spacing="10"
      p="3"
      bg="gray.800"
      borderRadius="md"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="bold">
        {article.title}
      </Text>
      <Flex align="center" justify="space-between" w="100%">
        <UserBadge user={user} />
        <HStack>
          <Icon as={FiClock} />
          <Text fontSize="xs" color="gray.500">
            5 minutos de leitura
          </Text>
        </HStack>
        <Text fontSize="xs" color="gray.500">
          16/06/2021
        </Text>
      </Flex>
    </VStack>
  )
}
