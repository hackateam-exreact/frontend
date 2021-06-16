import { Divider, Heading, Text, VStack } from '@chakra-ui/react'

interface ProfileDescriptionProps {
  description: string
}

export function ProfileDescription({ description }: ProfileDescriptionProps) {
  return (
    <VStack
      align="flex-start"
      spacing="5"
      p="3"
      bg="gray.800"
      borderRadius="md"
    >
      <Heading as="h3">Descrição</Heading>
      <Divider />
      <Text color="gray.500" align="justify">
        {description}
      </Text>
    </VStack>
  )
}
