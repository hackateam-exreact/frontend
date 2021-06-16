import { Flex, FlexProps, useColorMode } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'black.500' }
  const color = { light: 'black', dark: 'white.500' }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      px="3"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
