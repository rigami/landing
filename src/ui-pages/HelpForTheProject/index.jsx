import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Header from '@/ui-components/Header';
import clsx from 'clsx';
import {
    Box,
    Container,
    Divider,
    Typography,
} from '@material-ui/core';
import DownloadButton from '@/ui-components/DownloadButton';
import DonateBlock from '@/ui-pages/HelpForTheProject/DonateBlock';
import ContentCard from '@/ui-components/ContentCard';
import { withTranslation } from 'next-i18next';
import HTML from '@/ui-components/HTML';
import FormBlock from './FormBlock';

const useStyles = makeStyles((theme) => ({
    splashScreen: {
        minHeight: 470,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: { minHeight: 300 },
    },
    splashScreenCard: { paddingLeft: 0 },
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

function HelpForTheProject({ t }) {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <Container className={classes.splashScreen}>
                <ContentCard
                    className={classes.splashScreenCard}
                    titleVariant="h1"
                    title={(<HTML>{t('title')}</HTML>)}
                />
            </Container>
            <Divider />
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

export default withTranslation('helpForTheProjectPage')(HelpForTheProject);
