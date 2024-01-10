import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteurl } from "../utils/static";

class MyDocument extends Document {

  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href={`${siteurl}/favicon.ico`} type="image/ico" /> 

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=Overlock:wght@700;900&display=swap" rel="stylesheet" />

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
