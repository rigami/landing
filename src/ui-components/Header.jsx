import React from 'react';
import {
    AppBar,
    Link,
    Toolbar,
    Tooltip,
} from '@material-ui/core';
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
    homeLink: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(-1),
        padding: theme.spacing(1),
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
                <Tooltip title="Вернуться домой">
                    <Link className={classes.homeLink} href="/">
                        <LogoIcon className={classes.logo} />
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
