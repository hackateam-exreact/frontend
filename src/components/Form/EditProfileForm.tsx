import { Button as ChakraButton, HStack, VStack } from '@chakra-ui/react'

import { Button } from 'components/Button'
import { IUser } from 'interfaces/user'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { editProfileSchema } from 'utils/yupSchemas'
import { useAuth } from 'hooks/useAuth'
import { useEditProfile } from 'hooks/useEditProfile'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type EditProfileParams = Pick<
  IUser,
  'about' | 'name' | 'email' | 'contact' | 'location'
>

export function EditProfileForm() {
  const { disclosure } = useEditProfile()
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(editProfileSchema)
  })

  useEffect(() => {
    setValue('about', user.about)
    setValue('name', user.name)
    setValue('email', user.email)
    setValue('contact', user.contact)
    setValue('location', user.location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (values: EditProfileParams) => {
    console.log(values)
  }

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="10">
      <VStack align="flex-start" spacing="5" w="100%">
        <TextArea
          inputName="about"
          error={errors.about}
          label="Sobre"
          h="52"
          placeholder="Fale um pouco sobre você"
          {...register('about')}
        />
        <TextInput
          inputName="name"
          error={errors.name}
          label="Nome"
          placeholder="John Doe"
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
          inputName="contact"
          error={errors.contact}
          label="Telefone (DDD + Número)"
          type="number"
          placeholder="44998762314"
          {...register('contact')}
        />
        <TextInput
          inputName="location"
          error={errors.location}
          label="Localização"
          placeholder="Rio do sul/SC"
          {...register('location')}
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
