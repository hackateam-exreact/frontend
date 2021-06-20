import { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import { CreateArticleProvider } from 'contexts/CreateArticleContext'
import { CreateCertificateProvider } from 'contexts/CreateCertificateContext'
import { CreateProjectProvider } from 'contexts/CreateProjectContext'
import { CreateSkillProvider } from 'contexts/CreateSkillContext'
import { EditProfileProvider } from 'contexts/EditProfileContext'
import Head from 'next/head'
import { Header } from 'components/Header'
import theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>NextJS with Chakra-ui Boilerplate</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="NextJS with Chakra-ui Boilerplate" />
      </Head>

      <AuthProvider>
        <EditProfileProvider>
          <CreateArticleProvider>
            <CreateProjectProvider>
              <CreateSkillProvider>
                <CreateCertificateProvider>
                  <Header />
                  <Component {...pageProps} />
                </CreateCertificateProvider>
              </CreateSkillProvider>
            </CreateProjectProvider>
          </CreateArticleProvider>
        </EditProfileProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
