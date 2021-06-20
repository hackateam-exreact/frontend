import { Image, Text, VStack } from '@chakra-ui/react'

import { ISkill } from 'interfaces/skill'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'

interface SkillItemProps {
  skill: ISkill
}

export function SkillItem({ skill }: SkillItemProps) {
  const techThumbSize = '120px'

  return (
    <ProfileSectionItemContainer
      direction={{ sm: 'column', lg: 'row' }}
      align="center"
    >
      <Image
        src={skill.thumbnail}
        alt={skill.title}
        w={techThumbSize}
        h={techThumbSize}
        borderRadius="50%"
        objectFit="cover"
      />
      <VStack align="flex-start">
        <ProfileSectionItemHeading>{skill.title}</ProfileSectionItemHeading>
        <Text color="gray.500" align="justify">
          {skill.description}
        </Text>
      </VStack>
    </ProfileSectionItemContainer>
  )
}
