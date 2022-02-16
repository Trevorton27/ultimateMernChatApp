import App from 'next/app';
import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
