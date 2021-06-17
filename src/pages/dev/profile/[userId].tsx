import { Box, Grid, GridItem, VStack } from '@chakra-ui/react'

import { ArticleList } from 'components/Profile/ArticleList'
import { Container } from 'components/Container'
import { EditProfileBtn } from 'components/Profile/EditProfileBtn'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { EditProfileProvider } from 'contexts/EditProfileContext'
import Head from 'next/head'
import { IUser } from 'interfaces/user'
import { ProfileDescription } from 'components/Profile/ProfileDescription'
import { ProfileSummary } from 'components/Profile/ProfileSummary'
import { ProjectList } from 'components/Profile/ProjectList'

export default function ProfilePage() {
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
    created_at: String(Date.now()),
    updated_at: String(Date.now())
  }

  const projects = [
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
  ]

  const articles = [
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
  ]

  return (
    <>
      <Head>
        <title>Luis Filipe | Devspot</title>
      </Head>

      <Box h="6rem" mb="1rem" />

      <Container>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="5rem"
          maxW="1200px"
          mx="auto"
        >
          <GridItem>
            <VStack align="center" spacing="10">
              <ProfileSummary user={user} />
              <EditProfileProvider>
                <EditProfileBtn user={user} />
                <EditProfileModal />
              </EditProfileProvider>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack spacing="10">
              <ProfileDescription description={user.about} />
              <ProjectList projects={projects} />
              <ArticleList user={user} articles={articles} />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
