import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    const isProd = process.env.NODE_ENV === 'production';

    return (
      <Html>
        <Head>
          <link rel="manifest" href={isProd ? `${process.env.NEXTJS_PUBLIC_FAVICON}/manifest.json` : '/manifest.json'}/>
          <link rel="apple-touch-icon" href={isProd ? `${process.env.NEXTJS_PUBLIC_FAVICON}/icon.png` : '/icon.png'}></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
