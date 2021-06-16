import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { useEditProfile } from 'hooks/useEditProfile'

export function EditProfileModal() {
  const { disclosure, user } = useEditProfile()
  const { isOpen, onClose } = disclosure

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editando perfil de {user.first_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
