import '@/styles/globals.css';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';

import { AppProps } from 'next/app';
import Head from 'next/head';

import StarryBackground from '@/src/components/StarryBackground';
import Header from '@/src/components/Header';
import { siteConfig } from '@/src/config/site';

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
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <div>
          <StarryBackground />
          <Header />
          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </>
  );
}
