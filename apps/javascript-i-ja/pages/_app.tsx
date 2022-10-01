import { AppProps } from 'next/app';
import Head from 'next/head';
import { NavBar } from '@programowanie-i-ja/ui';
import { links } from '../constants/nav-bar'
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to javascript-i-ja!</title>
      </Head>
      <NavBar links={links}/>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
