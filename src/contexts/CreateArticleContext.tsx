import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { createContext } from 'react'

interface CreateArticleContextData {
  disclosure: UseDisclosureReturn
  handleCreateArticle: () => void
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

  const handleCreateArticle = () => {
    disclosure.onOpen()
  }

  return (
    <CreateArticleContext.Provider value={{ disclosure, handleCreateArticle }}>
      {children}
    </CreateArticleContext.Provider>
  )
}
