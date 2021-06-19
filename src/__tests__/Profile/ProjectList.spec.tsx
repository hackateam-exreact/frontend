import { render, screen } from 'utils/test-utils'

import { ProjectList } from 'components/Profile/ProjectList'
import { projectsTemplate } from 'utils/userTemplate'

const projects = projectsTemplate

describe('<ProjectList />', () => {
  it('should render a project list', () => {
    render(<ProjectList projects={projects} />)

    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
  })
})
