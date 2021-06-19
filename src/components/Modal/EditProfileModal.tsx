import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { EditProfileForm } from 'components/Form/EditProfileForm'
import { useAuth } from 'hooks/useAuth'
import { useEditProfile } from 'hooks/useEditProfile'

export function EditProfileModal() {
  const { disclosure } = useEditProfile()
  const { user } = useAuth()

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bg="black.500">
        <ModalHeader>Editando perfil de {user.first_name}</ModalHeader>
        <ModalCloseButton data-testid="close" />
        <ModalBody>
          <EditProfileForm />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
