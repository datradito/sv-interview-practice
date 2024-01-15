import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...props}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppCacheProvider>
  );
}
