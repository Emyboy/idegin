import Head from 'next/head';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css'

import {
  AppContext,
  AppContextProvider,
  withTheme
} from "../context/AppContext";
import Wrapper from '../components/Wrapper';

function MyApp({ Component, pageProps }) {
  // setTimeout(() => {
  //   document.querySelector('html').classList.add('night-mode')
  // }, 2000);
  return (
    <AppContextProvider>
      <Head>
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet'></link>
        <meta name="viewport" content="width=device-width, shrink-to-fit=9"></meta>
      </Head>
      <Header />
      <SideNav />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </AppContextProvider>
  )
}

export default MyApp;
