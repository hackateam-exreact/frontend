import { Grid, GridItem, VStack } from '@chakra-ui/react'
import {
  articlesTemplate,
  projectsTemplate,
  techsTemplate,
  userTemplate
} from 'utils/userTemplate'

import { ArticleList } from 'components/Profile/ArticleList'
import { Container } from 'components/Container'
import { CreateArticleProvider } from 'contexts/CreateArticleContext'
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
              <EditProfileProvider>
                <ProfileSummary
                  user={props.profile}
                  articles={props.articles}
                  projects={props.projects}
                />
              </EditProfileProvider>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack spacing="10">
              <ProfileDescription about={props.profile.about} />
              <ProjectList projects={props.projects} />
              <CreateArticleProvider>
                <ArticleList
                  profile={props.profile}
                  articles={props.articles}
                />
              </CreateArticleProvider>
              <TechList techs={props.techs} />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const userId = params?.userId

  // const { data: props.profile } = await api.get(`/api/users/${String(userId)}`)

  const profile = userTemplate
  const projects = projectsTemplate
  const articles = articlesTemplate
  const techs = techsTemplate

  // TODO chamada a api para retornar dados do usuario (projects, articles, techs)

  return {
    props: { profile, projects, articles, techs }
  }
}
