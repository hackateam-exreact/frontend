import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

import { IUser } from 'interfaces/user'

interface AuthContextData {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>({
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

    created_at: String(Date.now()),
    updated_at: String(Date.now())
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
