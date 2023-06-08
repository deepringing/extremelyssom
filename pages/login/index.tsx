import Head from 'next/head'
import styles from '@/styles/pages/login.module.scss'
import { useQuery } from 'react-query';
import { GOOGLE_AUTH_LINK } from '@/constants/keys';
import { getGoogleAuthLink } from '@/interfaces/auth/api';

export default function Login() {
  const { data } = useQuery([GOOGLE_AUTH_LINK], getGoogleAuthLink);

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
        <button
          onClick={() => window.location.replace(data!) }
        >
          <img src="/images/google.png" alt="google" />
          <span>구글 계정으로 로그인</span>
        </button>
      </main>
    </>
  )
}
