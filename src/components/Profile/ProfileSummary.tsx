import { Flex, Image, SkeletonCircle, Text, VStack } from '@chakra-ui/react'

import { useState } from 'react'

export interface IUser {
  id: string
  first_name: string
  last_name: string
  email: string
  location: string
  contact: string
  status: 'Open' | 'Studying' | 'Employed'
  created_at: string
  updated_at: string
}

interface ProfileSummaryProps {
  user: IUser
}

export function ProfileSummary({ user }: ProfileSummaryProps) {
  const [isLoading, setIsLoading] = useState(true)
  const profilePicSize = '150px'

  return (
    <Flex
      direction="column"
      bg="gray.800"
      w="18.75rem"
      borderRadius="md"
      p="3"
      pos="relative"
      mt="20"
    >
      <SkeletonCircle
        w={profilePicSize}
        h={profilePicSize}
        isLoaded={!isLoading}
        pos="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        display="inline-block"
      >
        <Image
          src="/img/chakra-logo.png"
          alt={user.first_name}
          w={profilePicSize}
          h={profilePicSize}
          objectFit="cover"
          onLoad={() => setIsLoading(false)}
        />
      </SkeletonCircle>
      {/* mt calc (profilePicSize / 2 + 10) / 16 = 5.312 | Round to 5.25 */}
      <VStack spacing="5" mt="5.25rem">
        <Text fontWeight="bold">{`${user.first_name} ${user.last_name}`}</Text>
        <Text fontSize="sm" color="gray.500" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quas, non ab accusantium provident deleniti repellendus sequi error
          earum consequatur at, ipsam magni vero recusandae! Nisi nihil itaque
          sint facere.
        </Text>
        <Text color="blue.500">{user.email}</Text>
      </VStack>
      <VStack align="flex-start" spacing="2" mt="5">
        <Text>
          Artigos:{' '}
          <Text as="span" color="blue.500">
            5 artigos
          </Text>
        </Text>
        <Text>
          Projetos principais:{' '}
          <Text as="span" color="blue.500">
            5 projetos
          </Text>
        </Text>
      </VStack>
    </Flex>
  )
}
