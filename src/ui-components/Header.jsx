import React from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: fade(theme.palette.background.paper, 0.5),
        backdropFilter: 'blur(70px)',
    },
    logo: {
        height: 30,
        width: 'auto',
    },
    toolbar: {
        maxWidth: theme.breakpoints.values.lg,
        width: '100%',
        margin: 'auto',
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <AppBar
            color="transparent" elevation={0} position="sticky"
            className={classes.root}
        >
            <Toolbar className={classes.toolbar}>
                <LogoIcon className={classes.logo} />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
