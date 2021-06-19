import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { CreateArticleForm } from 'components/Form/CreateArticleForm'
import { useAuth } from 'hooks/useAuth'
import { useCreateArticle } from 'hooks/useCreateArticle'

export function CreateArticleModal() {
  const { disclosure } = useCreateArticle()
  const { user } = useAuth()

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bg="black.500">
        <ModalHeader>Criando artigo de {user.first_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateArticleForm />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
