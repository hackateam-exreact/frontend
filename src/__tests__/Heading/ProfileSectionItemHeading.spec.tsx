import { render, screen } from 'utils/test-utils'

import { ProfileSectionItemHeading } from '../../components/Heading/ProfileSectionItemHeading'

describe('<ProfileSectionItemHeading />', () => {
  it('should render correctly', () => {
    render(<ProfileSectionItemHeading>Mock title</ProfileSectionItemHeading>)

    expect(screen.getByText('Mock title')).toBeInTheDocument()
  })
})
