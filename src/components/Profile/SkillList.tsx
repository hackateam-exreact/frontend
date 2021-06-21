import { ISkill } from 'interfaces/skill'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { SkillItem } from './SkillItem'

interface SkillList {
  skills: ISkill[]
}

export function SkillList({ skills }: SkillList) {
  return (
    <ProfileSectionContainer title={`Habilidades (${skills.length})`}>
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </ProfileSectionContainer>
  )
}
