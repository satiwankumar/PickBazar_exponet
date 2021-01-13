import React from 'react';
import App from 'next/app';
import Head from 'next/head'

import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import AuthProvider from 'contexts/auth/auth.provider';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';
import { HeaderProvider } from 'contexts/header/header.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from 'containers/LayoutContainer/AppLayout';
import { useDeviceType } from 'helper/useDeviceType';
import { CartProvider } from 'contexts/cart/use-cart';
// Language translation files
import localEn from 'data/translation/en.json';
import localAr from 'data/translation/ar.json';
import localEs from 'data/translation/es.json';
import localDe from 'data/translation/de.json';
import localCn from 'data/translation/zh.json';
import localIl from 'data/translation/he.json';
// External CSS import here
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/MultiCarousel/MultiCarousel.style.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'styled/global.style';
import { parseCookies } from 'helper/parse-cookies';
import './style.css'


// Language translation Config
const messages = {
  en: localEn,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
// need to provide types
export default function ExtendedApp({
  Component,
  pageProps,
  userAgent,
  locale,
  query,
}) {
  const deviceType = useDeviceType(userAgent);
  return (
    <ThemeProvider theme={theme}>
        <Head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    />
                <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"  
                    />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                    />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                 
                    />
                          </Head>
      <LanguageProvider messages={messages} initLocale={locale}>
        <CartProvider>
          <SearchProvider query={query}>
            <HeaderProvider>
              <StickyProvider>
                <AuthProvider>
                  <>
                    <AppLayout deviceType={deviceType}>
                      <Component {...pageProps} deviceType={deviceType} />
                    </AppLayout>
                    <GlobalStyle />
                  </>
                </AuthProvider>
              </StickyProvider>
            </HeaderProvider>
          </SearchProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { locale } = parseCookies(req);
  return { ...appProps, userAgent, query, locale };
};
