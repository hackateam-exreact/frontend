import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

import { IUser } from 'interfaces/user'
import { userTemplate } from 'utils/userTemplate'

interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(userTemplate)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
