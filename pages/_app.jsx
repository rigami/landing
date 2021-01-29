import React, { Fragment } from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/theme';
import '@/fonts/inject.css';
import Head from 'next/head';

class MyApp extends App {
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
                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLN7C8YBGE" />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-RLN7C8YBGE');`,
                        }}
                    /> */}
                </Head>
                <CssBaseline />
                <ThemeProvider theme={theme}>
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

export default MyApp;
