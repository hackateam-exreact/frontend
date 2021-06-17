import { Divider, Text } from '@chakra-ui/react'

import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

interface ProfileDescriptionProps {
  description: string
}

export function ProfileDescription({ description }: ProfileDescriptionProps) {
  return (
    <ProfileSectionContainer
      title="Descrição"
      bg="gray.800"
      p="3"
      borderRadius="md"
    >
      <Divider />
      <Text color="gray.500" align="justify">
        {description}
      </Text>
    </ProfileSectionContainer>
  )
}
