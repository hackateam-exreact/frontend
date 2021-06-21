import { UseDisclosureReturn, useDisclosure, useToast } from '@chakra-ui/react'

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
  const toast = useToast()

  const handleCreateArticle = async (values: CreateArticleParams) => {
    await api.post('/api/articles', values)
  }

  const handleDeleteArticle = async (articleId: string) => {
    try {
      await api.delete(`/api/articles/${articleId}`)
      toast({
        title: 'Artigo excluído',
        status: 'success',
        duration: 2000
      })
    } catch (error) {
      toast({
        title: 'Erro ao excluir artigo',
        status: 'error',
        duration: 2000
      })
    }
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
