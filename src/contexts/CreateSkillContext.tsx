import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { createContext } from 'react'

interface CreateSkillContextData {
  disclosure: UseDisclosureReturn
  handleCreateSkill: () => void
}

interface CreateSkillProviderProps {
  children: ReactNode
}

export const CreateSkillContext = createContext({} as CreateSkillContextData)

export function CreateSkillProvider({ children }: CreateSkillProviderProps) {
  const disclosure = useDisclosure()

  const handleCreateSkill = () => {
    disclosure.onOpen()
  }

  return (
    <CreateSkillContext.Provider value={{ disclosure, handleCreateSkill }}>
      {children}
    </CreateSkillContext.Provider>
  )
}
