import { IArticle } from 'interfaces/article'
import { IProject } from 'interfaces/project'
import { ISkill } from 'interfaces/skill'
import { IUser } from 'interfaces/user'

export const userTemplate: IUser = {
  id: '123',
  avatar: '/img/chakra-logo.png',
  first_name: 'John',
  last_name: 'Doe',
  name: 'John Doe',
  email: 'johndoe@example.com',
  location: 'Doe York',
  contact: '99999999999',
  status: 'Open',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam.'
}

export const projectsTemplate: IProject[] = [
  {
    id: 'asufhSUI',
    title: 'Lorem Ipsumdasd',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit141241441'
  },
  {
    id: '12083ucn182y3',
    title: 'Lorem Ipsumasdsadasdas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.1289631298461298461'
  },
  {
    id: '18241283y',
    title: 'Lorem Ipsujhgfdsfgm',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.12836412984619286'
  },
  {
    id: 'dasdasdasqwr',
    title: 'Lorem Ipsumdfghyjuki',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.912621963193861'
  }
]

export const articlesTemplate: IArticle[] = [
  {
    id: 'fghjki',
    title: 'Lorem Ipsum1',
    url: 'uhtuhuada'
  },
  {
    id: 'fghj',
    title: 'Lorem Ipsum2',
    url: 'urlsadas'
  },
  {
    id: 'fghjuki',
    title: 'Lorem Ipsum3',
    url: 'urlsadasadasd'
  },
  {
    id: 'grsfdf',
    title: 'Lorem Ipsum4',
    url: 'urlsadasadasddadsad'
  }
]

export const techsTemplate: ISkill[] = [
  {
    id: 'dasdsadsad',
    title: 'React JS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.912621963193861asdas',
    thumbnail: '/img/react-logo.png'
  },
  {
    id: 'asdsad',
    title: 'React Native',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.912621963193861asdas',
    thumbnail: '/img/react-logo.png'
  }
]
