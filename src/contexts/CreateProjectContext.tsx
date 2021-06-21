import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { api } from 'services/api'
import { createContext } from 'react'

interface CreateProjectParams {
  name: string
  github_projects: {
    name: string
    url: string
  }[]
}

export interface CreateProjectContextData {
  disclosure: UseDisclosureReturn
  handleCreateProject: (values: CreateProjectParams) => Promise<void>
  handleDeleteProject: (projectId: string) => Promise<void>
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

  const handleCreateProject = async (values: CreateProjectParams) => {
    await api.post('/api/projects', values)
  }

  const handleDeleteProject = async (projectId: string) => {
    await api.delete(`/api/projects/${projectId}`)
  }

  return (
    <CreateProjectContext.Provider
      value={{ disclosure, handleCreateProject, handleDeleteProject }}
    >
      {children}
    </CreateProjectContext.Provider>
  )
}
