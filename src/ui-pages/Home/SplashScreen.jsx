import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import ContentCard from '@/ui-components/ContentCard';
import backgroundUrl from '@/resources/splashscreen-background.jpg';
import DownloadButton from '@/ui-components/DownloadButton';
import { decode } from 'blurhash';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 180px)',
        position: 'relative',
        display: 'grid',
        overflow: 'hidden',
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
        marginRight: theme.spacing(8),
        maxWidth: 730,
        minWidth: 'min-content',
    },
    title: {
        lineHeight: 1.3,
        fontSize: '2.3rem',
    },
    preloadStub: {
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
    },
    hidePreloadStub: { opacity: 0 },
}));

function SplashScreen() {
    const classes = useStyles();
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const pixels = decode('LB9tif~p9FIpo|x[-o%2aJt6%2s.', window.innerWidth, window.innerHeight);

        const canvas = document.getElementById('preload-image');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(window.innerWidth, window.innerHeight);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);

        const imgPreload = new Image();
        imgPreload.onload = () => {
            setBgLoaded(true);
        };
        imgPreload.onerror = () => {

        };
        imgPreload.src = backgroundUrl;
    }, []);

    return (
        <section className={classes.root}>
            <Container className={classes.content}>
                <ContentCard
                    classes={{
                        root: classes.card,
                        title: classes.title,
                    }}
                    title={(
                        <Fragment>
                            Для сохранения всего.
                            <br />
                            Для доступа везде
                        </Fragment>
                    )}
                    subtitle={(
                        <Fragment>
                            Rigami - это новая вкладка для браузера
                            которая сочетает в себе минимализм и обширный функционал.
                            Закладки, часы, дата и  текущая погода, ничего лишнего
                        </Fragment>
                    )}
                    actions={(
                        <DownloadButton />
                    )}
                />
            </Container>
            <Box className={classes.backdrop}>
                <canvas id="preload-image" className={clsx(classes.preloadStub, bgLoaded && classes.hidePreloadStub)} />
            </Box>
        </section>
    );
}

export default SplashScreen;
