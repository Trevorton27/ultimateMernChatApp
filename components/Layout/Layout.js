import React, { useRef } from 'react';
import HeadTags from './HeadTags';
import Nav from './Nav';
import { Container } from 'semantic-ui-react';
import nprogress from 'nprogress';
import Router, { useRouter } from 'next/router';

function Layout({ children, user }) {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();

  return (
    <>
      <HeadTags />
      <>
        <Nav />
        <Container text style={{ paddingTop: '1rem' }}>
          {children}
        </Container>
      </>
    </>
  );
}

export default Layout;
