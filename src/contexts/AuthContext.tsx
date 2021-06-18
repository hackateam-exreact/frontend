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

interface SignInParams {
  email: string
  password: string
}

interface SignUpParams {
  first_name: string
  last_name: string
  email: string
  password: string
}

interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  isAuthenticated: boolean
  handleSignUp: (values: SignUpParams) => Promise<void>
  handleSignIn: (values: SignInParams) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  const handleSignUp = async (values: SignUpParams) => {
    const { data: userData } = await api.post('/api/users', values)

    setUser({
      ...userData.user,
      name: `${userData.user.first_name} ${userData.user.last_name}`,
      avatar: '/img/chakra-logo.png'
    })

    await handleSignIn({ email: values.email, password: values.password })
  }

  const handleSignIn = async (values: SignInParams) => {
    const { data } = await api.post('/api/users/sign_in', values)

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
