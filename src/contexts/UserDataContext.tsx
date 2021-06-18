import { ReactNode, createContext, useState } from 'react'

import { IArticle } from 'interfaces/article'
import { IProject } from 'interfaces/project'
import { ITech } from 'interfaces/tech'

interface UserDataContextData {
  projects: IProject[]
  articles: IArticle[]
  techs: ITech[]
  handleUpdateUserData: (values: {
    projects: IProject[]
    articles: IArticle[]
    techs: ITech[]
  }) => void
}

interface UserDataProviderProps {
  children: ReactNode
}

export const UserDataContext = createContext({} as UserDataContextData)

export function UserDataProvider({ children }: UserDataProviderProps) {
  const [projects, setProjects] = useState<IProject[]>([])
  const [articles, setArticles] = useState<IArticle[]>([])
  const [techs, setTechs] = useState<ITech[]>([])

  const handleUpdateUserData = (values: {
    projects: IProject[]
    articles: IArticle[]
    techs: ITech[]
  }) => {
    setProjects(values.projects)
    setArticles(values.articles)
    setTechs(values.techs)
  }

  return (
    <UserDataContext.Provider
      value={{
        projects,
        articles,
        techs,
        handleUpdateUserData
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}
