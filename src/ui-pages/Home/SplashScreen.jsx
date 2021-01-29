import React, {
    useEffect,
    useState,
    Fragment,
    useRef,
} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Container,
} from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { KeyboardArrowDownRounded as ArrowDownIcon, HomeRounded as HomeIcon } from '@material-ui/icons';
import useMainStateStore from '@/utils/mainStateStore';
import LangSwitcher from '@/ui-components/LangSwitcher';
import CardLink, { BKMS_VARIANT } from '@/ui-components/Card';
import ContentCard from '@/ui-components/ContentCard';
import backgroundUrl from '@/resources/splashscreen-background.jpg';
import ContentButton from '@/ui-components/ContentButton';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 134px)',
        position: 'relative',
        display: 'grid',
    },
    backdrop: {
        backgroundImage: `url(${backgroundUrl})`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    content: {
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        margin: 'auto',
        marginLeft: theme.spacing(-8),
        maxWidth: 730,
    },
}));

function SplashScreen() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container className={classes.content}>
                <ContentCard
                    className={classes.card}
                    title={(
                        <Fragment>
                            Для сохранения всего.
                            <br />
                            Для доступа везде
                        </Fragment>
                    )}
                    subtitle="Rigami - это новая вкладка для браузера которая сочетает в себе минимализм и обширный функционал. Закладки, часы, дата и  текущяя погода, ничего лишнего"
                    actions={(
                        <ContentButton>Перейти в Chrome Web Store</ContentButton>
                    )}
                />
            </Container>
            <Box className={classes.backdrop} />
        </Box>
    );
}

export default SplashScreen;
