import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import {
    Box, CardMedia, Container, Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import sctBookmarksUrl from '@/resources/screenshot-bookmarks.jpg';
import TestingBlock from './TestingBlock';
import SplashScreen from './SplashScreen';
import FeaturesBlock from './FeaturesBlock';

const useStyles = makeStyles((theme) => ({
    screenshot: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[16],
    },
    bookmarksBlockWrp: { backgroundColor: '#F6F6F6' },
    bookmarksBlock: {
        textAlign: 'center',
        height: 'calc(70vh)',
        minHeight: 500,
        overflow: 'hidden',
        paddingTop: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sctBookmarks: {
        marginTop: theme.spacing(14),
        width: '100%',
        minWidth: 660,
    },
}));

function Home() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Fragment>
            <SplashScreen />
            <div>
                <TestingBlock />
                <Box className={classes.bookmarksBlockWrp}>
                    <Container className={classes.bookmarksBlock} maxWidth="md">
                        <Typography variant="body1">{t('bookmarks.description')}</Typography>
                        <CardMedia
                            image={sctBookmarksUrl}
                            component="img"
                            className={clsx(classes.sctBookmarks, classes.screenshot)}
                        />
                    </Container>
                </Box>
                <FeaturesBlock />
            </div>
            <Footer />
        </Fragment>
    );
}

export default Home;
