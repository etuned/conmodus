import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./conmodus-logo.svg" sizes='any' type="image/svg+xml"/>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
