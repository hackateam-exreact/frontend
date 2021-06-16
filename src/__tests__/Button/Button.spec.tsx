import { render, screen } from 'utils/test-utils'

import { Button } from '../../components/Button'

describe('<Button />', () => {
  it('should render a blue button', () => {
    const { container } = render(<Button>devspot</Button>)

    expect(screen.getByRole('button', { name: /devspot/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a green button', () => {
    render(<Button backgroundColor="green.500">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
  })

  it('should render a full-width button', () => {
    render(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%'
    })
  })
})
