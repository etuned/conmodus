import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { globalCss } from '../stitches.config';


const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$hiContrast',
    color: '$loContrast'
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme' }}
        defaultTheme="system"
      >
          <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default App;