import { Avatar, SkeletonCircle, Text, VStack } from '@chakra-ui/react'

import { IArticle } from 'interfaces/article'
import { IProject } from 'interfaces/project'
import { IUser } from 'interfaces/user'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { useState } from 'react'

interface ProfileSummaryProps {
  user: IUser
  articles: IArticle[]
  projects: IProject[]
}

export function ProfileSummary({
  user,
  articles,
  projects
}: ProfileSummaryProps) {
  const [isLoading, setIsLoading] = useState(true)
  const profilePicSize = '150px'

  return (
    <ProfileSectionItemContainer
      mode="flex"
      direction="column"
      pos="relative"
      mt="75px"
    >
      <SkeletonCircle
        w={profilePicSize}
        h={profilePicSize}
        isLoaded={!isLoading}
        pos="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Avatar
          src={user.avatar}
          alt={user.first_name}
          w={profilePicSize}
          h={profilePicSize}
          onLoad={() => setIsLoading(false)}
        />
      </SkeletonCircle>
      <VStack spacing="5" mt="75px" w="100%" align="center">
        <Text fontWeight="bold" fontSize="lg">
          {user.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {user.about}
        </Text>
        <Text color="blue.500">{user.email}</Text>
      </VStack>
      <VStack align="flex-start" spacing="2" mt="5">
        <Text>
          Artigos:{' '}
          <Text as="span" color="blue.500">
            {articles.length}
          </Text>
        </Text>
        <Text>
          Projetos principais:{' '}
          <Text as="span" color="blue.500">
            {projects.length}
          </Text>
        </Text>
      </VStack>
    </ProfileSectionItemContainer>
  )
}
