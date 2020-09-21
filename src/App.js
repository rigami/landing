import React, { useEffect } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@/theme';
import '@/fonts/inject.css';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import SmoothScroll from "./ui-components/SmoothScroll";
import useMainStateStore from "@/utils/mainStateStore";

function App() {
    const { eventBus } = useMainStateStore();

    const locale = async () => {
        await i18n
            .use(initReactI18next);

        if (true /* PRODUCTION_MODE */) {
            await i18n
                .use(LanguageDetector)
                .use(Backend);
        }

        await i18n
            .init({
                fallbackLng: 'en', // PRODUCTION_MODE ? 'en' : 'dev',
                // debug: true,
                interpolation: { escapeValue: false },
                backend: { loadPath: '/i18n/{{lng}}.json' },
            });
    };

    useEffect(() => {
        locale();
    }, []);

    return (
        <Root>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <React.Suspense fallback={<em>Loading...</em>}>
                    <SmoothScroll onScroll={(scrollOffset) => eventBus.call('document.scroll', scrollOffset)}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                    </SmoothScroll>
                </React.Suspense>
            </ThemeProvider>
        </Root>
    );
}

export default App;
