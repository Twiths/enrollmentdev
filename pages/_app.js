// import "../styles/globals.css";
import '../styles/nav.css'
import '../styles/landing.css'
import '../styles/enrollment.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import { AuthProvider } from "../context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
