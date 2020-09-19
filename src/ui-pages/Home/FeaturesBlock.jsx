import React from "react";
import {Card, Box, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: 1600,
        margin: 'auto',
        marginTop: '20vh',
        marginBottom: '20vh',
    },
    textBlock: {
        maxWidth: 460,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
}));

function TextBlock({ title, text }) {
    const classes = useStyles();

    return (
        <Box className={classes.textBlock}>
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
            <Typography variant="body1" className={classes.text}>
                {text}
            </Typography>
        </Box>
    );
}

function FeaturesBlock() {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <TextBlock
                title="Cross-platform"
                text={
                    `One of the most important goals, the creation of a product, 
                    when working with which you will not need to think about what system you use it on, 
                    you can access it from almost any device`
                }
            />
            <TextBlock
                title="Simplicity"
                text={
                    `Ease of use is also very important, 
                    so that anyone can use the product without special difficulties and skills.`
                }
            />
            <TextBlock
                title="Comfortable"
                text="The product should be user-friendly, with a good understandable UI / UX"
            />
        </Box>
    );
}

export default FeaturesBlock;
