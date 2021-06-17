import { render, screen } from 'utils/test-utils'

import { ArticleItem } from 'components/Profile/ArticleItem'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<ArticleItem />', () => {
  it('should render an article card', () => {
    const article = user.articles[0]

    render(<ArticleItem user={user} article={article} />)

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(
      screen.getByText(`${article.readingTime} minuto`)
    ).toBeInTheDocument()
    expect(screen.getByText(article.created_at)).toBeInTheDocument()
  })

  it('should render reading time in plural', () => {
    const article = user.articles[1]

    render(<ArticleItem user={user} article={article} />)

    expect(
      screen.getByText(`${article.readingTime} minutos`)
    ).toBeInTheDocument()
  })
})
