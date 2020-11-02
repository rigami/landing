import React, { useEffect, useState } from 'react';
import { Box, Fade } from '@material-ui/core';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ root: { backgroundColor: theme.palette.background.paper } }));

const loadLocale = async () => {
    console.log('Is production mode', PRODUCTION_MODE);

    await i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
        .init({
            fallbackLng: PRODUCTION_MODE ? 'en' : 'en',
            // debug: true,
            interpolation: { escapeValue: false },
            backend: { loadPath: '/i18n/{{lng}}.json' },
        });
};

function SmoothLoad({ children }) {
    const classes = useStyles();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        loadLocale().then(() => {
            setIsShow(true);
        });
    }, []);

    return (
        <Fade in={isShow} unmountOnExit>
            <Box className={classes.root}>
                {children}
            </Box>
        </Fade>
    );
}

export default SmoothLoad;
