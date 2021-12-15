import Head from "next/head";

import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

//import PopUp from "../components/PopUp/popUp";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="robots" content="index" />
        <link rel="shortcut icon " href="/logo.svg" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        />
        {/* Facebook */}
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:image:alt" content="Hardware design house" />
        <meta property="og:site_name" content="hardwarehouses" />
      </Head>
      <NavBar />

      <Component {...pageProps} />

      <Footer />
      {/* <PopUp /> */}
    </>
  );
}

export default MyApp;
