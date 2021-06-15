import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

export interface ButtonProps extends ChakraButtonProps {
  backgroundColor?: 'blue.500' | 'green.500'
  children: string
  fullWidth?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Button = ({
  backgroundColor = 'blue.500',
  children,
  fullWidth = false,
  size = 'md',
  ...props
}: ButtonProps) => (
  <ChakraButton
    color="white"
    backgroundColor={backgroundColor}
    width={fullWidth ? '100%' : 'auto'}
    size={size}
    _hover={{
      backgroundColor
    }}
    {...props}
  >
    {children}
  </ChakraButton>
)
