import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import CardLink, { BKMS_VARIANT } from "@/ui-components/Card";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

function Cards() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CardLink
                name="Test card"
                categories={['#f00']}
                icoVariant={BKMS_VARIANT.SMALL}
                description="Test card description"
                imageUrl=""
            />
        </Box>
    );
}

export default Cards;
