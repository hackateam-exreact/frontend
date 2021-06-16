import { render, screen } from 'utils/test-utils'

import { EditProfileBtn } from '../../components/Profile/EditProfileBtn'
import { EditProfileContext } from 'contexts/EditProfileContext'
import { IUser } from 'components/Profile/ProfileSummary'

const user: IUser = {
  id: 'randomId',
  first_name: 'Jane',
  last_name: 'Doe',
  email: 'jane.doe@example.com',
  location: 'Jane Doe',
  contact: '99999999999',
  status: 'Open',
  created_at: String(Date.now()),
  updated_at: String(Date.now())
}

describe('<EditProfileBtn />', () => {
  it('should render correctly', () => {
    render(<EditProfileBtn user={user} />)

    expect(screen.getByText('Editar perfil')).toBeInTheDocument()
  })

  it('should call handleEditUserProfile fn when clicked', () => {
    const handleEditUserProfile = jest.fn()

    const { container } = render(
      <EditProfileContext.Provider value={{ handleEditUserProfile }}>
        <EditProfileBtn user={user} />
      </EditProfileContext.Provider>
    )

    container.querySelector('button')?.click()

    expect(handleEditUserProfile).toHaveBeenCalled()
  })
})
