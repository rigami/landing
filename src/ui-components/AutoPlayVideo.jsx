import React, { useEffect, useRef } from 'react';
import { CardMedia } from '@material-ui/core';

function AutoPlayVideo({ src, poster, className: externalClassName, ...other }) {
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
        ref.current.onloadeddata = () => {
            console.log('video loaded');
            ref.current.play();
        };
        ref.current.load();
        console.log('start load video');
    }, [ref.current]);

    return (
        <CardMedia
            ref={ref}
            className={externalClassName}
            src={src}
            component="video"
            poster={poster}
            autoPlay={false}
            preload="none"
            loop
            muted
            {...other}
        />
    );
}

export default AutoPlayVideo;
