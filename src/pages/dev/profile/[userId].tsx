import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Stack,
  VStack
} from '@chakra-ui/react'

import { ArticleList } from 'components/Profile/ArticleList'
import { CertificateList } from 'components/Profile/CertificateList'
import { Container } from 'components/Container'
import { CreateArticleModal } from 'components/Modal/CreateArticleModal'
import { CreateCertificateModal } from 'components/Modal/CreateCertificateModal'
import { CreateProjectModal } from 'components/Modal/CreateProjectModal'
import { CreateSkillModal } from 'components/Modal/CreateSkillModal'
import { EditProfileMenu } from 'components/Profile/EditProfileMenu'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { FiRefreshCw } from 'react-icons/fi'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { IArticle } from 'interfaces/article'
import { ICertificate } from 'interfaces/certificate'
import { IProject } from 'interfaces/project'
import { ISkill } from 'interfaces/skill'
import { IUser } from 'interfaces/user'
import { ProfileDescription } from 'components/Profile/ProfileDescription'
import { ProfileSummary } from 'components/Profile/ProfileSummary'
import { ProjectList } from 'components/Profile/ProjectList'
import { Protected } from 'components/Protected'
import { SkillList } from 'components/Profile/SkillList'
import { api } from 'services/api'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useState } from 'react'

interface ProfilePageProps {
  profile: IUser
  projects: IProject[]
  articles: IArticle[]
  skills: ISkill[]
  certificates: ICertificate[]
}

export default function ProfilePage(props: ProfilePageProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()
  const [articles, setArticles] = useState<IArticle[]>(props.articles)
  const [profile, setProfile] = useState<IUser>(props.profile)
  const [projects, setProjects] = useState<IProject[]>(props.projects)
  const [skills, setSkills] = useState<ISkill[]>(props.skills)
  const [certificates, setCertificates] = useState<ICertificate[]>(
    props.certificates
  )

  const handleFetchNewData = async () => {
    setIsLoading(true)
    const { data: profileData } = await api.get(`/api/users/${profile.id}`)

    const formattedProfile = {
      ...profileData.user,
      about: profileData.user.description,
      avatar: profileData.user.image_url
        ? profileData.user.image_url
        : '/img/fallback-avatar.png',
      name: `${profileData.user.first_name} ${profileData.user.last_name}`
    }

    setProfile(formattedProfile)

    const { data: articlesData } = await api.get(`/api/articles/${profile.id}`)

    const formattedArticles = articlesData.list_of_articles.map(
      (article: IArticle) => ({
        id: article.id,
        title: article.title,
        url: article.url
      })
    )

    setArticles(formattedArticles)

    const { data: skillsData } = await api.get(`/api/skills/${profile.id}`)

    const formattedSkills: ISkill[] = skillsData.user_skills.map(
      (skill: {
        id: string
        abstract: string
        skill: {
          image_url: string
          name: string
        }
      }) => ({
        id: skill.id,
        thumbnail: skill.skill.image_url,
        title: skill.skill.name,
        description: skill.abstract
      })
    )

    setSkills(formattedSkills)

    const { data: certificatesData } = await api.get(
      `/api/certificates/${profile.id}`
    )

    const formattedCertificates: ICertificate[] =
      certificatesData.list_of_certificates.map(
        (certificate: ICertificate) => ({
          id: certificate.id,
          url: certificate.url,
          title: certificate.title
        })
      )

    setCertificates(formattedCertificates)

    const { data: projectsData } = await api.get(`/api/projects/${profile.id}`)

    const formattedProjects: IProject[] = [...projectsData.list_of_projects]

    setProjects(formattedProjects)

    setIsLoading(false)
  }

  useEffect(() => {
    handleFetchNewData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <>
      <Head>
        <title>{profile.first_name} | Devspot</title>
      </Head>

      {isLoading ? (
        <Flex w="100vw" h="calc(100vh - 6rem)" align="center" justify="center">
          <Spinner />
        </Flex>
      ) : (
        <Container w="100%" py="3">
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
                <HStack spacing="5" w="100%">
                  <EditProfileMenu />
                  <IconButton
                    aria-label="Atualizar"
                    icon={<Icon as={FiRefreshCw} />}
                    onClick={handleFetchNewData}
                  />
                </HStack>
                <CreateCertificateModal />
                <CreateSkillModal />
                <CreateProjectModal />
                <CreateArticleModal />
                <EditProfileModal />
              </Protected>
            </VStack>
            <VStack spacing="10" w={{ sm: '100%', lg: '70%' }}>
              <ProfileDescription about={profile.about} />
              <ProjectList projects={projects} />
              <ArticleList profile={profile} articles={articles} />
              <SkillList skills={skills} />
              <CertificateList certificates={certificates} />
            </VStack>
          </Stack>
        </Container>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.userId

  try {
    const { data: profileData } = await api.get(`/api/users/${String(userId)}`)

    const profile: IUser = {
      ...profileData.user,
      about: profileData.user.description,
      avatar: profileData.user.image_url
        ? profileData.user.image_url
        : '/img/fallback-avatar.png',
      name: `${profileData.user.first_name} ${profileData.user.last_name}`
    }

    const { data: articlesData } = await api.get(
      `/api/articles/${String(userId)}`
    )

    const articles: IArticle[] = articlesData.list_of_articles.map(
      (article: IArticle) => ({
        id: article.id,
        title: article.title,
        url: article.url
      })
    )

    const { data: skillsData } = await api.get(`/api/skills/${String(userId)}`)

    const skills: ISkill[] = skillsData.user_skills.map(
      (skill: {
        id: string
        skill_id: string
        abstract: string
        skill: {
          image_url: string
          name: string
        }
      }) => ({
        id: skill.id,
        skill_id: skill.skill_id,
        thumbnail: skill.skill.image_url,
        title: skill.skill.name,
        description: skill.abstract
      })
    )

    const { data: certificatesData } = await api.get(
      `/api/certificates/${String(userId)}`
    )

    const certificates: ICertificate[] =
      certificatesData.list_of_certificates.map(
        (certificate: ICertificate) => ({
          id: certificate.id,
          url: certificate.url,
          title: certificate.title
        })
      )

    const { data: projectsData } = await api.get(
      `/api/projects/${String(userId)}`
    )

    const projects: IProject[] = [...projectsData.list_of_projects]

    return {
      props: { profile, projects, articles, skills, certificates }
    }
  } catch (error) {
    console.log(error.response)
  }

  return {
    props: {}
  }
}
