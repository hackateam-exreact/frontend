import { ArticleItem } from './ArticleItem'
import { Button } from 'components/Button'
import { CreateArticleModal } from 'components/Modal/CreateArticleModal'
import { FiEdit } from 'react-icons/fi'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { Icon } from '@chakra-ui/react'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { Protected } from 'components/Protected'
import React from 'react'
import { useCreateArticle } from 'hooks/useCreateArticle'

interface ArticleListProps {
  profile: IUser
  articles: IArticle[]
}

export function ArticleList({ profile, articles }: ArticleListProps) {
  const { handleCreateArticle } = useCreateArticle()

  return (
    <>
      <ProfileSectionContainer title="Artigos">
        {articles?.map((article) => (
          <ArticleItem key={article.id} profile={profile} article={article} />
        ))}
      </ProfileSectionContainer>

      <Protected>
        <Button leftIcon={<Icon as={FiEdit} />} onClick={handleCreateArticle}>
          Criar artigo
        </Button>
        <CreateArticleModal />
      </Protected>
    </>
  )
}
