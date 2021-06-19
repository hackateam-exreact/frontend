import { articlesTemplate, userTemplate } from 'utils/userTemplate'
import { render, screen } from 'utils/test-utils'

import { ArticleList } from 'components/Profile/ArticleList'
import { AuthProvider } from 'contexts/AuthContext'
import { useRouter } from 'next/router'

const articles = articlesTemplate
const profile = userTemplate

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
        <ArticleList profile={profile} articles={articles} />
      </AuthProvider>
    )

    expect(screen.getByText(articles[0].title)).toBeInTheDocument()
  })
})
