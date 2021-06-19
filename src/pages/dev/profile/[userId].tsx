import { Box, Grid, GridItem, VStack } from '@chakra-ui/react'
import {
  articlesTemplate,
  projectsTemplate,
  techsTemplate,
  userTemplate
} from 'utils/userTemplate'

import { ArticleList } from 'components/Profile/ArticleList'
import { Container } from 'components/Container'
import { EditProfileBtn } from 'components/Profile/EditProfileBtn'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { EditProfileProvider } from 'contexts/EditProfileContext'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { IArticle } from 'interfaces/article'
import { IProject } from 'interfaces/project'
import { ITech } from 'interfaces/tech'
import { IUser } from 'interfaces/user'
import { ProfileDescription } from 'components/Profile/ProfileDescription'
import { ProfileSummary } from 'components/Profile/ProfileSummary'
import { ProjectList } from 'components/Profile/ProjectList'
import { TechList } from 'components/Profile/TechList'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useUserData } from 'hooks/useUserData'

interface ProfilePageProps {
  user: IUser
  projects: IProject[]
  articles: IArticle[]
  techs: ITech[]
}

export default function ProfilePage(props: ProfilePageProps) {
  const { user, isAuthenticated, handleUpdateUserInfo } = useAuth()
  const { projects, articles, techs, handleUpdateUserData } = useUserData()

  useEffect(() => {
    handleUpdateUserInfo({ user: props.user })
    handleUpdateUserData({
      projects: props.projects,
      articles: props.articles,
      techs: props.techs
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, projects, articles, techs])

  return (
    <>
      <Head>
        <title>{user.first_name} | Devspot</title>
      </Head>

      <Box h="24" mb="1rem" />

      <Container>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="5rem"
          maxW="1200px"
          mx="auto"
        >
          <GridItem>
            <VStack align="center" spacing="10">
              <ProfileSummary
                user={user}
                articles={articles}
                projects={projects}
              />
              {isAuthenticated && (
                <EditProfileProvider>
                  <EditProfileBtn user={user} />
                  <EditProfileModal />
                </EditProfileProvider>
              )}
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack spacing="10">
              <ProfileDescription about={user.about} />
              <ProjectList projects={projects} />
              <ArticleList articles={articles} />
              <TechList techs={techs} />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const userId = params?.userId

  // const { data: user } = await api.get(`/api/users/${String(userId)}`)

  const user = userTemplate
  const projects = projectsTemplate
  const articles = articlesTemplate
  const techs = techsTemplate

  // TODO chamada a api para retornar dados do usuario (projects, articles, techs)

  return {
    props: { user, projects, articles, techs }
  }
}
