import React, { Fragment } from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/theme';
import SmoothLoad from '@/ui-components/SmoothLoad';
import SmoothScroll from '@/ui-components/SmoothScroll';
import useMainStateStore from '@/utils/mainStateStore';
import '@/fonts/inject.css';
import Head from 'next/head';

class MyApp extends App {
    componentDidMount() {
    }

    render() {
        const { Component, pageProps } = this.props;
        const { eventBus } = useMainStateStore();

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
                </Head>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <SmoothLoad>
                        <SmoothScroll onScroll={(scrollOffset) => eventBus.call('document.scroll', scrollOffset)}>
                            <Box
                                style={{
                                    minHeight: '100vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Component {...pageProps} />
                            </Box>
                        </SmoothScroll>
                    </SmoothLoad>
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default MyApp;
