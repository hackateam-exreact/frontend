import { Container } from 'components/Container'
import { DarkModeSwitch } from 'components/DarkModeSwitch'
import { GetStaticProps } from 'next'
import { Hero } from 'components/Hero'

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />

    <Hero />
  </Container>
)

export default Index

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
