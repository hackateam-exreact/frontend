import {
  Link as ChakraLink,
  HStack,
  Icon,
  IconButton,
  Text
} from '@chakra-ui/react'
import { FiExternalLink, FiTrash } from 'react-icons/fi'

import { FaGithub } from 'react-icons/fa'
import { IProject } from 'interfaces/project'
import Link from 'next/link'
import { ProfileSectionItemContainer } from 'components/Container/ProfileSectionItemContainer'
import { ProfileSectionItemHeading } from 'components/Heading/ProfileSectionItemHeading'
import { useCreateProject } from 'hooks/useCreateProject'

interface ProjectItemProps {
  project: IProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  const { handleDeleteProject } = useCreateProject()

  return (
    <ProfileSectionItemContainer pos="relative">
      <IconButton
        aria-label="Excluir projeto"
        icon={<Icon as={FiTrash} />}
        onClick={() => handleDeleteProject(project.id)}
        pos="absolute"
        bottom="2"
        right="2"
      />
      <ProfileSectionItemHeading color="blue.500">
        {project.name}
      </ProfileSectionItemHeading>
      <HStack>
        <Icon as={FaGithub} />
        <Text>Repositórios no GitHub</Text>
      </HStack>
      {project.github_projects.map((repo) => (
        <Link key={repo.id} href={repo.url} passHref={true}>
          <ChakraLink>
            <HStack>
              <Icon as={FiExternalLink} />
              <Text>{repo.name}</Text>
            </HStack>
          </ChakraLink>
        </Link>
      ))}
    </ProfileSectionItemContainer>
  )
}
