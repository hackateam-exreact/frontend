import { Button as ChakraButton, HStack, Icon, VStack } from '@chakra-ui/react'

import { BiGitBranch } from 'react-icons/bi'
import { Button } from 'components/Button'
import { MdTitle } from 'react-icons/md'
import React from 'react'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { createProjectSchema } from 'utils/yupSchemas'
import { useCreateProject } from 'hooks/useCreateProject'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateProjectData {
  title: string
  description: string
  repositories: string
}

export function CreateProjectForm() {
  const { disclosure } = useCreateProject()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({ resolver: yupResolver(createProjectSchema) })

  const onSubmit = (values: CreateProjectData) => {
    console.log(values)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextInput
          inputName="title"
          error={errors.title}
          label="Título"
          placeholder="Meu projeto"
          leftIcon={<Icon as={MdTitle} />}
          {...register('title')}
        />
        <TextArea
          inputName="description"
          error={errors.description}
          label="Descrição"
          h="52"
          placeholder="Fale um pouco sobre você"
          {...register('description')}
        />
        <TextInput
          inputName="repositories"
          error={errors.repositories}
          label="Repositórios (separados por ,)"
          placeholder="https://frontend.com,https://backend.com..."
          leftIcon={<Icon as={BiGitBranch} />}
          {...register('repositories')}
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
