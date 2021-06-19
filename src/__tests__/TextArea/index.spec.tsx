import { render, screen } from 'utils/test-utils'

import { TextArea } from 'components/TextArea'

describe('<TextArea />', () => {
  it('should render with label', () => {
    render(<TextArea inputName="email" label="Label" />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should render with an error message', () => {
    render(
      <TextArea
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
