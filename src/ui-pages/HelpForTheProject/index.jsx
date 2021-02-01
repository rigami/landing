import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Header from '@/ui-components/Header';
import SplashScreen from '@/ui-components/SplashScreen';
import clsx from 'clsx';
import { Box, Container, Typography } from '@material-ui/core';
import DownloadButton from '@/ui-components/DownloadButton';
import DonateBlock from '@/ui-pages/HelpForTheProject/DonateBlock';
import ContentCard from '@/ui-components/ContentCard';
import FormBlock from './FormBlock';

const useStyles = makeStyles((theme) => ({
    splashScreen: { minHeight: 400 },
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

function HelpForTheProject() {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <SplashScreen className={classes.splashScreen}>
                <ContentCard titleVariant="h1" title="Как я могу помочь проекту?" />
            </SplashScreen>
            <main className={classes.contentWrapper}>
                <Box className={classes.content}>
                    <FormBlock className={classes.card} />
                    <DonateBlock className={classes.card} />
                    <Container
                        component="section"
                        className={clsx(classes.card, classes.fullWidthCard, classes.download)}
                        maxWidth={false}
                    >
                        <Typography variant="h1">
                            Или просто установите Rigami и наслаждайтесь
                        </Typography>
                        <DownloadButton className={classes.downloadButton} />
                    </Container>
                </Box>
            </main>
            <Footer />
        </Fragment>
    );
}

export default HelpForTheProject;
