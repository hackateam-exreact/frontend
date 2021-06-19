import { render, screen } from 'utils/test-utils'

import { ProjectItem } from 'components/Profile/ProjectItem'
import { projectsTemplate } from 'utils/userTemplate'

const projects = projectsTemplate

describe('<ProjectItem />', () => {
  it('should render a project card', () => {
    const project = projects[0]

    render(<ProjectItem project={project} />)

    expect(screen.getByText(project.title)).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })
})
