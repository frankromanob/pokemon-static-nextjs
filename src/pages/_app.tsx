import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import { darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Head>
        <title>RomApps - Pokemon Static</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
