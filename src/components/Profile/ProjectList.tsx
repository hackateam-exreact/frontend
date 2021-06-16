import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'

import { IProject } from 'interfaces/project'
import { ProjectItem } from './ProjectItem'

interface ProjectListProps {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <VStack align="flex-start" spacing="5">
      <Heading as="h3">Projetos principais</Heading>
      <SimpleGrid columns={2} columnGap="2rem" rowGap="2rem">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
