import "bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';
import '../styles/globals.scss'
import React from "react";
import Layout from '../component/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp 