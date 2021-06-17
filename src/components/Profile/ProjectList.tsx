import { IProject } from 'interfaces/project'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { ProjectItem } from './ProjectItem'
import { SimpleGrid } from '@chakra-ui/react'

interface ProjectListProps {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ProfileSectionContainer title="Projetos principais">
      <SimpleGrid columns={2} columnGap="5" rowGap="5">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </ProfileSectionContainer>
  )
}
