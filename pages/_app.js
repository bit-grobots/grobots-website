import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider user={pageProps.user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}
