import { articlesTemplate, userTemplate } from 'utils/userTemplate'
import { render, screen } from 'utils/test-utils'

import { ArticleItem } from 'components/Profile/ArticleItem'
import { AuthProvider } from 'contexts/AuthContext'
import { useRouter } from 'next/router'

const articles = articlesTemplate
const profile = userTemplate

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
        <ArticleItem profile={profile} article={article} />
      </AuthProvider>
    )

    expect(screen.getByText(article.title)).toBeInTheDocument()
    expect(screen.getByText(article.created_at)).toBeInTheDocument()
  })
})
