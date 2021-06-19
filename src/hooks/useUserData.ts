import { UserDataContext } from 'contexts/UserDataContext'
import { useContext } from 'react'

export const useUserData = () => useContext(UserDataContext)
