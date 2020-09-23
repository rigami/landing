import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

function Skeleton({ variant, animation, width, height, className: externalClassName, ...other }) {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, externalClassName)} style={{ width, height }} />
    );
}

export default Skeleton;
