import React, { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box, CssBaseline } from '@material-ui/core';
import theme from '@/theme';
import '@/fonts/inject.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import config from '@/config';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Head>
                    <title>Rigami</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link
                        rel="icon" type="image/png" sizes="32x32"
                        href="32x32.png"
                    />
                    <link
                        rel="icon" type="image/png" sizes="16x16"
                        href="16x16.png"
                    />
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    {PRODUCTION_MODE && (
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `(function(w,d,s,l,i){
                                w[l]=w[l]||[];
                                w[l].push({
                                'gtm.start': new Date().getTime(),
                                event:'gtm.js'
                                });
                                var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),
                                dl=l!='dataLayer'?'&l='+l:'';
                                j.async=true;
                                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                                f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${config.gTagManagerId}');`,
                            }}
                        />
                    )}
                </Head>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {PRODUCTION_MODE && (
                        <noscript>
                            <iframe
                                title="googletagmanager"
                                src={`https://www.googletagmanager.com/ns.html?id=${config.gTagManagerId}`}
                                height="0"
                                width="0"
                                style={{
                                    display: 'none',
                                    visibility: 'hidden',
                                }}
                            />
                        </noscript>
                    )}
                    <Box
                        style={{
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Component {...pageProps} />
                    </Box>
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default appWithTranslation(MyApp);
