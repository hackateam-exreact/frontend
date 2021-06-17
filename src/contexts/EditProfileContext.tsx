import { Dispatch, SetStateAction } from 'react'
import { ReactNode, createContext, useState } from 'react'
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { IUser } from 'interfaces/user'

interface EditProfileContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  disclosure: UseDisclosureReturn
  handleEditUserProfile: (user: IUser) => void
}

interface EditProfileProviderProps {
  children: ReactNode
}

export const EditProfileContext = createContext({} as EditProfileContextData)

export function EditProfileProvider({ children }: EditProfileProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)

  const disclosure = useDisclosure()

  const handleEditUserProfile = (user: IUser) => {
    setUser(user)

    disclosure.onOpen()
  }

  return (
    <EditProfileContext.Provider
      value={{ user, setUser, disclosure, handleEditUserProfile }}
    >
      {children}
    </EditProfileContext.Provider>
  )
}
