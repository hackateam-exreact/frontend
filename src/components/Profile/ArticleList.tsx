import { ArticleItem } from './ArticleItem'
import { IArticle } from 'interfaces/article'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

interface ArticleListProps {
  articles: IArticle[]
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ProfileSectionContainer title="Artigos">
      {articles?.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ProfileSectionContainer>
  )
}
