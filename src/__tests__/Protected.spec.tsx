import { render, screen } from 'utils/test-utils'

import { AuthContext } from 'contexts/AuthContext'
import { IUser } from 'interfaces/user'
import { Protected } from '../components/Protected'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn()
}))

describe('<Protected />', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ asPath: '/' })
  })

  it('should render children if it is authorized', () => {
    render(
      <AuthContext.Provider
        value={{
          isAuthenticated: true,
          isAuthorized: true,
          handleSignIn: jest.fn(),
          handleSignUp: jest.fn(),
          setUser: jest.fn(),
          tmpSignInValues: { email: '', password: '' },
          user: {} as IUser
        }}
      >
        <Protected>secret</Protected>
      </AuthContext.Provider>
    )

    expect(screen.getByText('secret')).toBeInTheDocument()
  })

  it('should not render children if it is not authorized', () => {
    render(
      <AuthContext.Provider
        value={{
          isAuthenticated: true,
          isAuthorized: false,
          handleSignIn: jest.fn(),
          handleSignUp: jest.fn(),
          setUser: jest.fn(),
          tmpSignInValues: { email: '', password: '' },
          user: {} as IUser
        }}
      >
        <Protected>secret</Protected>
      </AuthContext.Provider>
    )

    expect(screen.queryByText('secret')).toBeNull()
  })
})
