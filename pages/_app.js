import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import Wrapper from "./components/Wrapper";
import customTheme from '../styles/theme';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log("Got Session: ", session);
  return (
    <SessionProvider session={session}>
    <ChakraProvider theme={customTheme}>
      {/* <Wrapper> */}
        <Component {...pageProps} />
      {/* </Wrapper> */}
    </ChakraProvider>
  </SessionProvider>
  )
}

