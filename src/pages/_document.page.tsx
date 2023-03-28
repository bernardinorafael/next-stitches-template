import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
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
