export interface IUser {
  id: string
  first_name: string
  last_name: string
  email: string
  location?: string | null
  contact?: string | null
  status?: 'Open' | 'Studying' | 'Employed' | null
  name: string | null
  avatar?: string | null
}
