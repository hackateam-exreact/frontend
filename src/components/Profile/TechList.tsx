import { Heading, VStack } from '@chakra-ui/react'

import { ITech } from 'interfaces/tech'
import { TechItem } from './TechItem'

interface TechListProps {
  techs: ITech[]
}

export function TechList({ techs }: TechListProps) {
  return (
    <VStack align="flex-start" spacing="5" w="100%">
      <Heading as="h3">Tecnologias</Heading>
      {techs.map((tech) => (
        <TechItem key={tech.id} tech={tech} />
      ))}
    </VStack>
  )
}
