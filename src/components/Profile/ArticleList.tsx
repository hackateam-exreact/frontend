import { Heading, VStack } from '@chakra-ui/react'

import { ArticleItem } from './ArticleItem'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'

interface ArticleListProps {
  user: IUser
  articles: IArticle[]
}

export function ArticleList({ user, articles }: ArticleListProps) {
  return (
    <VStack align="flex-start" spacing="5" w="100%">
      <Heading as="h3">Artigos principais</Heading>
      {articles.map((article) => (
        <ArticleItem key={article.id} user={user} article={article} />
      ))}
    </VStack>
  )
}
