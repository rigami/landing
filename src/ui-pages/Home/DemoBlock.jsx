import React from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(4),
    },
}));

function DemoBlock() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h5">
                Coming Soon... 🔥
            </Typography>
        </Box>
    );
}

export default DemoBlock;
