import Head from 'next/head'
import Image from 'next/image'
import SignIn from '../components/SignIn'
import styles from '../styles/Home.module.css'

export default function Home() {
  const isProd = process.env.NODE_ENV === 'production';
  console.log(process.env.NEXT_PUBLIC_FAVICON)

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={isProd ? `${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico` : '/favicon.ico'} />
      </Head>

      <SignIn/>
    </div>
  )
}
