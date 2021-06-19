import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { CreateSkillForm } from 'components/Form/CreateSkillForm'
import { useAuth } from 'hooks/useAuth'
import { useCreateSkill } from 'hooks/useCreateSkill'

export function CreateSkillModal() {
  const { disclosure } = useCreateSkill()
  const { user } = useAuth()

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bg="black.500">
        <ModalHeader>Criando artigo de {user.first_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateSkillForm />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
