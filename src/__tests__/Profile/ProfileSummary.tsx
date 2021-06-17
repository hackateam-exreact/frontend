import { IUser, ProfileSummary } from 'components/Profile/ProfileSummary'
import { render, screen } from 'utils/test-utils'

import React from 'react'
import { useState } from 'react'

const user: IUser = {
  id: 'randomId',
  first_name: 'Jane',
  last_name: 'Doe',
  email: 'jane.doe@example.com',
  location: 'Jane Doe',
  contact: '99999999999',
  status: 'Open',
  created_at: String(Date.now()),
  updated_at: String(Date.now())
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

describe('<ProfileSummary />', () => {
  const setState = jest.fn()

  beforeEach(() => {
    ;(useState as jest.Mock).mockImplementationOnce((init) => [init, setState])
  })

  it('should render a card with user info', () => {
    render(<ProfileSummary user={user} />)

    expect(screen.getByAltText(user.first_name)).toBeInTheDocument()
    expect(
      screen.getByText(`${user.first_name} ${user.last_name}`)
    ).toBeInTheDocument()
    // TODO expect description to be in the document
    expect(screen.getByText(user.email)).toBeInTheDocument()
    // TODO expect articles to be in the document
    // TODO expect proojects to be in the document
  })

  it('should call setState when image data is loaded', () => {
    render(<ProfileSummary user={user} />)

    expect(setState).toHaveBeenCalled()
  })
})
