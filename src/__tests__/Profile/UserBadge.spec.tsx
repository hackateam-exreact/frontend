import { render, screen } from 'utils/test-utils'

import { UserBadge } from 'components/Profile/UserBadge'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

describe('<UserBadge />', () => {
  it('should render a badge with user info', () => {
    render(<UserBadge user={user} />)

    expect(screen.getByRole('img')).toHaveClass('chakra-avatar__svg')
    expect(
      screen.getByText(`${user.first_name} ${user.last_name}`)
    ).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
  })

  it('should render a badge with user avatar on the right side', () => {
    const { container } = render(<UserBadge badgeSide="right" user={user} />)

    expect(container.querySelector('.chakra-avatar')?.nextSibling).toBeFalsy()
  })

  it('should render sign in and sign up buttons if user is not authenticated', () => {
    render(<UserBadge user={null} />)

    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
})
