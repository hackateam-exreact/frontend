import { render, screen } from 'utils/test-utils'

import { AuthProvider } from 'contexts/AuthContext'
import { Header } from 'components/Header'
import { useRouter } from 'next/router'

jest.mock('next/router')

describe('<Header />', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ asPath: '/dev/profile' })
  })

  it('should render if path is allowed', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    )

    expect(screen.getByAltText('Devspot')).toBeInTheDocument()
  })
})

describe('<Header />', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ asPath: '/' })
  })

  it('should not render if path is not allowed', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    )

    expect(screen.queryByAltText('Devspot')).not.toBeInTheDocument()
  })
})
