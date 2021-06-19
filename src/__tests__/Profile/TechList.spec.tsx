import { render, screen } from 'utils/test-utils'

import { TechList } from 'components/Profile/TechList'
import { techsTemplate } from 'utils/userTemplate'

const techs = techsTemplate

describe('<TechList />', () => {
  it('should render a list of tech items', () => {
    render(<TechList techs={techs} />)

    expect(screen.getByText(techs[0].title)).toBeInTheDocument()
  })
})
