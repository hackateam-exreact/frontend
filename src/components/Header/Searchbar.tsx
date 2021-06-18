import { FiSearch } from 'react-icons/fi'
import { Icon } from '@chakra-ui/react'
import { TextInput } from 'components/TextInput'
import { useRef } from 'react'

export function Searchbar() {
  const query = useRef<HTMLInputElement>(null)

  const handleSearch = async () => {
    console.log(query.current?.value)
  }

  return (
    <TextInput
      inputName="search"
      placeholder="Pesquisar por tecnologia (ex: React)"
      onChange={handleSearch}
      rightIcon={<Icon as={FiSearch} />}
      borderRadius="full"
      ref={query}
    />
  )
}
