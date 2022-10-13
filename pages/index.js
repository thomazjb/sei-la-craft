import Link from 'next/link'
import Head from 'next/head'
import { Flex, Spacer, ButtonGroup, Heading, Text, Button } from '@chakra-ui/react'
import { FaPlusSquare, FaUser } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import OnlinePlayers from './components/OnlinePlayers'
import Pumpkin from './components/Pumpkin'
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  // THIS CAUSES THE ERROR
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
  console.log('SESSION', session);

  return {
    props: {}
  }
}

export default function Home() {
  return ( 

<div className={styles.container}>
  
  <Flex minWidth='max-content' alignItems='center' gap='2' h='20' >
        <Spacer />
        <ButtonGroup gap='2'>
        <Link href="/register">
          <Button leftIcon={<FaPlusSquare />} colorScheme='teal'>Registre-se</Button>
        </Link>
        <Link href="/login">
          <Button leftIcon={<FaUser/>} colorScheme='teal'>Log in</Button>
        </Link>
    </ButtonGroup>
  </Flex>

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
