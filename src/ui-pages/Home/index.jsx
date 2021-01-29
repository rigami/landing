import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import {
    Box, CardMedia, Container, Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import sctBookmarksUrl from '@/resources/screenshot-bookmarks.jpg';
import Header from '@/ui-components/Header';
import ContentCard from '@/ui-components/ContentCard';
import ContentButton from '@/ui-components/ContentButton';
import TestingBlock from './TestingBlock';
import SplashScreen from './SplashScreen';
import FeaturesBlock from './FeaturesBlock';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        // borderBottom: `1px solid ${theme.palette.divider}`,
    },
    card: {
        flexGrow: 1,
        // borderRight: `1px solid ${theme.palette.divider}`,
        // '&:last-child': { borderRight: 'none' },
    },
    fullWidthCard: { width: '100%' },
}));

function Home() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Fragment>
            <Header />
            <SplashScreen />
            <Box className={classes.content}>
                <ContentCard
                    className={classes.card}
                    title="title"
                    subtitle="subtitle"
                    actions={(
                        <ContentButton>Перейти в Chrome Web Store</ContentButton>
                    )}
                />
                <ContentCard
                    className={classes.card}
                    title="title"
                    subtitle="subtitle"
                />
                <ContentCard
                    className={clsx(classes.card, classes.fullWidthCard)}
                    title="Full width card"
                    subtitle="subtitle"
                />
                <ContentCard
                    className={classes.card}
                    title="title"
                    subtitle="subtitle"
                />
                <ContentCard
                    className={classes.card}
                    title="title"
                    subtitle="subtitle"
                />
            </Box>
            <Footer />
        </Fragment>
    );
}

export default Home;
