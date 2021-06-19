import {
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextAreaProps,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react'

import { FieldError } from 'react-hook-form'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

interface TextAreaProps extends ChakraTextAreaProps {
  inputName: string
  label?: string
  error?: FieldError
  focusBorderColor?: 'blue.500' | 'green.500'
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  { inputName, label, error = null, focusBorderColor = 'blue.500', ...rest },
  ref
) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <ChakraTextArea
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
        maxH="400px"
        {...rest}
      />
      {!!error && (
        <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const TextArea = forwardRef(TextAreaBase)
