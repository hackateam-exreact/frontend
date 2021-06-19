import { Button as ChakraButton, HStack, Icon, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { FiLink } from 'react-icons/fi'
import { MdTitle } from 'react-icons/md'
import React from 'react'
import { TextInput } from 'components/TextInput'
import { createArticleSchema } from 'utils/yupSchemas'
import { useCreateArticle } from 'hooks/useCreateArticle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateArticleData {
  link: string
  title: string
}

export function CreateArticleForm() {
  const { disclosure } = useCreateArticle()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({ resolver: yupResolver(createArticleSchema) })

  const onSubmit = (values: CreateArticleData) => {
    console.log(values)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextInput
          inputName="link"
          error={errors.link}
          label="Link do artigo"
          placeholder="https://theurlforyourarticle.com.br"
          leftIcon={<Icon as={FiLink} />}
          {...register('link')}
        />
        <TextInput
          inputName="title"
          error={errors.title}
          label="Título do artigo"
          placeholder="Meu artigo"
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
