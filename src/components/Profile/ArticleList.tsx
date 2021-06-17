import { ArticleItem } from './ArticleItem'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

interface ArticleListProps {
  user: IUser
  articles: IArticle[]
}

export function ArticleList({ user, articles }: ArticleListProps) {
  return (
    <ProfileSectionContainer title="Artigos">
      {articles.map((article) => (
        <ArticleItem key={article.id} user={user} article={article} />
      ))}
    </ProfileSectionContainer>
  )
}
