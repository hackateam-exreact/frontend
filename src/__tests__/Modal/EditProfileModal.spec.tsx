import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  EditProfileContext,
  EditProfileContextData
} from 'contexts/EditProfileContext'
import { fireEvent, render, screen } from 'utils/test-utils'

import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate
const onClose: () => void = jest.fn()
const disclosure = { isOpen: true, onClose } as UseDisclosureReturn

describe('<EditProfileModal />', () => {
  it('should render modal header', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileContext.Provider
          value={{ disclosure } as EditProfileContextData}
        >
          <EditProfileModal />
        </EditProfileContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByText(`Editando perfil de ${user.first_name}`)
    ).toBeInTheDocument()
  })

  it('should render modal body', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileContext.Provider
          value={
            {
              disclosure
            } as EditProfileContextData
          }
        >
          <EditProfileModal />
        </EditProfileContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByPlaceholderText('https://theurlforyourimage.com.br')
    ).toBeInTheDocument()
  })

  it('should close modal when x button is clicked', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileContext.Provider
          value={
            {
              disclosure
            } as EditProfileContextData
          }
        >
          <EditProfileModal />
        </EditProfileContext.Provider>
      </AuthContext.Provider>
    )

    const button = screen.getByTestId('close')

    fireEvent.click(button)

    expect(disclosure.onClose).toHaveBeenCalled()
  })
})
