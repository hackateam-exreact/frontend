import { ArticleItem } from './ArticleItem'
import { CreateArticleProvider } from 'contexts/CreateArticleContext'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import React from 'react'

interface ArticleListProps {
  profile: IUser
  articles: IArticle[]
}

export function ArticleList({ profile, articles }: ArticleListProps) {
  return (
    <ProfileSectionContainer title="Artigos">
      <CreateArticleProvider>
        {articles?.map((article) => (
          <ArticleItem key={article.id} profile={profile} article={article} />
        ))}
      </CreateArticleProvider>
    </ProfileSectionContainer>
  )
}
