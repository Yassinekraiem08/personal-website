import '@/styles/globals.css';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { Manrope, Space_Grotesk } from '@next/font/google';

import { AppProps } from 'next/app';
import Head from 'next/head';

import StarryBackground from '@/src/components/StarryBackground';
import Header from '@/src/components/Header';
import { siteConfig } from '@/src/config/site';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'blue',
  colors: {
    blue: [
      '#eef7ff',
      '#d8ebff',
      '#b6d8ff',
      '#8dc2ff',
      '#5fa8ff',
      '#3b82f6',
      '#2563eb',
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
    ],
  },
  components: {
    Carousel: {
      styles: {
        control: {
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          border: '1px solid rgba(255,255,255,0.12)',
          '& svg': {
            color: 'white',
          },
        },
      },
    },
    Blockquote: {
      styles: {
        root: {
          color: '#FFF',
        },
        cite: {
          color: '#cbd5e1',
        },
        icon: {
          color: '#bfdbfe',
        },
      },
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <div className={`${bodyFont.variable} ${displayFont.variable}`}>
          <StarryBackground />
          <Header />
          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </>
  );
}
