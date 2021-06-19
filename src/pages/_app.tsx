import { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>
          Devspot - A plataforma para encontrar devs de todo o mundo
        </title>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Devspot - A plataforma para encontrar devs de todo o mundo"
        />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
