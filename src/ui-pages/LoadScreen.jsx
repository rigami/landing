import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: { transition: '0.6s ease' },
    rootHide: {
        transform: 'translateY(0.3vh)',
        opacity: 0,
    },
}));

function LoadScreen() {
    const classes = useStyles();

    return (
        <Box className={classes.root} />
    );
}

export default LoadScreen;
