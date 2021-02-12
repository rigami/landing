import React, { useEffect, useRef } from 'react';
import { CardMedia } from '@material-ui/core';

function AutoPlayVideo({ src, poster, className: externalClassName, ...other }) {
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
        ref.current.onloadeddata = () => {
            if (ref.current?.play) ref.current.play();
        };
        ref.current.load();
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
