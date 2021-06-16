import { render, screen } from 'utils/test-utils'
import { FiMail } from 'react-icons/fi'

import { TextInput } from '../../components/TextInput'

describe('<TextInput />', () => {
  it('should render with label', () => {
    const { container } = render(<TextInput label="Label" inputName="email" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with a left icon', () => {
    render(
      <TextInput
        leftIcon={<FiMail data-testid="icon" />}
        label="Label"
        inputName="email"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with a right icon', () => {
    render(
      <TextInput
        rightIcon={<FiMail data-testid="icon" />}
        label="Label"
        inputName="email"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with an error message', () => {
    render(
      <TextInput
        leftIcon={<FiMail data-testid="icon" />}
        label="Label"
        inputName="email"
        error={{
          message: 'Invalid E-mail',
          type: 'maxLength'
        }}
      />
    )

    expect(screen.getByText('Invalid E-mail')).toBeInTheDocument()
  })
})
