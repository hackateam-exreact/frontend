import { render, screen } from 'utils/test-utils'

import { ProfileDescription } from 'components/Profile/ProfileDescription'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<ProfileDescription />', () => {
  it('should render a card with user description', () => {
    render(<ProfileDescription description={user.about} />)

    expect(screen.getByText(user.about)).toBeInTheDocument()
  })
})
