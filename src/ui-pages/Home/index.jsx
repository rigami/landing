import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import {
    Box, Container, Link, Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from '@/ui-components/Header';
import ContentCard from '@/ui-components/ContentCard';
import ContentButton from '@/ui-components/ContentButton';
// import Link from 'next/link';
import DownloadButton from '@/ui-components/DownloadButton';
import SplashScreen from './SplashScreen';
import BookmarksBlock from './BookmarksBlock';

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
        // borderRight: `1px solid ${theme.palette.divider}`,
        // '&:last-child': { borderRight: 'none' },
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

function Home() {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <SplashScreen />
            <Box className={classes.contentWrapper}>
                <Box className={classes.content}>
                    <ContentCard
                        className={clsx(classes.card, classes.fullWidthCard)}
                        title="Всё самое важное и ничего больше"
                        subtitle="Чистота и минимум деталей, только то что нужно, отличная кастомизация и огромный функционал. "
                    />
                    <ContentCard
                        className={classes.card}
                        title="Станьте частью проекта"
                        subtitle="На текущий момент проект находится в активной разработке и недоступен для широкой публики, но вы можете присоединиться и помочь довести его до всего мира быстрее. Ваша помошь не останеться незамеченой."
                        actions={(
                            <ContentButton
                                component={Link}
                                href="/help-for-the-project"
                            >
                                Как я могу помочь?
                            </ContentButton>
                        )}
                    />
                    <ContentCard
                        className={classes.card}
                        title="Любой формат фона"
                        subtitle="Поддержка огромного количества файлов для фона, а так же настраевыемые потоки фонов. "
                    />
                    <BookmarksBlock className={classes.card} />
                    <ContentCard
                        className={classes.card}
                        title="Чистота привыше всего"
                    />
                    <Container className={clsx(classes.card, classes.fullWidthCard, classes.download)} maxWidth={false}>
                        <Typography variant="h1">
                            Установите.
                            <br />
                            Попробуйте.
                            <br />
                            Вам понравится.
                        </Typography>
                        <DownloadButton className={classes.downloadButton} />
                    </Container>
                </Box>
            </Box>
            <Footer />
        </Fragment>
    );
}

export default Home;
