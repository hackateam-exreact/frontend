import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { CreateProjectForm } from 'components/Form/CreateProjectForm'
import { useAuth } from 'hooks/useAuth'
import { useCreateProject } from 'hooks/useCreateProject'

export function CreateProjectModal() {
  const { disclosure } = useCreateProject()
  const { user } = useAuth()

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bg="black.500">
        <ModalHeader>Criando projeto de {user.first_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateProjectForm />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
