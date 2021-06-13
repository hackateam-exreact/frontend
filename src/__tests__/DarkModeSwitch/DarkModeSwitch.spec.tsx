import { render, screen } from 'utils/test-utils'

import { DarkModeSwitch } from '../../components/DarkModeSwitch'

describe('<DarkModeSwitch/ >', () => {
  it('should render with a checkbox input', () => {
    render(<DarkModeSwitch />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
