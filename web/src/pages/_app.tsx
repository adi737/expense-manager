import { ChakraProvider } from '@chakra-ui/react'
import NextNprogress from 'nextjs-progressbar';

import theme from '../theme'
import { AppProps } from 'next/app'
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';


function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setPageLoading(true));
    router.events.on('routeChangeComplete', () => setPageLoading(false));
    router.events.on('routeChangeError', () => setPageLoading(false));
  }, [router]);

  return pageLoading ?
    <NextNprogress />
    :
    <ChakraProvider resetCSS theme={theme}>
      <NextNprogress />
      <Component {...pageProps} />
      <DarkModeSwitch />
    </ChakraProvider>
}

export default MyApp
