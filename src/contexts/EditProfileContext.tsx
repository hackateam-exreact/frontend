import { ReactNode, createContext } from 'react'
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'

interface EditProfileContextData {
  disclosure: UseDisclosureReturn
  handleEditUserProfile: (user: IUser) => void
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

  return (
    <EditProfileContext.Provider value={{ disclosure, handleEditUserProfile }}>
      {children}
    </EditProfileContext.Provider>
  )
}
