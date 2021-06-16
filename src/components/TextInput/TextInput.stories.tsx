import { Story, Meta } from '@storybook/react/types-6-0'
import { FiMail } from 'react-icons/fi'

import { TextInput, InputProps } from '.'

export default {
  title: 'TextInput',
  component: TextInput
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <TextInput {...args} />
  </div>
)

export const WithLeftIcon: Story<InputProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <TextInput {...args} />
  </div>
)

WithLeftIcon.args = {
  leftIcon: <FiMail />
}

export const WithRightIcon: Story<InputProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <TextInput {...args} />
  </div>
)

WithRightIcon.args = {
  leftIcon: <FiMail />
}
