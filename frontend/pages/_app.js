import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Layout from "../components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <Layout>
        <Component />
      </Layout>
    </AppCacheProvider>
  );
}
