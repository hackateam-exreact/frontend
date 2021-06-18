export interface IUser {
  id: string
  email: string
  password: string
  first_name: string
  last_name: string
  location?: string
  contact?: string
  status?: 'Open' | 'Studying' | 'Employed'
  name: string
  avatar?: string
}
