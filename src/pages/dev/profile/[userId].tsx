import { Stack, VStack } from '@chakra-ui/react'
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
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useState } from 'react'

interface ProfilePageProps {
  profile: IUser
  projects: IProject[]
  articles: IArticle[]
  techs: ITech[]
}

export default function ProfilePage(props: ProfilePageProps) {
  const { user } = useAuth()
  const [profile, setProfile] = useState<IUser>(props.profile)
  const [projects] = useState<IProject[]>(props.projects)
  const [articles] = useState<IArticle[]>(props.articles)
  const [techs] = useState<ITech[]>(props.techs)

  useEffect(() => {
    ;(async () => {
      if (user.id === profile.id) {
        const { data } = await api.get(`/api/users/${profile.id}`)

        const profileData = {
          ...data.user,
          about: data.user.description,
          avatar: data.user.image_url
            ? data.user.image_url
            : '/img/fallback-avatar.png',
          name: `${data.user.first_name} ${data.user.last_name}`
        }

        setProfile(profileData)

        // TODO live update de projetos, artigos e techs
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <>
      <Head>
        <title>{profile.first_name} | Devspot</title>
      </Head>

      <Container w="100%">
        <Stack
          direction={{ sm: 'column', lg: 'row' }}
          w="100%"
          maxW="1400px"
          mx="auto"
          justify="space-between"
          spacing="20"
        >
          <VStack align="center" spacing="10" w={{ sm: '100%', lg: '30%' }}>
            <ProfileSummary
              user={profile}
              articles={articles}
              projects={projects}
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
          <VStack spacing="10" w={{ sm: '100%', lg: '70%' }}>
            <ProfileDescription about={profile.about} />
            <ProjectList projects={projects} />
            <ArticleList profile={profile} articles={articles} />
            <TechList techs={techs} />
          </VStack>
        </Stack>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.userId

  try {
    const { data: profileData } = await api.get(`/api/users/${String(userId)}`)

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
