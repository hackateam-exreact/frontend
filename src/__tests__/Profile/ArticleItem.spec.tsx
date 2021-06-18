import { render, screen } from 'utils/test-utils'

import { ArticleItem } from 'components/Profile/ArticleItem'
import { AuthProvider } from 'contexts/AuthContext'
import { articlesTemplate } from 'utils/userTemplate'
import { useRouter } from 'next/router'

const articles = articlesTemplate

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn()
}))

describe('<ArticleItem />', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ asPath: '/' })
  })

  it('should render an article card', () => {
    const article = articles[0]

    render(
      <AuthProvider>
        <ArticleItem article={article} />
      </AuthProvider>
    )

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(
      screen.getByText(`${article.readingTime} minuto`)
    ).toBeInTheDocument()
    expect(screen.getByText(article.created_at)).toBeInTheDocument()
  })

  it('should render reading time in plural', () => {
    const article = articles[1]

    render(
      <AuthProvider>
        <ArticleItem article={article} />
      </AuthProvider>
    )

    expect(
      screen.getByText(`${article.readingTime} minutos`)
    ).toBeInTheDocument()
  })
})
