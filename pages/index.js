import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from './components/Counter'
import Pumpkin from './components/Pumpkin'

export default function Home() {
  return ( 
    <div className={styles.container}>

      <Head>
        <title>SEI LÁ CRAFT</title>
        <meta name="description" content="Seu servidor preferido de minecraft" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
      </Head>

      <main className={styles.main}>
        {/* <Pumpkin></Pumpkin> */}
        <h1 className={styles.title}>
          Bem-vindo ao <a href="#">sei-la</a>!
        </h1>

        <p className={styles.description}>
         Você pode jogar conosco em: {' '}
          <code className={styles.code}>mine.sei-la.co:10074</code>
        </p>
        <div className={styles.pixcontainer}>
            <h1 className={styles.pix}><strong >Faça um PIX! </strong></h1>
            <p>
              Ajude a manter o nosso servidor!
              <br></br>Receba itens a cada R$ 2,00 doado.
              <br></br>
              <br></br>
              <strong >Chave: 09143280935 </strong>
            </p>
        </div>
        <div className={styles.grid}>
          <div>
            <a href="#"><span>Facebook</span></a>
            <a href="#"><span>Twitter</span></a>
            <a href="https://discord.gg/tHpkj323"><span>Discord</span></a>
            <a href="#"><span>Github</span></a>
          </div>
        </div>

        {/* <Counter users={['Thomaz', 'Bruno']}></Counter> */}
      </main>

    </div>
  )
}
