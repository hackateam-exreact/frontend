import { render, screen } from 'utils/test-utils'

import { Container } from '../../components/Container'

describe('<Container/>', () => {
  it('should render with children', () => {
    render(
      <Container>
        <div data-testid="Mock Children" />
      </Container>
    )

    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })
})
