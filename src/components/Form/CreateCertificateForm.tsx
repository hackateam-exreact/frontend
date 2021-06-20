import {
  Button as ChakraButton,
  HStack,
  Icon,
  VStack,
  useToast
} from '@chakra-ui/react'

import { Button } from 'components/Button'
import { FiLink } from 'react-icons/fi'
import { MdTitle } from 'react-icons/md'
import React from 'react'
import { TextInput } from 'components/TextInput'
import { createCertificateSchema } from 'utils/yupSchemas'
import { useCreateCertificate } from 'hooks/useCreateCertificate'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateCertificateData {
  title: string
  url: string
}

export function CreateCertificateForm() {
  const { disclosure, handleCreateCertificate } = useCreateCertificate()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({ resolver: yupResolver(createCertificateSchema) })

  const onSubmit = async (values: CreateCertificateData) => {
    try {
      await handleCreateCertificate(values)
      toast({
        title: 'Certificado cadastrado',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } catch (error) {
      console.log(error.response)
      toast({
        title: 'Erro ao cadastrar',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextInput
          inputName="url"
          error={errors.url}
          label="Link do certificado"
          placeholder="https://theurlforyourcertificate.com.br"
          leftIcon={<Icon as={FiLink} />}
          {...register('url')}
        />
        <TextInput
          inputName="title"
          error={errors.title}
          label="Título"
          placeholder="Meu certificado"
          leftIcon={<Icon as={MdTitle} />}
          {...register('title')}
        />
      </VStack>
      <HStack justify="flex-end" spacing="5" w="100%">
        <Button type="submit" size="lg" isLoading={isSubmitting}>
          Adicionar
        </Button>
        <ChakraButton variant="ghost" size="lg" onClick={disclosure.onClose}>
          Cancelar
        </ChakraButton>
      </HStack>
    </VStack>
  )
}
