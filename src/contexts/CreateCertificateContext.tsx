import { UseDisclosureReturn, useDisclosure, useToast } from '@chakra-ui/react'

import { ReactNode } from 'react'
import { api } from 'services/api'
import { createContext } from 'react'

interface CreateCertificateParams {
  title: string
  url: string
}

export interface CreateCertificateContextData {
  disclosure: UseDisclosureReturn
  handleCreateCertificate: (values: CreateCertificateParams) => Promise<void>
  handleDeleteCertificate: (certificateId: string) => Promise<void>
}

interface CreateCertificateProviderProps {
  children: ReactNode
}

export const CreateCertificateContext = createContext(
  {} as CreateCertificateContextData
)

export function CreateCertificateProvider({
  children
}: CreateCertificateProviderProps) {
  const disclosure = useDisclosure()
  const toast = useToast()

  const handleCreateCertificate = async (values: CreateCertificateParams) => {
    await api.post('/api/certificates', values)
  }

  const handleDeleteCertificate = async (certificateId: string) => {
    try {
      await api.delete(`/api/certificates/${certificateId}`)
      toast({
        title: 'Certificado excluído',
        status: 'success',
        duration: 2000
      })
    } catch (error) {
      toast({
        title: 'Erro ao excluir certificado',
        status: 'error',
        duration: 2000
      })
    }
  }

  return (
    <CreateCertificateContext.Provider
      value={{
        disclosure,
        handleCreateCertificate,
        handleDeleteCertificate
      }}
    >
      {children}
    </CreateCertificateContext.Provider>
  )
}
