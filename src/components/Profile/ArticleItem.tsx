import { Divider, Flex, Text } from '@chakra-ui/react'

import { IArticle } from 'interfaces/article'
import { IUser } from 'interfaces/user'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { UserBadge } from './UserBadge'

interface ArticleItemProps {
  profile: IUser
  article: IArticle
}

export function ArticleItem({ profile, article }: ArticleItemProps) {
  return (
    <ProfileSectionItemContainer>
      <ProfileSectionItemHeading>{article.title}</ProfileSectionItemHeading>
      <Divider />
      <Flex align="center" justify="space-between" w="100%">
        <UserBadge user={profile} />
        <Text fontSize="xs" color="gray.500">
          {article.created_at}
        </Text>
      </Flex>
    </ProfileSectionItemContainer>
  )
}
