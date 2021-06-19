import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  CreateProjectContext,
  CreateProjectContextData
} from 'contexts/CreateProjectContext'
import { fireEvent, render, screen } from 'utils/test-utils'

import { CreateProjectModal } from 'components/Modal/CreateProjectModal'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate
const onClose: () => void = jest.fn()
const disclosure = { isOpen: true, onClose } as UseDisclosureReturn

describe('<CreateProjectModal />', () => {
  it('should render modal header', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateProjectContext.Provider
          value={{ disclosure } as CreateProjectContextData}
        >
          <CreateProjectModal />
        </CreateProjectContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByText(`Criando projeto de ${user.first_name}`)
    ).toBeInTheDocument()
  })

  it('should render modal body', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateProjectContext.Provider
          value={
            {
              disclosure
            } as CreateProjectContextData
          }
        >
          <CreateProjectModal />
        </CreateProjectContext.Provider>
      </AuthContext.Provider>
    )

    expect(screen.getByPlaceholderText('Meu projeto')).toBeInTheDocument()
  })

  it('should close modal when x button is clicked', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateProjectContext.Provider
          value={
            {
              disclosure
            } as CreateProjectContextData
          }
        >
          <CreateProjectModal />
        </CreateProjectContext.Provider>
      </AuthContext.Provider>
    )

    const button = screen.getByTestId('close')

    fireEvent.click(button)

    expect(disclosure.onClose).toHaveBeenCalled()
  })
})
