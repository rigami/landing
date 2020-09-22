import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: { transition: '0.6s ease' },
    rootHide: {
        transform: 'translateY(0.3vh)',
        opacity: 0,
    },
}));

function SmoothLoad({ children }) {
    const classes = useStyles();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => { setIsShow(true); }, []);

    return (
        <Box className={clsx(classes.root, !isShow && classes.rootHide)}>
            {children}
        </Box>
    );
}

export default SmoothLoad;
