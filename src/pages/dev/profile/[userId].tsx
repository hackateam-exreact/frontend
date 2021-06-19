import { Grid, GridItem, VStack } from '@chakra-ui/react'
import {
  articlesTemplate,
  projectsTemplate,
  techsTemplate
} from 'utils/userTemplate'

import { ArticleList } from 'components/Profile/ArticleList'
import { Container } from 'components/Container'
import { CreateArticleModal } from 'components/Modal/CreateArticleModal'
import { CreateArticleProvider } from 'contexts/CreateArticleContext'
import { CreateProjectModal } from 'components/Modal/CreateProjectModal'
import { CreateProjectProvider } from 'contexts/CreateProjectContext'
import { CreateSkillModal } from 'components/Modal/CreateSkillModal'
import { CreateSkillProvider } from 'contexts/CreateSkillContext'
import { EditProfileMenu } from 'components/Profile/EditProfileMenu'
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
import { Protected } from 'components/Protected'
import { TechList } from 'components/Profile/TechList'
import { api } from 'services/api'

interface ProfilePageProps {
  profile: IUser
  projects: IProject[]
  articles: IArticle[]
  techs: ITech[]
}

export default function ProfilePage(props: ProfilePageProps) {
  return (
    <>
      <Head>
        <title>{props.profile.first_name} | Devspot</title>
      </Head>

      <Container>
        <Grid templateColumns="repeat(3, 1fr)" gap="20" maxW="1200px" mx="auto">
          <GridItem>
            <VStack align="center" spacing="10">
              <ProfileSummary
                user={props.profile}
                articles={props.articles}
                projects={props.projects}
              />
              <Protected>
                <EditProfileProvider>
                  <CreateArticleProvider>
                    <CreateProjectProvider>
                      <CreateSkillProvider>
                        <EditProfileMenu />
                        <CreateSkillModal />
                      </CreateSkillProvider>
                      <CreateProjectModal />
                    </CreateProjectProvider>
                    <CreateArticleModal />
                  </CreateArticleProvider>
                  <EditProfileModal />
                </EditProfileProvider>
              </Protected>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack spacing="10">
              <ProfileDescription about={props.profile.about} />
              <ProjectList projects={props.projects} />
              <ArticleList profile={props.profile} articles={props.articles} />
              <TechList techs={props.techs} />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.userId

  try {
    const { data: profileData } = await api.get(`/api/users/${String(userId)}`)
    console.log(profileData.user)

    const profile = {
      ...profileData.user,
      about: profileData.user.description,
      avatar: profileData.user.image_url
        ? profileData.user.image_url
        : '/img/fallback-avatar.png',
      name: `${profileData.user.first_name} ${profileData.user.last_name}`
    }

    const projects = projectsTemplate

    const articles = articlesTemplate

    const techs = techsTemplate

    return {
      props: { profile, projects, articles, techs }
    }
  } catch (error) {
    console.log(error.response)
    // return {
    //   redirect: {
    //     destination: '/dev/signin',
    //     permanent: false
    //   }
    // }
  }

  return {
    props: {}
  }
}
