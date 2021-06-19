import { ReactNode, createContext } from 'react'
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

interface EditProfileContextData {
  disclosure: UseDisclosureReturn
  handleEditUserProfile: () => void
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
