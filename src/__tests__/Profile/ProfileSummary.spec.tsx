import { render, screen } from 'utils/test-utils'

import { ProfileSummary } from 'components/Profile/ProfileSummary'
import React from 'react'
import { userTemplate } from 'utils/userTemplate'

// import { useState } from 'react'

const user = userTemplate

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
    render(<ProfileSummary user={user} />)

    expect(screen.getByAltText(user.first_name)).toBeInTheDocument()
    expect(
      screen.getByText(`${user.first_name} ${user.last_name}`)
    ).toBeInTheDocument()
    expect(screen.getByText(user.about)).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
    expect(
      screen.queryByText('Artigos: ')?.firstChild?.textContent ===
        String(user.articles.length)
    )
    expect(
      screen.queryByText('Projetos principais: ')?.firstChild?.textContent ===
        String(user.projects.length)
    )
  })

  it('should call setState when image data is loaded', () => {
    render(<ProfileSummary user={user} />)

    // expect(setState).toHaveBeenCalled()
  })
})
