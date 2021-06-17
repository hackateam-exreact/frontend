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
  created_at: string
  updated_at: string
}
