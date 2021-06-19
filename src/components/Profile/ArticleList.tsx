import { ArticleItem } from './ArticleItem'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

interface ArticleListProps {
  profile: IUser
  articles: IArticle[]
}

export function ArticleList({ profile, articles }: ArticleListProps) {
  return (
    <ProfileSectionContainer title="Artigos">
      {articles?.map((article) => (
        <ArticleItem key={article.id} profile={profile} article={article} />
      ))}
    </ProfileSectionContainer>
  )
}
