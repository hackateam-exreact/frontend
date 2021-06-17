import { render, screen } from 'utils/test-utils'

import { SignUpForm } from 'components/Form/SignUpForm'
import { Simulate } from 'react-dom/test-utils'
import { useForm } from 'react-hook-form'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn()
}))

describe('<SignUpForm />', () => {
  const handleSubmit = jest.fn()

  beforeEach(() => {
    ;(useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit,
      formState: { isSubmitting: false, errors: {} }
    })
  })

  it('should render title', () => {
    render(<SignUpForm />)

    expect(screen.getByText('Cadastro')).toBeInTheDocument()
    expect(
      screen.getByText('Preencha os dados abaixo para começar.')
    ).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<SignUpForm />)

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Sobrenome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render signup button', () => {
    render(<SignUpForm />)

    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('should render signin link and cta', () => {
    render(<SignUpForm />)

    expect(screen.getByText('Já possui conta?')).toBeInTheDocument()
    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('should toggle show password when eye icon is clicked', () => {
    const { container } = render(<SignUpForm />)

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
    const { container } = render(<SignUpForm />)

    const button = container.querySelector('button[type="submit"]')

    if (button) Simulate.click(button)

    expect(handleSubmit).toHaveBeenCalled()
  })

  it('should render highlight colors as green when target prop is hunter', () => {
    render(<SignUpForm target="hunter" />)

    const heading = screen.queryByText('Login para Devs')

    if (heading) expect(window.getComputedStyle(heading).color === 'green.500')
  })

  // TODO testar fn onSubmit depois de implementar integração com backend
})
