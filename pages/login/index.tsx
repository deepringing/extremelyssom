import Head from 'next/head'
import styles from '@/styles/pages/login.module.scss'

export default function Login() {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <aside className={styles.sidebar}>
        <img src="/images/logo.svg" alt="logo" />
        <p>SSOM</p>
      </aside>
      <main className={styles.main}>
        <h1>로그인</h1>
        <button>
          <img src="/images/google.png" alt="google" />
          <span>구글 계정으로 로그인</span>
        </button>
      </main>
    </>
  )
}
