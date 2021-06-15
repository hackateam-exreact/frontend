import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

import { FieldError } from 'react-hook-form'
import { ReactElement } from 'react'

interface InputProps extends ChakraInputProps {
  inputName: string
  label?: string
  error?: FieldError
  focusBorderColor?: 'blue.500' | 'green.500'
  rightIcon?: ReactElement
  leftIcon?: ReactElement
}

const TextInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    inputName,
    label,
    error = null,
    focusBorderColor = 'blue.500',
    rightIcon = null,
    leftIcon = null,
    ...rest
  },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <InputGroup>
        {!!leftIcon && (
          <InputLeftElement pointerEvents="all">{leftIcon}</InputLeftElement>
        )}
        <ChakraInput
          name={inputName}
          id={inputName}
          focusBorderColor={focusBorderColor}
          errorBorderColor="red.500"
          bg="gray.800"
          border="none"
          p="3"
          size="lg"
          _placeholder={{ fontSize: 'sm' }}
          ref={ref}
          {...rest}
        />
        {!!rightIcon && (
          <InputRightElement pointerEvents="all">{rightIcon}</InputRightElement>
        )}
      </InputGroup>
      {!!error && (
        <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const TextInput = forwardRef(TextInputBase)
