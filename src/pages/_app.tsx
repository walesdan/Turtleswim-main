// pages/_app.js

import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Loading from '../components/Loading'; // Ensure this path is correct
import '../styles/globals.css';
import Construction from './contruction'; // Import the construction page

const underConstructionRoutes = ['/path1', '/path2']; // Add routes that are under construction

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (router.asPath !== url) {
        const id = setTimeout(() => setLoading(true), 9000);
        setTimeoutId(id);
      }
    };

    const handleComplete = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [router.asPath, timeoutId]);

  // Check if the current route is under construction
  const isUnderConstruction = underConstructionRoutes.includes(router.asPath);

  if (isUnderConstruction) {
    return <Construction />;
  }

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
