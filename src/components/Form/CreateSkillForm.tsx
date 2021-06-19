import { Button as ChakraButton, HStack, Icon, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { GiSkills } from 'react-icons/gi'
import React from 'react'
import { SelectInput } from 'components/SelectInput'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import colors from 'theme/foundations/colors'
import { createSkillSchema } from 'utils/yupSchemas'
import { useCreateSkill } from 'hooks/useCreateSkill'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateSkillData {
  skill: string
  experience: number
  description: string
}

export function CreateSkillForm() {
  const { disclosure } = useCreateSkill()
  const optionBg = colors.gray[800]

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({ resolver: yupResolver(createSkillSchema) })

  const onSubmit = (values: CreateSkillData) => {
    console.log(values)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <HStack w="100%" spacing="10">
          <SelectInput
            inputName="skill"
            error={errors.skill}
            label="Habilidade"
            placeholder="Escolha uma habilidade"
            icon={<Icon as={GiSkills} />}
            {...register('skill')}
          >
            {/* // TODO fetch options from backend and map them */}
            <option value="react" style={{ backgroundColor: optionBg }}>
              React
            </option>
          </SelectInput>
          <TextInput
            inputName="experience"
            error={errors.experience}
            label="Tempo de experiência"
            placeholder="5"
            rightIcon="ano(s)"
            {...register('experience')}
          />
        </HStack>
        <TextArea
          inputName="description"
          error={errors.description}
          label="Descrição"
          h="52"
          placeholder="Trabalhei com esta tecnologia ou ferramenta de tal forma..."
          {...register('description')}
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
