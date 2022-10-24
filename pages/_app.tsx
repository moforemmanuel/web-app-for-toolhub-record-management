import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css'
// fonts
import '@fontsource/roboto/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/poppins/400.css';
import '@fontsource/manjari';

import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      // easing: 'ease-out-cubic',
      once: false,
      offset: 120,
      startEvent: 'DOMContentLoaded',
      // placement: 'top-top',
      // offset: 50,
      duration: 1000,
      // easing: 'ease-in-sine',
      delay: 400,
      mirror: true,
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </ChakraProvider>
  );
}
