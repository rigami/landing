import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import {
    Box,
    Container,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from '@/ui-components/Header';
import DownloadButton from '@/ui-components/DownloadButton';
import { withTranslation } from 'next-i18next';
import HTML from '@/ui-components/HTML';
import SplashScreen from './SplashScreen';
import BookmarksBlock from './BookmarksBlock';
import HelpForTheProjectBlock from './HelpForTheProjectBlock';
import DemoBlock from './DemoBlock';
import BackgroundsBlock from './BackgroundsBlock';
import ClearInterfaceBlock from './ClearInterfaceBlock';

const useStyles = makeStyles((theme) => ({
    contentWrapper: { overflow: 'hidden' },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.divider,
        margin: -0.5,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    card: {
        flexGrow: 1,
        margin: 0.5,
        flexBasis: 'calc(50% - 1px)',
        flexShrink: 0,
        minWidth: 'min-content',
    },
    fullWidthCard: { flexBasis: '100%' },
    download: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        textAlign: 'center',
        minHeight: 550,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadButton: { marginTop: theme.spacing(4) },
}));

function Home({ t }) {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <SplashScreen />
            <main className={classes.contentWrapper}>
                <Box className={classes.content}>
                    <DemoBlock className={clsx(classes.card, classes.fullWidthCard)} />
                    <HelpForTheProjectBlock className={classes.card} />
                    <BackgroundsBlock className={classes.card} />
                    <BookmarksBlock className={classes.card} />
                    <ClearInterfaceBlock className={classes.card} />
                    <Container
                        component="section"
                        className={clsx(classes.card, classes.fullWidthCard, classes.download)}
                        maxWidth={false}
                    >
                        <Typography variant="h1">
                            <HTML>{t('offerToInstall')}</HTML>
                        </Typography>
                        <DownloadButton className={classes.downloadButton} />
                    </Container>
                </Box>
            </main>
            <Footer />
        </Fragment>
    );
}

export default withTranslation('indexPage')(Home);
