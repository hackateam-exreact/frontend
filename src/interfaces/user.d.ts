import { IArticle } from './article'
import { IProject } from './project'

export interface IUser {
  id: string
  avatar: string
  first_name: string
  last_name: string
  email: string
  location: string
  contact: string
  status: 'Open' | 'Studying' | 'Employed'
  about: string
  articles: IArticle[]
  projects: IProject[]
  created_at: string
  updated_at: string
}
