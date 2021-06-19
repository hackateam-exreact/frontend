export interface IUser {
  id: string
  avatar?: string
  first_name: string
  last_name: string
  email: string
  location: string | null
  contact: string | null
  status: 'Open' | 'Studying' | 'Employed' | null
  about: string | null
  name: string
}
