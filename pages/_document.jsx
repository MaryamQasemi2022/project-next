import { Html, Head, Main, NextScript } from 'next/document'
import Reset from '../containers/Reset/Reset'
export default function Document() {
  return (
    <Html>
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Alkalami&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Reset/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
