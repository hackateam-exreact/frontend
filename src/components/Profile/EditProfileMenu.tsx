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
import { useCreateSkill } from 'hooks/useCreateSkill'
import { useEditProfile } from 'hooks/useEditProfile'

export function EditProfileMenu() {
  const { handleEditUserProfile } = useEditProfile()
  const { handleCreateProject } = useCreateProject()
  const { handleCreateArticle } = useCreateArticle()
  const { handleCreateSkill } = useCreateSkill()

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FiChevronDown} />} w="100%">
        Editar ou adicionar
      </MenuButton>
      <MenuList bg="black.500">
        <MenuItem onClick={handleEditUserProfile}>Editar perfil</MenuItem>
        <MenuItem onClick={handleCreateProject}>Adicionar projeto</MenuItem>
        <MenuItem onClick={handleCreateArticle}>Adicionar artigo</MenuItem>
        <MenuItem onClick={handleCreateSkill}>Adicionar habilidade</MenuItem>
      </MenuList>
    </Menu>
  )
}
