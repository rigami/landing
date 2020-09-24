import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Fade } from '@material-ui/core';
import clsx from 'clsx';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const useStyles = makeStyles(() => ({
    root: { transition: '0.6s ease' },
    rootHide: {
        transform: 'translateY(0.3vh)',
        opacity: 0,
    },
}));

const loadLocale = async () => {
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

function SmoothLoad({ children }) {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        loadLocale().then(() => {
            setIsShow(true);
        });
    }, []);

    return (
        <Fade in={isShow} unmountOnExit>
            <Box>
                {children}
            </Box>
        </Fade>
    );
}

export default SmoothLoad;
