import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'

import { IUser } from 'interfaces/user'
import Router from 'next/router'
import { api } from 'services/api'
import { updateAuthCookies } from 'utils/updateAuthCookies'
import { userTemplate } from 'utils/userTemplate'

interface SignInParams {
  email: string
  password: string
}

interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  isAuthenticated: boolean
  handleSignUp: (values: Partial<IUser>) => Promise<void>
  handleSignIn: (values: SignInParams) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>(userTemplate)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  const handleSignUp = async (values: Partial<IUser>) => {
    const { data } = await api.post('/api/users', values)

    setUser({
      ...data.user,
      name: `${data.user.first_name} ${data.user.last_name}`,
      avatar: '/img/chakra-logo.png',
      password: values.password
    })
  }

  const handleSignIn = async (values: SignInParams) => {
    const { data } = await api.post('/api/users/sign_in', values)

    user.password = ''

    updateAuthCookies(data.token)

    Router.push('/')
  }

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, handleSignUp, handleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  )
}
