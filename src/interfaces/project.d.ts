export interface IProject {
  id: string
  name: string
  github_projects: {
    id: string
    name: string
    url: string
  }[]
}
