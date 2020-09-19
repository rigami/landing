import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
// import LogoIcon from '../../resources/logo.svg';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },
    comingSoonBlock: {
        maxHeight: 100,
    },
}));

function SplashScreen() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={clsx(classes.block)}>
                {/* <LogoIcon /> */}
                Logo
                <Typography variant="body1">
                    Create to unit
                </Typography>
            </Box>
            <Box className={clsx(classes.block, classes.comingSoonBlock)}>
                <Typography variant="h5">
                    Coming Soon... 🔥
                </Typography>
            </Box>
            <Box className={clsx(classes.block)}>
            </Box>
        </Box>
    );
}

export default SplashScreen;
