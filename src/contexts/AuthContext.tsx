import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'

import { IUser } from 'interfaces/user'
import { userTemplate } from 'utils/userTemplate'

interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  isAuthenticated: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(userTemplate)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
