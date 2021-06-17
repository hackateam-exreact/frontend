import { Heading, Stack, StackProps } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface ProfileSectionContainerProps extends StackProps {
  title: string
  children: ReactNode
}

export function ProfileSectionContainer({
  title,
  children,
  ...rest
}: ProfileSectionContainerProps) {
  return (
    <Stack align="flex-start" spacing="5" w="100%" {...rest}>
      <Heading as="h3">{title}</Heading>
      {children}
    </Stack>
  )
}
