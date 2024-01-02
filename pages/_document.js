import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() { 
    return (
      <Html lang={'en'}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Overlock:wght@700;900&display=swap" rel="stylesheet" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script dangerouslySetInnerHTML={{
            __html: ``
          }}></script>

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
