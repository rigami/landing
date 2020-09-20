import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import LogoIcon from '@/resources/logo.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },
    description: {
        marginTop: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
    fixedBlock: {
        maxHeight: '15vh',
    },
    comingSoonBlock: {
        flexGrow: 0,
    },
    cardsBlock: {
        minHeight: '45vh',
        maxHeight: '50vh',
    }
}));

function SplashScreen() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.root}>
            <Box className={clsx(classes.block, classes.fixedBlock)}>
            </Box>
            <Box className={clsx(classes.block)}>
                <LogoIcon />
                <Typography variant="body1" className={classes.description}>
                    {t('splashScreen.description')}
                </Typography>
            </Box>
            <Box className={clsx(classes.block, classes.comingSoonBlock)}>
                <Typography variant="h5">
                    {t('comingSoon')}... 🔥
                </Typography>
            </Box>
            <Box className={clsx(classes.block, classes.cardsBlock)}>
            </Box>
        </Box>
    );
}

export default SplashScreen;
