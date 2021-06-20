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
import { useCreateCertificate } from 'hooks/useCreateCertificate'
import { useCreateProject } from 'hooks/useCreateProject'
import { useCreateSkill } from 'hooks/useCreateSkill'
import { useEditProfile } from 'hooks/useEditProfile'

export function EditProfileMenu() {
  const { disclosure: profileDisclosure } = useEditProfile()
  const { disclosure: projectDisclosure } = useCreateProject()
  const { disclosure: articleDisclosure } = useCreateArticle()
  const { disclosure: skillDisclosure } = useCreateSkill()
  const { disclosure: certificateDisclosure } = useCreateCertificate()

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FiChevronDown} />} w="100%">
        Editar ou adicionar
      </MenuButton>
      <MenuList bg="black.500">
        <MenuItem
          onClick={profileDisclosure.onOpen}
          data-testid="menu-item-profile"
        >
          Editar perfil
        </MenuItem>
        <MenuItem
          onClick={projectDisclosure.onOpen}
          data-testid="menu-item-project"
        >
          Adicionar projeto
        </MenuItem>
        <MenuItem
          onClick={articleDisclosure.onOpen}
          data-testid="menu-item-article"
        >
          Adicionar artigo
        </MenuItem>
        <MenuItem
          onClick={skillDisclosure.onOpen}
          data-testid="menu-item-skill"
        >
          Adicionar habilidade
        </MenuItem>
        <MenuItem
          onClick={certificateDisclosure.onOpen}
          data-testid="menu-item-certificate"
        >
          Adicionar certificado
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
