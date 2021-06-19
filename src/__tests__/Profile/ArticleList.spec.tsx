import { render, screen } from 'utils/test-utils'

import { ArticleList } from 'components/Profile/ArticleList'
import { AuthProvider } from 'contexts/AuthContext'
import { articlesTemplate } from 'utils/userTemplate'

const articles = articlesTemplate

describe('<ArticleList />', () => {
  it('should render a project list', () => {
    render(
      <AuthProvider>
        <ArticleList articles={articles} />
      </AuthProvider>
    )

    expect(screen.getByText(articles[0].title)).toBeInTheDocument()
  })
})
