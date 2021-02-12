import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import backgroundUrl from '@/resources/splashscreen-background.jpg';
import { decode } from 'blurhash';
import clsx from 'clsx';

const RENDER_SIZE = 32;
const PIXELS = decode('LB9tif~p9FIpo|x[-o%2aJt6%2s.', RENDER_SIZE, RENDER_SIZE);

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
    preloadStub: {
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        width: '100%',
        height: '100%',
    },
    hidePreloadStub: { opacity: 0 },
}));

function SplashScreen({ children, className: externalClassName }) {
    const classes = useStyles();
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById('preload-image');
        canvas.width = RENDER_SIZE;
        canvas.height = RENDER_SIZE;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(RENDER_SIZE, RENDER_SIZE);
        imageData.data.set(PIXELS);
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
        <section className={clsx(classes.root, externalClassName)}>
            {children && (
                <Container className={classes.content}>
                    {children}
                </Container>
            )}
            <Box className={classes.backdrop}>
                <canvas id="preload-image" className={clsx(classes.preloadStub, bgLoaded && classes.hidePreloadStub)} />
            </Box>
        </section>
    );
}

export default SplashScreen;
