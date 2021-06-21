import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  EditProfileContext,
  EditProfileContextData,
  EditProfileProvider
} from 'contexts/EditProfileContext'
import { render, screen } from 'utils/test-utils'

import { EditProfileForm } from 'components/Form/EditProfileForm'
import { Simulate } from 'react-dom/test-utils'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

describe('<EditProfileForm />', () => {
  const handleSubmit = jest.fn()

  beforeEach(() => {
    ;(useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit,
      setValue: jest.fn(),
      formState: { isSubmitting: false, errors: {} }
    })
  })

  it('should render inputs', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileProvider>
          <EditProfileForm />
        </EditProfileProvider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByPlaceholderText('https://theurlforyourimage.com.br')
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Fale um pouco sobre você')
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('John')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('something@example.com')
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('44998762314')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Rio do sul/SC')).toBeInTheDocument()
  })

  it('should render signin button', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileProvider>
          <EditProfileForm />
        </EditProfileProvider>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Atualizar')).toBeInTheDocument()
  })

  it('should render cancel button', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileProvider>
          <EditProfileForm />
        </EditProfileProvider>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Atualizar')).toBeInTheDocument()
  })

  it('should submit form', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileProvider>
          <EditProfileForm />
        </EditProfileProvider>
      </AuthContext.Provider>
    )

    const button = screen.getByText('Atualizar')

    Simulate.click(button)

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('should close form modal', () => {
    const onClose: () => void = jest.fn()
    const disclosure = { isOpen: true, onClose } as UseDisclosureReturn

    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileContext.Provider
          value={{ disclosure } as EditProfileContextData}
        >
          <EditProfileForm />
        </EditProfileContext.Provider>
      </AuthContext.Provider>
    )

    const button = screen.getByText('Cancelar')

    Simulate.click(button)

    expect(disclosure.onClose).toHaveBeenCalled()
  })

  // TODO testar fn onSubmit depois de implementar integração com backend
})
