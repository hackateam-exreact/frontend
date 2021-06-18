import { render, screen } from 'utils/test-utils'

import { ProjectList } from 'components/Profile/ProjectList'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<ProjectList />', () => {
  it('should render a project list', () => {
    render(<ProjectList projects={user.projects} />)

    expect(screen.getByText(user.projects[0].title)).toBeInTheDocument()
  })
})
