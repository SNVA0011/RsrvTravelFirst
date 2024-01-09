import "bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';
import '../styles/globals.scss'
import React from "react";
import Layout from '../component/layout';
import { Provider } from "react-redux";
import store from "../Redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Provider store={store}>
        <Head> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </>
  )
}

export default MyApp 