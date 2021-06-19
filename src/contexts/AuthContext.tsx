import { ReactNode, createContext, useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

import { IUser } from 'interfaces/user'
import { api } from 'services/api'
import { destroyAuthCookies } from 'utils/destroyAuthCookies'
import { parseCookies } from 'nookies'
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
  isAuthenticated: boolean
  isAuthorized: boolean
  handleSignUp: (values: SignUpParams) => Promise<void>
  handleSignIn: (values: SignInParams) => Promise<void>
  handleSignOut: () => void
  handleUpdateUserData: (userData: IUser) => void
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

  const handleSignUp = async (values: SignUpParams) => {
    const { data } = await api.post('/api/users', values)

    const userData = {
      ...data.user,
      about: data.user.description,
      avatar: data.user.image_url
        ? data.user.image_url
        : '/img/fallback-avatar.png',
      name: `${data.user.first_name} ${data.user.last_name}`
    }

    handleUpdateUserData(userData)

    updateAuthCookies(data.token)

    Router.push('/dev/welcome')
  }

  const handleSignIn = async (values: SignInParams) => {
    const { data } = await api.post('/api/users/sign_in', values)

    const userData = {
      ...data.user,
      about: data.user.description,
      avatar: data.user.image_url
        ? data.user.image_url
        : '/img/fallback-avatar.png',
      name: `${data.user.first_name} ${data.user.last_name}`
    }

    handleUpdateUserData(userData)

    updateAuthCookies(data.token)

    Router.push('/')
  }

  const handleSignOut = () => {
    destroyAuthCookies()

    localStorage.removeItem('devspot.user')

    Router.reload()
  }

  const handleUpdateUserData = (userData: IUser) => {
    setUser(userData)
    localStorage.setItem('devspot.user', JSON.stringify(userData))
  }

  useEffect(() => {
    setIsAuthenticated(!!user)

    const length = asPath.split('/').length

    setIsAuthorized(asPath.split('/')[length - 1] === user.id)
  }, [user, asPath])

  useEffect(() => {
    ;(async () => {
      const cookies = parseCookies(undefined)

      if (!cookies['devspot.token']) {
        localStorage.removeItem('devspot.user')
      }

      const local = localStorage.getItem('devspot.user')
      if (local) handleUpdateUserData(JSON.parse(local))

      api.defaults.headers = {
        Authorization: `Bearer ${cookies['devspot.token']}`
      }
    })()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAuthorized,
        handleSignUp,
        handleSignIn,
        handleSignOut,
        handleUpdateUserData
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
