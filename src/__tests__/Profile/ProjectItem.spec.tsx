import { render, screen } from 'utils/test-utils'

import { ProjectItem } from 'components/Profile/ProjectItem'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<ProjectItem />', () => {
  it('should render a project card', () => {
    const project = user.projects[0]

    render(<ProjectItem project={project} />)

    expect(screen.getByText(project.title)).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })
})
