import {
  Select as ChakraSelect,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SelectProps
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

import { FieldError } from 'react-hook-form'
import { ReactNode } from 'react'

export interface SelectInputPropt extends SelectProps {
  children: ReactNode
  inputName: string
  label?: string
  error?: FieldError
  focusBorderColor?: 'blue.500' | 'green.500'
}

const SelectInputBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectInputPropt
> = (
  {
    children,
    inputName,
    label,
    error = null,
    focusBorderColor = 'blue.500',
    ...rest
  },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <ChakraSelect
        name={inputName}
        id={inputName}
        focusBorderColor={focusBorderColor}
        errorBorderColor="red.500"
        bg="gray.800"
        border="none"
        size="lg"
        _placeholder={{ fontSize: 'sm' }}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraSelect>
      {!!error && (
        <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const SelectInput = forwardRef(SelectInputBase)
