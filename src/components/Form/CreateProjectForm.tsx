import {
  Button as ChakraButton,
  HStack,
  Icon,
  IconButton,
  VStack,
  useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'

import { BiGitBranch } from 'react-icons/bi'
import { Button } from 'components/Button'
import { FiPlus } from 'react-icons/fi'
import { MdTitle } from 'react-icons/md'
import { TextInput } from 'components/TextInput'
import { useCreateProject } from 'hooks/useCreateProject'

export function CreateProjectForm() {
  const [repositoryList, setRepositoryList] = useState([
    { repoTitle: '', url: '' }
  ])
  const [title, setTitle] = useState('')
  const { disclosure, handleCreateProject } = useCreateProject()
  const toast = useToast()

  const handleInputChange = (e, index: number) => {
    const { name, value } = e.target
    const list = [...repositoryList]
    list[index][name] = value
    setRepositoryList(list)
  }

  const handleAddInput = () => {
    setRepositoryList([...repositoryList, { repoTitle: '', url: '' }])
  }

  const onSubmit = async () => {
    try {
      const formattedValues = {
        name: title,
        github_projects: repositoryList.map((repo) => ({
          name: repo.repoTitle,
          url: repo.url
        }))
      }

      await handleCreateProject(formattedValues)

      toast({
        title: 'Projeto criado',
        status: 'success',
        duration: 2000
      })
    } catch (error) {
      toast({
        title: 'Erro ao criar projeto',
        status: 'error',
        duration: 2000
      })
    }
  }

  return (
    <VStack spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextInput
          inputName="title"
          label="Título"
          placeholder="Meu projeto"
          leftIcon={<Icon as={MdTitle} />}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconButton
          aria-label="Adicionar repo"
          icon={<Icon as={FiPlus} />}
          onClick={handleAddInput}
        />
        {repositoryList.map((x, i) => (
          <HStack key={i} spacing="5">
            <TextInput
              inputName="repoTitle"
              label="Nome"
              placeholder="Meu repo"
              leftIcon={<Icon as={MdTitle} />}
              value={x.repoTitle}
              onChange={(e) => handleInputChange(e, i)}
            />
            <TextInput
              inputName="url"
              label="Url"
              placeholder="https://meurepourl.com"
              leftIcon={<Icon as={BiGitBranch} />}
              value={x.url}
              onChange={(e) => handleInputChange(e, i)}
            />
          </HStack>
        ))}
      </VStack>
      <HStack justify="flex-end" spacing="5" w="100%">
        <Button size="lg" onClick={onSubmit}>
          Adicionar
        </Button>
        <ChakraButton variant="ghost" size="lg" onClick={disclosure.onClose}>
          Cancelar
        </ChakraButton>
      </HStack>
    </VStack>
  )
}
