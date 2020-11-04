import React, { Fragment } from 'react';
import SplashScreen from '@/ui-pages/Home/SplashScreen';
import {
    Box,
    Button,
    CardMedia,
    Container,
    Link,
    Typography,
} from '@material-ui/core';
import Footer from '@/ui-components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import sctMainUrl from '@/resources/screenshot-main.jpg';
import sctBookmarksUrl from '@/resources/screenshot-bookmarks.jpg';
import { NavigateNextRounded as ArrowRightIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    wrapper: { padding: theme.spacing(4) },
    header: { textAlign: 'center' },
    pageWrapper: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    mainBlockWrp: { overflow: 'hidden' },
    mainBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 'calc(100vh - 115px)',
    },
    mainBlockText: {
        marginRight: theme.spacing(6),
        maxWidth: 440,
        width: '100%',
        flexGrow: 1,
        flexShrink: 0,
    },
    screenshot: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[16],
    },
    sctMain: {
        height: '74vh',
        maxHeight: 900,
        minHeight: 200,
        width: 'auto',
        transform: 'translateX(10vw)',
        marginLeft: 'auto',
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
    finalBlock: {
        textAlign: 'center',
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(16),
    },
    extLink: { marginTop: theme.spacing(4) },
}));

function MigrateFromClockTabPage() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Fragment>
            <SplashScreen shrink />
            <Box className={classes.mainBlockWrp}>
                <Container className={classes.mainBlock}>
                    <Box className={classes.mainBlockText}>
                        <Typography variant="h3">{t('page.migrateFromClockTab.title')}</Typography>
                        <Typography variant="body1">{t('page.migrateFromClockTab.description')}</Typography>
                        <Button
                            component={Link}
                            href="https://chrome.google.com/webstore/detail/rigami-%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0/hdpjmahlkfndaejogipnepcgdmjiamhd"
                            underline="none"
                            target="_blank"
                            variant="contained"
                            color="primary"
                            endIcon={(<ArrowRightIcon />)}
                            className={classes.extLink}
                        >
                            {t('page.migrateFromClockTab.download')}
                        </Button>
                    </Box>
                    <CardMedia image={sctMainUrl} component="img" className={clsx(classes.sctMain, classes.screenshot)} />
                </Container>
            </Box>
            <Box className={classes.bookmarksBlockWrp}>
                <Container className={classes.bookmarksBlock} maxWidth="md">
                    <Typography variant="body1">{t('page.migrateFromClockTab.bookmarks.description')}</Typography>
                    <CardMedia image={sctBookmarksUrl} component="img" className={clsx(classes.sctBookmarks, classes.screenshot)} />
                </Container>
            </Box>
            <Container className={classes.finalBlock} maxWidth="sm">
                <Typography variant="body1">{t('page.migrateFromClockTab.finalDescription')}</Typography>
                <Button
                    component={Link}
                    href="https://chrome.google.com/webstore/detail/rigami-%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0/hdpjmahlkfndaejogipnepcgdmjiamhd"
                    underline="none"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    endIcon={(<ArrowRightIcon />)}
                    className={classes.extLink}
                >
                    {t('page.migrateFromClockTab.download')}
                </Button>
            </Container>
            <Footer />
        </Fragment>
    );
}

export default MigrateFromClockTabPage;
