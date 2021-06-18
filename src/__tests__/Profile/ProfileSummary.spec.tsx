import {
  articlesTemplate,
  projectsTemplate,
  userTemplate
} from 'utils/userTemplate'
import { render, screen } from 'utils/test-utils'

import { ProfileSummary } from 'components/Profile/ProfileSummary'
import React from 'react'

// import { useState } from 'react'

const user = userTemplate
const articles = articlesTemplate
const projects = projectsTemplate

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }))

describe('<ProfileSummary />', () => {
  // const setState = jest.fn()

  // beforeEach(() => {
  //   ;(useState as jest.Mock).mockImplementationOnce((init) => [init, setState])
  // })

  it('should render a card with user info', () => {
    render(
      <ProfileSummary user={user} articles={articles} projects={projects} />
    )

    expect(screen.getByAltText(user.first_name)).toBeInTheDocument()
    expect(
      screen.getByText(`${user.first_name} ${user.last_name}`)
    ).toBeInTheDocument()
    expect(screen.getByText(String(user.about))).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
    expect(
      screen.queryByText('Artigos: ')?.firstChild?.textContent ===
        String(articles.length)
    )
    expect(
      screen.queryByText('Projetos principais: ')?.firstChild?.textContent ===
        String(projects.length)
    )
  })

  it('should call setState when image data is loaded', () => {
    render(
      <ProfileSummary user={user} articles={articles} projects={projects} />
    )

    // expect(setState).toHaveBeenCalled()
  })
})
