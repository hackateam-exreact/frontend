import { render, screen } from 'utils/test-utils'

import { EditProfileBtn } from '../../components/Profile/EditProfileBtn'
import { EditProfileContext } from 'contexts/EditProfileContext'
import { IUser } from 'interfaces/user'
import { useDisclosure } from '@chakra-ui/react'

const user: IUser = {
  id: '123',
  avatar: '/img/chakra-logo.png',
  first_name: 'Luis Filipe',
  last_name: 'Fernandes Almeida',
  email: 'luisfilipe.faw@gmail.com',
  location: 'Balneário Camboriú',
  contact: '42988860098',
  status: 'Open',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam.',
  articles: [
    {
      id: 'adasd',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.',
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'adasd',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.',
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'adasd',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.',
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'adasd',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.',
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    }
  ],
  projects: [
    {
      id: 'asdsada',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.'
    },
    {
      id: 'asdsada',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.'
    },
    {
      id: 'asdsada',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.'
    },
    {
      id: 'asdsada',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.'
    }
  ],
  techs: [],
  created_at: String(Date.now()),
  updated_at: String(Date.now())
}

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
