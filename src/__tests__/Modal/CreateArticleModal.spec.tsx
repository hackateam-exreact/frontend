import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  CreateArticleContext,
  CreateArticleContextData
} from 'contexts/CreateArticleContext'
import { fireEvent, render, screen } from 'utils/test-utils'

import { CreateArticleModal } from 'components/Modal/CreateArticleModal'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate
const onClose: () => void = jest.fn()
const disclosure = { isOpen: true, onClose } as UseDisclosureReturn

describe('<CreateArticleModal />', () => {
  it('should render modal header', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateArticleContext.Provider
          value={{ disclosure } as CreateArticleContextData}
        >
          <CreateArticleModal />
        </CreateArticleContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByText(`Criando artigo de ${user.first_name}`)
    ).toBeInTheDocument()
  })

  it('should render modal body', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateArticleContext.Provider
          value={
            {
              disclosure
            } as CreateArticleContextData
          }
        >
          <CreateArticleModal />
        </CreateArticleContext.Provider>
      </AuthContext.Provider>
    )

    expect(
      screen.getByPlaceholderText('https://theurlforyourarticle.com.br')
    ).toBeInTheDocument()
  })

  it('should close modal when x button is clicked', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <CreateArticleContext.Provider
          value={
            {
              disclosure
            } as CreateArticleContextData
          }
        >
          <CreateArticleModal />
        </CreateArticleContext.Provider>
      </AuthContext.Provider>
    )

    const button = screen.getByTestId('close')

    fireEvent.click(button)

    expect(disclosure.onClose).toHaveBeenCalled()
  })
})
