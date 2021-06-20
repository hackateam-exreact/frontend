import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { api } from 'services/api'
import { createContext } from 'react'

interface CreateArticleParams {
  title: string
  url: string
}

export interface CreateArticleContextData {
  disclosure: UseDisclosureReturn
  handleCreateArticle: (values: CreateArticleParams) => Promise<void>
  handleDeleteArticle: (articleId: string) => Promise<void>
}

interface CreateArticleProviderProps {
  children: ReactNode
}

export const CreateArticleContext = createContext(
  {} as CreateArticleContextData
)

export function CreateArticleProvider({
  children
}: CreateArticleProviderProps) {
  const disclosure = useDisclosure()

  const handleCreateArticle = async (values: CreateArticleParams) => {
    await api.post('/api/articles', values)
  }

  const handleDeleteArticle = async (articleId: string) => {
    await api.delete(`/api/articles/${articleId}`)
  }

  return (
    <CreateArticleContext.Provider
      value={{
        disclosure,
        handleCreateArticle,
        handleDeleteArticle
      }}
    >
      {children}
    </CreateArticleContext.Provider>
  )
}
