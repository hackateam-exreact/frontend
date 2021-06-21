import { Flex, Icon, Text } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'
import React from 'react'

export default function Search() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Icon as={FiSearch} fontSize="255px" color="blue.500" />
        <Text my="1rem" fontFamily="Ubuntu" fontSize="2rem" fontWeight="700">
          Pesquise outros Devs
        </Text>
        <Text
          fontSize="sm"
          fontWeight="400"
          fontFamily="Ubuntu"
          color="gray.500"
        >
          Use a barra de pesquisa do Menu da página para pesquisar Devs pelo
          nome ou por sua tecnologias
        </Text>
      </Flex>
    </>
  )
}
