import { Flex, Heading, VStack } from '@chakra-ui/react'

import { IArticle } from 'interfaces/article'

interface ArticleItemProps {
  article: IArticle
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <VStack spacing="5" p="3" bg="gray.800" borderRadius="md">
      <Heading as="h3">{article.title}</Heading>
      <Flex align="center" justify="space-between"></Flex>
    </VStack>
  )
}
