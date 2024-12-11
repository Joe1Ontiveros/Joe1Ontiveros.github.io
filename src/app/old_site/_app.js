import Layout from '../../components/Layout';
import '../../styles/globals.css';

function OldSiteApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default OldSiteApp;