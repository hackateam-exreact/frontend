import {
  Button as ChakraButton,
  HStack,
  Icon,
  VStack,
  useToast
} from '@chakra-ui/react'

import { Button } from 'components/Button'
import { GiSkills } from 'react-icons/gi'
import { SelectInput } from 'components/SelectInput'
import { TextArea } from 'components/TextArea'
import colors from 'theme/foundations/colors'
import { createSkillSchema } from 'utils/yupSchemas'
import { useCreateSkill } from 'hooks/useCreateSkill'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateSkillData {
  skill_id: string
  abstract: string
}

export function CreateSkillForm() {
  const { disclosure, listOfSkills, handleCreateSkill } = useCreateSkill()
  const optionBg = colors.gray[800]
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({ resolver: yupResolver(createSkillSchema) })

  const onSubmit = async (values: CreateSkillData) => {
    try {
      await handleCreateSkill(values)
    } catch (error) {
      toast({
        title: 'Erro ao criar skill',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <SelectInput
          inputName="skill_id"
          error={errors.skill_id}
          label="Habilidade"
          placeholder="Escolha uma habilidade"
          icon={<Icon as={GiSkills} />}
          {...register('skill_id')}
        >
          {listOfSkills.map(
            (skill) =>
              skill.name !== 'REST' && (
                <option
                  key={skill.id}
                  value={skill.id}
                  style={{ backgroundColor: optionBg }}
                >
                  {skill.name}
                </option>
              )
          )}
        </SelectInput>
        <TextArea
          inputName="abstract"
          error={errors.abstract}
          label="Descrição"
          h="52"
          placeholder="Trabalhei com esta tecnologia ou ferramenta de tal forma..."
          {...register('abstract')}
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
