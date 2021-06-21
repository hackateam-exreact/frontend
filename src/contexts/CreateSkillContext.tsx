import { ReactNode, useState } from 'react'
import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { api } from 'services/api'
import { createContext } from 'react'
import { useEffect } from 'react'

interface CreateSkillParams {
  skill_id: string
  abstract: string
}
interface ISkill {
  id: string
  name: string
}

export interface CreateSkillContextData {
  disclosure: UseDisclosureReturn
  handleCreateSkill: (values: CreateSkillParams) => Promise<void>
  listOfSkills: ISkill[]
}

interface CreateSkillProviderProps {
  children: ReactNode
}

export const CreateSkillContext = createContext({} as CreateSkillContextData)

export function CreateSkillProvider({ children }: CreateSkillProviderProps) {
  const disclosure = useDisclosure()
  const [listOfSkills, setListOfSkills] = useState<ISkill[]>([])

  const handleCreateSkill = async (values: CreateSkillParams) => {
    console.log(values)

    await api.post('/api/skills', values)
  }

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('/api/skills')

      setListOfSkills(
        data.skills.map((skill: ISkill) => ({
          id: skill.id,
          name: skill.name
        }))
      )
    })()
  }, [])

  return (
    <CreateSkillContext.Provider
      value={{ disclosure, handleCreateSkill, listOfSkills }}
    >
      {children}
    </CreateSkillContext.Provider>
  )
}
