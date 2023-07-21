// import "../styles/globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import "../styles/layout.css";import "../styles/globals.css";

// import Header from "components/layout/Header";
// import Footer from "components/layout/Footer";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/layout.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Sujeong Ji</title>
        <meta name="description" content="Sujeong Ji's Portfolio" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
