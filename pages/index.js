import { Html } from 'next/document'
import Head from 'next/head'
import { Heading, Text } from '@chakra-ui/react'

import { ColorModeScript } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import OnlinePlayers from './components/OnlinePlayers'
import Pumpkin from './components/Pumpkin'

export default function Home() {
  return ( 
  
    <div className={styles.container}>
    <ColorModeScript initialColorMode='Dark' />

    <Head>
      <title>SEI LÁ CRAFT</title>
      <meta name="description" content="Seu servidor preferido de minecraft" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
    </Head>

      <main className={styles.main}>
        {/* <Pumpkin></Pumpkin> */}
        <Heading as='h2' size='4xl' className={styles.title}>Bem-vindo ao <a href="#">sei-la</a>!</Heading>

        <Text fontSize='xl' as='b' className={styles.description}>
            Você pode jogar conosco em: {' '}
          <code className={styles.code}>mine.sei-la.co:10074</code>
        </Text>
        <div>
          <OnlinePlayers></OnlinePlayers>
        </div>

        <div className={styles.grid}>
          <div>
            <a href="#"><span>Facebook</span></a>
            <a href="#"><span>Twitter</span></a>
            <a href="https://discord.gg/tHpkj323"><span>Discord</span></a>
            <a href="#"><span>Github</span></a>
          </div>
        </div>
        
      </main>

    </div>

   
  )
}
