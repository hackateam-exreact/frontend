import { render, screen } from 'utils/test-utils'

import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'

describe('<ProfileSectionItemContainer />', () => {
  it('should render with children', () => {
    render(
      <ProfileSectionItemContainer>
        <div data-testid="Mock Children" />
      </ProfileSectionItemContainer>
    )

    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })

  it('should render with display flex and class chakra-stack', () => {
    render(
      <ProfileSectionItemContainer mode="stack" data-testid="Mock Stack">
        <div />
      </ProfileSectionItemContainer>
    )

    expect(screen.getByTestId('Mock Stack')).toHaveClass('chakra-stack')
  })

  it('should render with display flex and not have class chakra-stack', () => {
    render(
      <ProfileSectionItemContainer mode="flex" data-testid="Mock Stack">
        <div />
      </ProfileSectionItemContainer>
    )

    expect(
      screen.getByTestId('Mock Stack').classList.contains('chakra-stack')
    ).toBeFalsy()
  })
})
