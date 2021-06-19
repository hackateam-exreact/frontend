import { CreateProjectContext } from 'contexts/CreateProjectContext'
import { useContext } from 'react'

export const useCreateProject = () => useContext(CreateProjectContext)
