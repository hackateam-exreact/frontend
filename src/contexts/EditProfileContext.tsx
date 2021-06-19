import { ReactNode, createContext } from 'react'
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'
import { api } from 'services/api'

interface UpdateUserParams extends Partial<IUser> {
  description: string | null
  image_url: string | null
}

export interface EditProfileContextData {
  disclosure: UseDisclosureReturn
  handleEditUserProfile: () => void
  handleUpdateUserProfile: (values: UpdateUserParams) => Promise<IUser>
}

interface EditProfileProviderProps {
  children: ReactNode
}

export const EditProfileContext = createContext({} as EditProfileContextData)

export function EditProfileProvider({ children }: EditProfileProviderProps) {
  const disclosure = useDisclosure()

  const handleEditUserProfile = () => {
    disclosure.onOpen()
  }

  const handleUpdateUserProfile = async (values: UpdateUserParams) => {
    const { data } = await api.put('/api/users', values)

    const userData = {
      ...data.user,
      about: data.user.description,
      avatar: data.user.image_url
        ? data.user.image_url
        : '/img/fallback-avatar.png',
      name: `${data.user.first_name} ${data.user.last_name}`
    }

    return userData as IUser
  }

  return (
    <EditProfileContext.Provider
      value={{ disclosure, handleEditUserProfile, handleUpdateUserProfile }}
    >
      {children}
    </EditProfileContext.Provider>
  )
}
