import { render, screen } from 'utils/test-utils'

import { ArticleList } from 'components/Profile/ArticleList'
import { AuthProvider } from 'contexts/AuthContext'
import { articlesTemplate } from 'utils/userTemplate'
import { useRouter } from 'next/router'

const articles = articlesTemplate

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn()
}))

describe('<ArticleList />', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ asPath: '/' })
  })

  it('should render a project list', () => {
    render(
      <AuthProvider>
        <ArticleList articles={articles} />
      </AuthProvider>
    )

    expect(screen.getByText(articles[0].title)).toBeInTheDocument()
  })
})
