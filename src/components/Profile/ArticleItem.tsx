import {
  Link as ChakraLink,
  Divider,
  Flex,
  Icon,
  IconButton
} from '@chakra-ui/react'

import { FiTrash } from 'react-icons/fi'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import Link from 'next/link'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { UserBadge } from './UserBadge'
import { useCreateArticle } from 'hooks/useCreateArticle'

interface ArticleItemProps {
  profile: IUser
  article: IArticle
}

export function ArticleItem({ profile, article }: ArticleItemProps) {
  const { handleDeleteArticle } = useCreateArticle()

  return (
    <ProfileSectionItemContainer pos="relative">
      <IconButton
        aria-label="Excluir artigo"
        icon={<Icon as={FiTrash} />}
        onClick={() => handleDeleteArticle(article.id)}
        pos="absolute"
        bottom="2"
        right="2"
      />
      <Link href={article.url} passHref={true}>
        <ChakraLink color="blue.500">{article.title}</ChakraLink>
      </Link>
      <Divider />
      <Flex align="center" justify="space-between" w="100%">
        <UserBadge user={profile} />
      </Flex>
    </ProfileSectionItemContainer>
  )
}
