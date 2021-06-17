import { render, screen } from 'utils/test-utils'

import { EditProfileBtn } from '../../components/Profile/EditProfileBtn'
import { EditProfileContext } from 'contexts/EditProfileContext'
import { useDisclosure } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate

jest.mock('@chakra-ui/react', () => {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    useDisclosure: jest.fn()
  }
})

describe('<EditProfileBtn />', () => {
  it('should render correctly', () => {
    render(<EditProfileBtn user={user} />)

    expect(screen.getByText('Editar perfil')).toBeInTheDocument()
  })

  it('should call handleEditUserProfile fn when clicked', () => {
    const handleEditUserProfile = jest.fn()

    const { container } = render(
      <EditProfileContext.Provider
        value={{
          disclosure: useDisclosure(),
          handleEditUserProfile
        }}
      >
        <EditProfileBtn user={user} />
      </EditProfileContext.Provider>
    )

    container.querySelector('button')?.click()

    expect(handleEditUserProfile).toHaveBeenCalled()
  })
})
