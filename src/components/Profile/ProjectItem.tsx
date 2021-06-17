import { Text, VStack } from '@chakra-ui/react'

import { IProject } from 'interfaces/project'

interface ProjectItemProps {
  project: IProject
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <VStack spacing="3" p="3" bg="gray.800" borderRadius="md">
      <Text color="blue.500" fontWeight="bold">
        {project.title}
      </Text>
      <Text color="gray.500" align="justify">
        {project.description}
      </Text>
    </VStack>
  )
}
