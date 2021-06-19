import { Divider, Text } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'

type ProfileDescriptionProps = Pick<IUser, 'about'>

export function ProfileDescription({ about }: ProfileDescriptionProps) {
  return (
    <ProfileSectionContainer
      title="Descrição"
      bg="gray.800"
      p="3"
      borderRadius="md"
    >
      <Divider />
      <Text color="gray.500" align="justify">
        {about ? about : ''}
      </Text>
    </ProfileSectionContainer>
  )
}
