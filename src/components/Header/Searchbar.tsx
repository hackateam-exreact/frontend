import { FiSearch } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'
import Router from 'next/router'
import { TextInput } from 'components/TextInput'
import { useRef } from 'react'

export function Searchbar() {
  const query = useRef<HTMLInputElement>(null)

  const handleSearch = async () => {
    const formattedQuery = query.current?.value.replace(/\b\w/g, (l) =>
      l.toUpperCase()
    )

    Router.push(`/search/${formattedQuery}`)
  }

  return (
    <TextInput
      inputName="search"
      placeholder="Pesquisar por tecnologias separadas por espaço (ex: React Docker REST)"
      rightIcon={<Icon as={FiSearch} onClick={() => handleSearch()} />}
      borderRadius="full"
      ref={query}
    />
  )
}
