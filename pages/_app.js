import React, { Fragment } from 'react'
import App from 'next/app'
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from '@/theme';
import SmoothLoad from "../src/ui-components/SmoothLoad";
import SmoothScroll from '@/ui-components/SmoothScroll';
import useMainStateStore from '@/utils/mainStateStore';
import '@/fonts/inject.css';

class MyApp extends App {
    componentDidMount() {
    }

    render() {
        const { Component, pageProps } = this.props
        const { eventBus } = useMainStateStore();

        return (
            <Fragment>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <SmoothLoad>
                        <SmoothScroll onScroll={(scrollOffset) => eventBus.call('document.scroll', scrollOffset)}>
                            <Component {...pageProps} />
                        </SmoothScroll>
                    </SmoothLoad>
                </ThemeProvider>
            </Fragment>
        )
    }
}

export default MyApp
