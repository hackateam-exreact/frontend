import { Flex, Stack, StackProps } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface ProfileSectionItemContainerProps extends StackProps {
  mode?: 'flex' | 'stack'
  children: ReactNode
}

export function ProfileSectionItemContainer({
  mode = 'stack',
  children,
  ...rest
}: ProfileSectionItemContainerProps) {
  return (
    <>
      {mode === 'stack' ? (
        <Stack
          align="flex-start"
          p="3"
          bg="gray.800"
          borderRadius="md"
          w="100%"
          {...rest}
        >
          {children}
        </Stack>
      ) : (
        <Flex
          align="flex-start"
          p="3"
          bg="gray.800"
          borderRadius="md"
          w="100%"
          {...rest}
        >
          {children}
        </Flex>
      )}
    </>
  )
}
