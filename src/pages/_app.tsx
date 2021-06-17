import { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
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
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
