import { Image, Text, VStack } from '@chakra-ui/react'

import { ITech } from 'interfaces/tech'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'

interface TechItemProps {
  tech: ITech
}

export function TechItem({ tech }: TechItemProps) {
  const techThumbSize = '120px'

  return (
    <ProfileSectionItemContainer
      direction={{ sm: 'column', lg: 'row' }}
      align="center"
    >
      <Image
        src={tech.thumbnail}
        alt={tech.title}
        w={techThumbSize}
        h={techThumbSize}
        objectFit="cover"
      />
      <VStack align="flex-start">
        <ProfileSectionItemHeading>{tech.title}</ProfileSectionItemHeading>
        <Text>
          Experiência de:{' '}
          <Text as="span" color="blue.500">
            {`${tech.experience} ${tech.experience === 1 ? 'ano' : 'anos'}`}
          </Text>
        </Text>
        <Text color="gray.500" align="justify">
          {tech.description}
        </Text>
      </VStack>
    </ProfileSectionItemContainer>
  )
}
