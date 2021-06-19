import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'
import Router, { useRouter } from 'next/router'

import { IUser } from 'interfaces/user'
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

export interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  isAuthenticated: boolean
  isAuthorized: boolean
  handleSignUp: (values: SignUpParams) => Promise<void>
  handleSignIn: (values: SignInParams) => Promise<void>
  tmpSignInValues: SignInParams
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const { asPath } = useRouter()

  const [user, setUser] = useState<IUser>({} as IUser)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [tmpSignInValues, setTmpSignInValues] = useState<SignInParams>(
    {} as SignInParams
  )

  const handleSignUp = async (values: SignUpParams) => {
    const { data } = await api.post('/api/users', values)

    handleUpdateUserInfo({
      ...data.user,
      name: `${data.user.first_name} ${data.user.last_name}`
    })

    setTmpSignInValues({ email: values.email, password: values.password })

    Router.push('/dev/welcome')
  }

  const handleSignIn = async (values: SignInParams) => {
    const { data } = await api.post('/api/users/sign_in', values)

    handleUpdateUserInfo(data.user)

    setTmpSignInValues({} as SignInParams)

    updateAuthCookies(data.token)

    Router.push('/')
  }

  const handleUpdateUserInfo = (values: { user: IUser }) => {
    setUser(values.user)
  }

  useEffect(() => {
    setIsAuthenticated(!!user)

    const length = asPath.split('/').length

    setIsAuthorized(asPath.split('/')[length - 1] === user.id)
  }, [user, asPath])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        isAuthorized,
        handleSignUp,
        handleSignIn,
        tmpSignInValues
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
