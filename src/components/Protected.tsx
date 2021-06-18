import { ReactNode } from 'react'
import { useAuth } from 'hooks/useAuth'

interface ProtectedProps {
  children: ReactNode
}

export function Protected({ children }: ProtectedProps) {
  const { isAuthorized } = useAuth()

  return <>{isAuthorized && children}</>
}
