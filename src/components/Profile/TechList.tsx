import { ITech } from 'interfaces/tech'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { TechItem } from './TechItem'

interface TechListProps {
  techs: ITech[]
}

export function TechList({ techs }: TechListProps) {
  return (
    <ProfileSectionContainer title="Tecnologias">
      {techs.map((tech) => (
        <TechItem key={tech.id} tech={tech} />
      ))}
    </ProfileSectionContainer>
  )
}
