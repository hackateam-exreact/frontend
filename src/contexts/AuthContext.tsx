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
  handleSignUp: (data: Partial<IUser>) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(userTemplate)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  const handleSignUp = async (data: Partial<IUser>) => {
    console.log(data)
  }

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
