import Layout  from "components/layout comps/Layout";
import { type AppType } from "next/dist/shared/lib/utils";
import '@fortawesome/fontawesome-svg-core/styles.css';

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /> </Layout>;
};

export default MyApp;
