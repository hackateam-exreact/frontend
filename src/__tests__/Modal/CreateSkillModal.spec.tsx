import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  CreateSkillContext,
  CreateSkillContextData
} from 'contexts/CreateSkillContext'
import { fireEvent, render, screen } from 'utils/test-utils'

import { CreateSkillModal } from 'components/Modal/CreateSkillModal'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate
const onClose: () => void = jest.fn()
const disclosure = { isOpen: true, onClose } as UseDisclosureReturn

describe('<CreateSkillModal />', () => {
  it('should render modal header', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateSkillContext.Provider
          value={{ disclosure } as CreateSkillContextData}
        >
          <CreateSkillModal />
        </CreateSkillContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByText(`Criando habilidade de ${user.first_name}`)
    ).toBeInTheDocument()
  })

  it('should render modal body', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateSkillContext.Provider
          value={
            {
              disclosure
            } as CreateSkillContextData
          }
        >
          <CreateSkillModal />
        </CreateSkillContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByPlaceholderText(
        'Trabalhei com esta tecnologia ou ferramenta de tal forma...'
      )
    ).toBeInTheDocument()
  })

  it('should close modal when x button is clicked', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateSkillContext.Provider
          value={
            {
              disclosure
            } as CreateSkillContextData
          }
        >
          <CreateSkillModal />
        </CreateSkillContext.Provider>
      </AuthContext.Provider>
    )

    const button = screen.getByTestId('close')

    fireEvent.click(button)

    expect(disclosure.onClose).toHaveBeenCalled()
  })
})
