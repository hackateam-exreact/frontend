import { Story, Meta } from '@storybook/react/types-6-0'
import { FiUser } from 'react-icons/fi'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <Button {...args}>Button</Button>
  </div>
)

export const WithLeftIcon: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <Button {...args}>Button</Button>
  </div>
)

WithLeftIcon.args = {
  leftIcon: <FiUser />
}

export const WithRightIcon: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      width: '100%'
    }}
  >
    <Button {...args}>Button</Button>
  </div>
)

WithRightIcon.args = {
  rightIcon: <FiUser />
}
