import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
