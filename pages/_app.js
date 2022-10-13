import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import Wrapper from "./components/Wrapper";
import customTheme from '../styles/theme';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if(session){
    console.log("Got Session: ", session);
  }
  return (
    <ChakraProvider theme={customTheme}>
    <SessionProvider session={session}>
      {/* <Wrapper> */}
        <Component {...pageProps} />
      {/* </Wrapper> */}
  </SessionProvider>
  </ChakraProvider>
  )
}

