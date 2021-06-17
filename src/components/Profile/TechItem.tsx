import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

import { ITech } from 'interfaces/tech'

interface TechItemProps {
  tech: ITech
}

export function TechItem({ tech }: TechItemProps) {
  const techThumbSize = '120px'

  return (
    <HStack spacing="2" p="3" bg="gray.800" borderRadius="md" w="100%">
      <Image
        src={tech.thumbnail}
        alt={tech.title}
        w={techThumbSize}
        h={techThumbSize}
        objectFit="cover"
      />
      <VStack align="flex-start">
        <Heading as="h4">{tech.title}</Heading>
        <Text>
          Experiência de:{' '}
          <Text as="span" color="blue.500">
            {tech.experience}
          </Text>
        </Text>
        <Text color="gray.500" align="justify">
          {tech.description}
        </Text>
      </VStack>
    </HStack>
  )
}
