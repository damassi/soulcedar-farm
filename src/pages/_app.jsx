import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { GlobalStyle } from "../GlobalStyles";
import { theme } from "../theme";
import { MediaContextProvider } from "../media";

const SNIPCART_API_KEY =
  process.env.NODE_ENV === "development"
    ? "NWE0ZDMzZjgtZDAxZC00ODhkLWJiNmEtY2MyYzhiZmFiMjljNjM3NjM3MjM5NTkxNzcwMTE5"
    : "ZmMzMDc3MDUtOWFlMy00MDk5LTk0MmYtN2VhNjMxZjJiYmI4NjM3NjM3MjM5NTkxNzcwMTE5";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="SoulCedar Farm is a small scale, holistic farm located in Quilcene,  Washington. Sage Coy and Max Evans, couple and co-owners, believe in the importance of nourishing food and of reciprocal relationships between people, plants and land."
        />
        <meta
          name="keywords"
          content="farm, Quilcene, small scale, organic, canned goods, food, nourishment, community, port townsend, chimacum, washington"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <MediaContextProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>

          <script
            async
            src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
          ></script>
          <div id="snipcart" data-api-key={SNIPCART_API_KEY} hidden></div>
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
