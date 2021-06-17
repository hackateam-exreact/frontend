import { Divider, Flex, HStack, Icon, Text } from '@chakra-ui/react'

import { FiClock } from 'react-icons/fi'
import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { UserBadge } from './UserBadge'

interface ArticleItemProps {
  user: IUser
  article: IArticle
}

export function ArticleItem({ user, article }: ArticleItemProps) {
  return (
    <ProfileSectionItemContainer>
      <ProfileSectionItemHeading>{article.title}</ProfileSectionItemHeading>
      <Divider />
      <Flex align="center" justify="space-between" w="100%">
        <UserBadge user={user} />
        <HStack>
          <Icon as={FiClock} />
          <Text fontSize="xs" color="gray.500">
            5 minutos de leitura
          </Text>
        </HStack>
        <Text fontSize="xs" color="gray.500">
          16/06/2021
        </Text>
      </Flex>
    </ProfileSectionItemContainer>
  )
}
