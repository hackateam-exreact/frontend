import { render, screen } from 'utils/test-utils'

import { ITech } from 'interfaces/tech'
import { TechItem } from 'components/Profile/TechItem'
import { techsTemplate } from 'utils/userTemplate'

const techs = techsTemplate
let tech: ITech

describe('<TechItem />', () => {
  beforeEach(() => {
    tech = techs[0]
  })

  it('should render tech thumbnail', () => {
    render(<TechItem tech={tech} />)

    expect(screen.getByAltText(tech.title)).toBeInTheDocument()
  })

  it('should render tech title', () => {
    render(<TechItem tech={tech} />)

    expect(screen.getByText(tech.title)).toBeInTheDocument()
  })

  it('should render experience', () => {
    render(<TechItem tech={tech} />)

    expect(screen.getByText(`${tech.experience} anos`))

    tech = techs[1]

    render(<TechItem tech={tech} />)

    expect(screen.getByText(`${tech.experience} ano`)).toBeInTheDocument()
  })

  it('should render description', () => {
    render(<TechItem tech={tech} />)

    expect(screen.getByText(tech.description)).toBeInTheDocument()
  })
})
