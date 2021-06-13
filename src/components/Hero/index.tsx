import { Flex, Heading } from '@chakra-ui/react'

export type HeroProps = {
  title?: string
}

export const Hero = ({ title = 'Fullstack Alchemists' }: HeroProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)
