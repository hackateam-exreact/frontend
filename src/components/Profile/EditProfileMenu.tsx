import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

import { FiChevronDown } from 'react-icons/fi'
import { useCreateArticle } from 'hooks/useCreateArticle'
import { useCreateProject } from 'hooks/useCreateProject'
import { useEditProfile } from 'hooks/useEditProfile'

export function EditProfileMenu() {
  const { handleEditUserProfile } = useEditProfile()
  const { handleCreateProject } = useCreateProject()
  const { handleCreateArticle } = useCreateArticle()

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FiChevronDown} />} w="100%">
        Editar ou adicionar
      </MenuButton>
      <MenuList bg="black.500">
        <MenuItem onClick={handleEditUserProfile}>Editar perfil</MenuItem>
        <MenuItem onClick={handleCreateProject}>Adicionar projeto</MenuItem>
        <MenuItem onClick={handleCreateArticle}>Adicionar artigo</MenuItem>
      </MenuList>
    </Menu>
  )
}
