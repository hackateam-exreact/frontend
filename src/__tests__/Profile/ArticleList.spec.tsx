import { render, screen } from 'utils/test-utils'

import { ArticleList } from 'components/Profile/ArticleList'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<ArticleList />', () => {
  it('should render a project list', () => {
    render(<ArticleList user={user} articles={user.articles} />)

    expect(screen.getByText(user.articles[0].title)).toBeInTheDocument()
  })
})
