import { render, screen } from 'utils/test-utils'

import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

describe('<ProfileSectionContainer />', () => {
  it('should render with children', () => {
    render(
      <ProfileSectionContainer title="Teste">
        <div data-testid="Mock Children" />
      </ProfileSectionContainer>
    )

    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })

  it('should render title', () => {
    render(
      <ProfileSectionContainer title="Mock Title">
        <div />
      </ProfileSectionContainer>
    )

    expect(screen.getByText('Mock Title')).toBeInTheDocument()
  })
})
