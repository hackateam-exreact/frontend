import { Text, TextProps } from '@chakra-ui/react'

interface ProfileSectionItemHeadingProps extends TextProps {
  children: string
}

export function ProfileSectionItemHeading({
  children,
  ...rest
}: ProfileSectionItemHeadingProps) {
  return (
    <Text fontWeight="bold" fontSize="lg" {...rest}>
      {children}
    </Text>
  )
}
