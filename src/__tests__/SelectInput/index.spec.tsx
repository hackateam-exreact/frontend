import { render, screen } from 'utils/test-utils'

import { SelectInput } from 'components/SelectInput'

describe('<SelectInput />', () => {
  it('should render with label', () => {
    render(
      <SelectInput inputName="select" label="Label">
        <option value=""></option>
      </SelectInput>
    )

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should render with an error message', () => {
    render(
      <SelectInput
        label="Label"
        inputName="select"
        error={{
          message: 'Invalid Choice',
          type: 'maxLength'
        }}
      >
        <option value=""></option>
      </SelectInput>
    )

    expect(screen.getByText('Invalid Choice')).toBeInTheDocument()
  })
})
