import { IUser } from 'interfaces/user'
import { calcReadingTime } from './calcReadingTime'

const user: IUser = {
  id: '123',
  avatar: '/img/chakra-logo.png',
  first_name: 'John',
  last_name: 'Doe',
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '',
  location: 'Doe York',
  contact: '(99) 99999-9999',
  status: 'Open',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores aspernatur quasi sed alias quo. Consequatur magnam provident iusto error rem dicta, esse dignissimos. Alias dolore dolor voluptatibus veniam aperiam.',
  articles: [
    {
      id: 'fghjki',
      title: 'Lorem Ipsum1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora.',
      readingTime: 0,
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'fghj',
      title: 'Lorem Ipsum2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.',
      readingTime: 0,
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'fghjuki',
      title: 'Lorem Ipsum3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis oditLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit',
      readingTime: 0,
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    },
    {
      id: 'grsfdf',
      title: 'Lorem Ipsum4',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit2334',
      readingTime: 0,
      created_at: String(Date.now()),
      updated_at: String(Date.now())
    }
  ],
  projects: [
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
  ],
  techs: [
    {
      id: 'dasdsadsad',
      title: 'React JS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt necessitatibus mollitia ipsa tempora. Odit, esse fuga nostrum tempore aliquid cum. Doloribus, minima quis eius perferendis consequuntur quia perspiciatis odit.912621963193861asdas',
      experience: 5,
      thumbnail: '/img/react-logo.png'
    }
  ],
  created_at: String(Date.now()),
  updated_at: String(Date.now())
}

export const userTemplate: IUser = {
  ...user,
  articles: user.articles.map((article) => ({
    ...article,
    readingTime: calcReadingTime(article.title + article.body)
  }))
}
