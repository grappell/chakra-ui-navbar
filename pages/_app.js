import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../Componets/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
