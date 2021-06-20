import { IProject } from 'interfaces/project'
import { ProfileSectionContainer } from 'components/Container/ProfileSectionContainer'
import { ProjectItem } from './ProjectItem'

interface ProjectListProps {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ProfileSectionContainer title="Projetos principais">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ProfileSectionContainer>
  )
}
