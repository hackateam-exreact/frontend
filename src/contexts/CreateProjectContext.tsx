import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { createContext } from 'react'

export interface CreateProjectContextData {
  disclosure: UseDisclosureReturn
  handleCreateProject: () => void
}

interface CreateProjectProviderProps {
  children: ReactNode
}

export const CreateProjectContext = createContext(
  {} as CreateProjectContextData
)

export function CreateProjectProvider({
  children
}: CreateProjectProviderProps) {
  const disclosure = useDisclosure()

  const handleCreateProject = () => {
    disclosure.onOpen()
  }

  return (
    <CreateProjectContext.Provider value={{ disclosure, handleCreateProject }}>
      {children}
    </CreateProjectContext.Provider>
  )
}
