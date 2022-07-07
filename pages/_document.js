import Document, { Html, Head, Main, NextScript } from "next/document";
var repo_name = "/logindemo"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href={repo_name+"/manifest.json"} />
          <link rel="apple-touch-icon" href={repo_name+"/icon.png"}></link>
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
