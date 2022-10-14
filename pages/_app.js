import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import { useSession } from "next-auth/react"
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
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
  </ChakraProvider>
  )
}

function Auth({ children }) {

  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}