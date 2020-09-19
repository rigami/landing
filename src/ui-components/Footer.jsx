import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import LogoIcon from '@/resources/logo_studio.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 320,
        width: '100%',
        padding: theme.spacing(4),
        maxWidth: 1600,
        margin: 'auto',
    },
    designedByBlock: {
        marginLeft: 'auto',
        marginTop: 'auto',
    },
    designedByLabel: {
        maxHeight: 100,
        marginBottom: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.designedByBlock}>
                <Typography variant="body2" className={classes.designedByLabel}>
                    Designed by
                </Typography>
                <LogoIcon />
            </Box>
        </Box>
    );
}

export default Footer;
