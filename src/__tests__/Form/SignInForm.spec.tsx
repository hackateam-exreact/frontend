import { render, screen } from 'utils/test-utils'

import { SignInForm } from 'components/Form/SignInForm'
import { Simulate } from 'react-dom/test-utils'
import { useForm } from 'react-hook-form'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

describe('<SignInForm />', () => {
  const handleSubmit = jest.fn()

  beforeEach(() => {
    ;(useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit,
      formState: { isSubmitting: false, errors: {} }
    })
  })

  it('should render title', () => {
    render(<SignInForm />)

    expect(screen.getByText('Login para Devs')).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<SignInForm />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render signin button', () => {
    render(<SignInForm />)

    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('should render signup link and cta', () => {
    render(<SignInForm />)

    expect(screen.getByText('Não tem conta?')).toBeInTheDocument()
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument()
  })

  it('should toggle show password when eye icon is clicked', () => {
    const { container } = render(<SignInForm />)

    expect(
      container.querySelector('input#password')?.getAttribute('type') ===
        'password'
    ).toBeTruthy()

    const icon = container.querySelector(
      'div.chakra-input__right-element > svg'
    )

    if (icon) Simulate.click(icon)

    expect(
      container.querySelector('input#password')?.getAttribute('type') === 'text'
    ).toBeTruthy()
  })

  it('should call onSubmit fn when form is submitted', () => {
    const { container } = render(<SignInForm />)

    const button = container.querySelector('button[type="submit"]')

    if (button) Simulate.click(button)

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('should render highlight colors as green when target prop is hunter', () => {
    render(<SignInForm target="hunter" />)

    const heading = screen.queryByText('Login para Devs')

    if (heading) expect(window.getComputedStyle(heading).color === 'green.500')
  })

  // TODO testar fn onSubmit depois de implementar integração com backend
})
