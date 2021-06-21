import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { CreateCertificateForm } from 'components/Form/CreateCertificateForm'
import { useAuth } from 'hooks/useAuth'
import { useCreateCertificate } from 'hooks/useCreateCertificate'

export function CreateCertificateModal() {
  const { disclosure } = useCreateCertificate()
  const { user } = useAuth()

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bg="black.500">
        <ModalHeader>Criando certificado de {user.first_name}</ModalHeader>
        <ModalCloseButton data-testid="close" />
        <ModalBody>
          <CreateCertificateForm />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
