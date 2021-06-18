import { IArticle } from './article'
import { IProject } from './project'
import { ITech } from './tech'

export interface IUser {
  id: string
  avatar: string
  first_name: string
  last_name: string
  name: string
  email: string
  phone: string
  location: string
  contact: string
  status: 'Open' | 'Studying' | 'Employed'
  about: string
  articles: IArticle[]
  projects: IProject[]
  techs: ITech[]
  created_at: string
  updated_at: string
}
