import { ReactNode, useEffect, useState } from 'react'

import { useAuth } from 'hooks/useAuth'

interface ProtectedProps {
  needsAuthentication?: boolean
  needsAuthorization?: boolean
  children: ReactNode
}

export function Protected({
  needsAuthentication = true,
  needsAuthorization = false,
  children
}: ProtectedProps) {
  const { isAuthenticated, isAuthorized } = useAuth()
  const [canShow, setCanShow] = useState(false)

  const handleCheckPermissions = () => {
    if (needsAuthentication && needsAuthorization) {
      if (isAuthenticated && isAuthorized) return true
    }

    if (needsAuthentication) {
      if (isAuthenticated) return true
    }

    if (needsAuthorization) {
      if (isAuthorized) return true
    }

    return false
  }

  useEffect(() => {
    setCanShow(handleCheckPermissions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isAuthorized])

  return <>{canShow && children}</>
}
