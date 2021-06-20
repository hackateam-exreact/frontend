import { render, screen } from 'utils/test-utils'

import { ISkill } from 'interfaces/skill'
import { SkillItem } from 'components/Profile/SkillItem'
import { techsTemplate } from 'utils/userTemplate'

const skills = techsTemplate
let skill: ISkill

describe('<SkillItem />', () => {
  beforeEach(() => {
    skill = skills[0]
  })

  it('should render skill thumbnail', () => {
    render(<SkillItem skill={skill} />)

    expect(screen.getByAltText(skill.title)).toBeInTheDocument()
  })

  it('should render skill title', () => {
    render(<SkillItem skill={skill} />)

    expect(screen.getByText(skill.title)).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<SkillItem skill={skill} />)

    expect(screen.getByText(skill.description)).toBeInTheDocument()
  })
})
