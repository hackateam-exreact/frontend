import {
  Button as ChakraButton,
  HStack,
  Icon,
  VStack,
  useToast
} from '@chakra-ui/react'
import { FiCheck, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

import { BsPerson } from 'react-icons/bs'
import { Button } from 'components/Button'
import { IUser } from 'interfaces/user'
import { SelectInput } from 'components/SelectInput'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import colors from 'theme/foundations/colors'
import { editProfileSchema } from 'utils/yupSchemas'
import { useAuth } from 'hooks/useAuth'
import { useEditProfile } from 'hooks/useEditProfile'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type EditProfileParams = Pick<
  IUser,
  | 'avatar'
  | 'about'
  | 'first_name'
  | 'last_name'
  | 'email'
  | 'status'
  | 'contact'
  | 'location'
>

export function EditProfileForm() {
  const { disclosure, handleUpdateUserProfile } = useEditProfile()
  const { user, handleUpdateUserData } = useAuth()
  const toast = useToast()
  const optionBg = colors.gray[800]

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm({
    resolver: yupResolver(editProfileSchema)
  })

  useEffect(() => {
    setValue('avatar', user.avatar)
    setValue('about', user.about)
    setValue('first_name', user.first_name)
    setValue('last_name', user.last_name)
    setValue('email', user.email)
    setValue('status', user.status)
    setValue('contact', user.contact)
    setValue('location', user.location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (values: EditProfileParams) => {
    try {
      const updatedValues = {
        ...values,
        description: values.about,
        image_url: values.avatar
      }

      const userData = await handleUpdateUserProfile(updatedValues)

      handleUpdateUserData(userData)

      toast({
        title: 'Dados atualizados',
        description: 'Dados atualizados com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    } catch (error) {
      toast({
        title: 'Erro ao atualizar',
        description: 'Ocorreu um erro ao atualizar as informações',
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
          inputName="avatar"
          error={errors.avatar}
          label="Avatar"
          placeholder="https://theurlforyourimage.com.br"
          leftIcon={<Icon as={BsPerson} />}
          {...register('avatar')}
        />
        <TextArea
          inputName="about"
          error={errors.about}
          label="Sobre"
          h="52"
          placeholder="Fale um pouco sobre você"
          {...register('about')}
        />
        <HStack w="100%" spacing="10">
          <TextInput
            inputName="first_name"
            error={errors.first_name}
            label="Nome"
            placeholder="John"
            leftIcon={<Icon as={BsPerson} />}
            {...register('first_name')}
          />
          <TextInput
            inputName="last_name"
            error={errors.last_name}
            label="Sobrenome"
            placeholder="Doe"
            leftIcon={<Icon as={BsPerson} />}
            {...register('last_name')}
          />
        </HStack>
        <HStack w="100%" spacing="10">
          <TextInput
            inputName="email"
            error={errors.email}
            label="Email"
            placeholder="something@example.com"
            leftIcon={<Icon as={FiMail} />}
            {...register('email')}
          />
          <SelectInput
            inputName="status"
            error={errors.status}
            label="Status"
            placeholder="Selecione um status"
            icon={<Icon as={FiCheck} />}
            {...register('status')}
          >
            <option value="Open" style={{ backgroundColor: optionBg }}>
              Open
            </option>
            <option value="Studying" style={{ backgroundColor: optionBg }}>
              Studying
            </option>
            <option value="Employed" style={{ backgroundColor: optionBg }}>
              Employed
            </option>
          </SelectInput>
        </HStack>
        <TextInput
          inputName="contact"
          error={errors.contact}
          label="Telefone (DDD + Número)"
          type="number"
          placeholder="44998762314"
          leftIcon={<Icon as={FiPhone} />}
          {...register('contact')}
        />
        <TextInput
          inputName="location"
          error={errors.location}
          label="Localização"
          placeholder="Rio do sul/SC"
          leftIcon={<Icon as={FiMapPin} />}
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
