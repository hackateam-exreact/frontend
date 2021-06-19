import { Flex, Text, Icon } from '@chakra-ui/react'
import { UserSearch } from 'components/UserSearch'
import { FiTerminal, FiSearch } from 'react-icons/fi'
import Head from 'next/head'

interface ResultSearch {
  resultSearch: string
}

export default function Search({ resultSearch }: ResultSearch) {
  console.log(resultSearch)
  return (
    <>
      <Head>
        <title>{resultSearch && `${resultSearch} | `}Search in Devspot</title>
      </Head>
      <Flex w="100%" maxW="760px" m="1rem auto" p="8" flexDirection="column">
        {resultSearch ? (
          <>
            <Flex w="100%" alignCenter="center" justifyContent="space-between">
              <Text
                w="60%"
                fontFamily="Ubuntu"
                fontSize="2.25rem"
                fontWeight="700"
                lineHeight="42px"
              >
                Estes foram os resultados para:{' '}
                <Text as="span" color="blue.500">
                  {resultSearch}
                  {/* Pegar do input de pesquisa */}
                </Text>
              </Text>

              <Flex
                w="24%"
                color="green.500"
                alignItems="center"
                justifyContent="space-between"
              >
                <Icon as={FiTerminal} fontSize="30" />
                <Text>
                  Encontramos
                  <br />
                  mais de 20 devs
                  {/* Pegar do back-end a quantidade de devs retornados*/}
                </Text>
              </Flex>
            </Flex>

            <Flex
              w="100%"
              my="2rem"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <UserSearch
                userToken="Hildebrando-Viana Matos"
                urlImageUser="https://avatars.githubusercontent.com/u/70374072?v=4"
                nameUser="Hildebrando Viana Matos"
                emailUser="hildocontato@gmail.com"
                descUser="I'm Hildebrando Viana Matos and I'm a web and mobile developer and designer 🎓"
                numberArticle={8}
                numberProjects={4}
              />
            </Flex>

            <Text
              fontFamily="Poppins"
              fontSize="sm"
              color="gray.500"
              align="center"
            >
              Estes são todos os resultados
            </Text>
          </>
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Icon as={FiSearch} fontSize="255px" color="blue.500" />
            <Text
              my="1rem"
              fontFamily="Ubuntu"
              fontSize="2rem"
              fontWeight="700"
            >
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
        )}
      </Flex>
    </>
  )
}
