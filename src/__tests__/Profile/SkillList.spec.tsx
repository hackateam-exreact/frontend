import { render, screen } from 'utils/test-utils'

import { SkillList } from 'components/Profile/SkillList'
import { techsTemplate } from 'utils/userTemplate'

const skills = techsTemplate

describe('<SkillList />', () => {
  it('should render a list of skill items', () => {
    render(<SkillList skills={skills} />)

    expect(screen.getByText(skills[0].title)).toBeInTheDocument()
  })
})
