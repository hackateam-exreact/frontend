import { Button as ChakraButton, HStack, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { IUser } from 'interfaces/user'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { editProfileSchema } from 'utils/yupSchemas'
import { useEditProfile } from 'hooks/useEditProfile'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type EditProfileData = Partial<IUser>

interface EditProfileFormProps {
  initialValues: EditProfileData
}

export function EditProfileForm({ initialValues }: EditProfileFormProps) {
  const { disclosure } = useEditProfile()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(editProfileSchema)
  })

  useEffect(() => {
    setValue('about', initialValues.about)
    setValue('name', initialValues.name)
    setValue('email', initialValues.email)
    setValue('phone', initialValues.phone)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (values: EditProfileData) => {
    console.log(values)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextArea
          inputName="about"
          error={errors.about}
          label="Sobre"
          maxH="48"
          placeholder="Fale um pouco sobre você"
          {...register('about')}
        />
        <TextInput
          inputName="name"
          error={errors.name}
          label="Nome"
          placeholder="coolname"
          {...register('name')}
        />
        <TextInput
          inputName="email"
          error={errors.email}
          label="Email"
          placeholder="something@example.com"
          {...register('email')}
        />
        <TextInput
          inputName="phone"
          error={errors.phone}
          label="Telefone"
          placeholder="(99) 99999-9999"
          {...register('phone')}
        />
      </VStack>
      <HStack justify="flex-end" spacing="5" w="100%">
        <Button type="submit" size="lg" isLoading={isSubmitting}>
          Atualizar
        </Button>
        <ChakraButton variant="ghost" size="lg" onClick={disclosure.onClose}>
          Cancelar
        </ChakraButton>
      </HStack>
    </VStack>
  )
}
