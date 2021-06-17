import { IProject } from 'interfaces/project'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { Text } from '@chakra-ui/react'

interface ProjectItemProps {
  project: IProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <ProfileSectionItemContainer>
      <ProfileSectionItemHeading color="blue.500">
        {project.title}
      </ProfileSectionItemHeading>
      <Text color="gray.500" align="justify">
        {project.description}
      </Text>
    </ProfileSectionItemContainer>
  )
}
