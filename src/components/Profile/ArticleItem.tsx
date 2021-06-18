import { Divider, Flex, HStack, Icon, Text } from '@chakra-ui/react'

import { FiClock } from 'react-icons/fi'
import { IArticle } from 'interfaces/article'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { UserBadge } from './UserBadge'
import { useAuth } from 'hooks/useAuth'

interface ArticleItemProps {
  article: IArticle
}

export function ArticleItem({ article }: ArticleItemProps) {
  const { user } = useAuth()

  return (
    <ProfileSectionItemContainer>
      <ProfileSectionItemHeading>{article.title}</ProfileSectionItemHeading>
      <Divider />
      <Flex align="center" justify="space-between" w="100%">
        <UserBadge user={user} />
        <HStack>
          <Icon as={FiClock} />
          <Text fontSize="xs" color="gray.500">
            {`${article.readingTime} ${
              article.readingTime === 1 ? 'minuto' : 'minutos'
            }`}
          </Text>
        </HStack>
        <Text fontSize="xs" color="gray.500">
          {article.created_at}
        </Text>
      </Flex>
    </ProfileSectionItemContainer>
  )
}
