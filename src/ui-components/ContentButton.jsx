import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 0,
        textTransform: 'unset',
        padding: theme.spacing(2.25, 3.25),
    },
}));

function ContentButton({ children, className: externalClassName, ...other }) {
    const classes = useStyles();

    return (
        <Button
            variant="outlined"
            className={clsx(classes.root, externalClassName)}
            {...other}
        >
            {children}
        </Button>
    );
}

export default ContentButton;
