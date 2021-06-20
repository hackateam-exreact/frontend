import { Box, Grid, GridItem, VStack } from '@chakra-ui/react'

import { ArticleList } from 'components/Profile/ArticleList'
import { Container } from 'components/Container'
import { EditProfileBtn } from 'components/Profile/EditProfileBtn'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { EditProfileProvider } from 'contexts/EditProfileContext'
import Head from 'next/head'
import { ProfileDescription } from 'components/Profile/ProfileDescription'
import { ProfileSummary } from 'components/Profile/ProfileSummary'
import { ProjectList } from 'components/Profile/ProjectList'
import { TechList } from 'components/Profile/TechList'
import { useAuth } from 'hooks/useAuth'
import { Certificates } from 'components/Profile/Certificates'

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth()

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
          my="2rem"
        >
          <GridItem>
            <VStack align="center" spacing="10">
              <ProfileSummary user={user} />
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
              <ProfileDescription description={user.about} />
              <ProjectList projects={user.projects} />
              <ArticleList user={user} articles={user.articles} />
              <TechList techs={user.techs} />
              <Certificates
                certificatesName="Ignite Trilha de React"
                certificatesURL="https://google.com"
              />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
