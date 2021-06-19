import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import {
  CreateArticleContext,
  CreateArticleContextData
} from 'contexts/CreateArticleContext'
import {
  CreateProjectContext,
  CreateProjectContextData
} from 'contexts/CreateProjectContext'
import {
  CreateSkillContext,
  CreateSkillContextData
} from 'contexts/CreateSkillContext'
import {
  EditProfileContext,
  EditProfileContextData
} from 'contexts/EditProfileContext'
import { render, screen } from 'utils/test-utils'

import { CreateArticleModal } from 'components/Modal/CreateArticleModal'
import { CreateProjectModal } from 'components/Modal/CreateProjectModal'
import { CreateSkillModal } from 'components/Modal/CreateSkillModal'
import { EditProfileMenu } from 'components/Profile/EditProfileMenu'
import { EditProfileModal } from 'components/Modal/EditProfileModal'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { userTemplate } from 'utils/userTemplate'

const user = userTemplate
const onClose: () => void = jest.fn()
const onOpen: () => void = jest.fn()
const disclosure = { isOpen: false, onClose, onOpen } as UseDisclosureReturn
const handleEditUserProfile: () => void = jest.fn()
const handleCreateProject: () => void = jest.fn()
const handleCreateArticle: () => void = jest.fn()
const handleCreateSkill: () => void = jest.fn()

describe('<EditProfileMenu />', () => {
  it('should open correct modal', () => {
    render(
      <AuthContext.Provider value={{ user } as AuthContextData}>
        <EditProfileContext.Provider
          value={
            { disclosure, handleEditUserProfile } as EditProfileContextData
          }
        >
          <CreateArticleContext.Provider
            value={
              { disclosure, handleCreateArticle } as CreateArticleContextData
            }
          >
            <CreateProjectContext.Provider
              value={
                { disclosure, handleCreateProject } as CreateProjectContextData
              }
            >
              <CreateSkillContext.Provider
                value={
                  { disclosure, handleCreateSkill } as CreateSkillContextData
                }
              >
                <EditProfileMenu />
                <CreateSkillModal />
              </CreateSkillContext.Provider>
              <CreateProjectModal />
            </CreateProjectContext.Provider>
            <CreateArticleModal />
          </CreateArticleContext.Provider>
          <EditProfileModal />
        </EditProfileContext.Provider>
      </AuthContext.Provider>
    )

    screen.getByTestId('menu-item-profile').click()
    expect(handleEditUserProfile).toHaveBeenCalled()

    screen.getByTestId('menu-item-project').click()
    expect(handleCreateProject).toHaveBeenCalled()

    screen.getByTestId('menu-item-article').click()
    expect(handleCreateArticle).toHaveBeenCalled()

    screen.getByTestId('menu-item-skill').click()
    expect(handleCreateSkill).toHaveBeenCalled()
  })
})
