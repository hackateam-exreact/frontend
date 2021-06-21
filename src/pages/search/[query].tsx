import { FiSearch, FiTerminal } from 'react-icons/fi'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { IUser } from 'interfaces/user'
import { UserSearch } from 'components/UserSearch'
import { api } from 'services/api'

interface SearchProps {
  results: IUser[]
  query: string
}

export default function Search({ results, query }: SearchProps) {
  return (
    <>
      <Head>
        <title>{`Resultados (${results.length}) | Devspot`}</title>
      </Head>
      <Flex w="100%" maxW="760px" m="1rem auto" p="8" flexDirection="column">
        {results.length ? (
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
                  {query}
                </Text>
              </Text>

              <Flex
                w="24%"
                color="green.500"
                alignItems="center"
                justifyContent="space-between"
              >
                <Icon as={FiTerminal} fontSize="30" />
                <Text>Encontramos {results.length} devs</Text>
              </Flex>
            </Flex>

            <Flex
              w="100%"
              my="2rem"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {results.map((user) => (
                <UserSearch key={user.id} user={user} />
              ))}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = params?.query

  const { data } = await api.get(`/api/skills/search/${String(query)}`)

  const results = data.user_list.map(
    (user: {
      first_name: string
      last_name: string
      image_url: string
      description: string
    }) => ({
      ...user,
      name: `${user.first_name} ${user.last_name}`,
      avatar: user.image_url ? user.image_url : '/img/fallback-avatar.png',
      about: user.description
    })
  )

  return {
    props: { results, query }
  }
}
