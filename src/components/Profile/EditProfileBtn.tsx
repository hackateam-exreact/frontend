import { Button } from 'components/Button'
import { FiEdit } from 'react-icons/fi'
import { IUser } from 'interfaces/user'
import { Icon } from '@chakra-ui/react'
import { useEditProfile } from 'hooks/useEditProfile'

interface EditProfileBtnProps {
  user: IUser
}

export function EditProfileBtn({ user }: EditProfileBtnProps) {
  const { handleEditUserProfile } = useEditProfile()

  return (
    <Button
      leftIcon={<Icon as={FiEdit} fontSize="24" />}
      onClick={() => handleEditUserProfile(user)}
      size="lg"
      fontFamily="Roboto"
    >
      Editar perfil
    </Button>
  )
}
