import React from "react";
import {Card, Box, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(4),
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: 1600,
        margin: 'auto',
        marginTop: '20vh',
        marginBottom: '20vh',
    },
    textBlock: {
        maxWidth: 496,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2, 5),
        marginBottom: theme.spacing(4),
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
    const { t } = useTranslation();

    return (
        <Box className={classes.wrapper}>
            <TextBlock
                title={t('features.crossPlatform.title')}
                text={t('features.crossPlatform.description')}
            />
            <TextBlock
                title={t('features.simplicity.title')}
                text={t('features.simplicity.description')}
            />
            <TextBlock
                title={t('features.comfortable.title')}
                text={t('features.comfortable.description')}
            />
        </Box>
    );
}

export default FeaturesBlock;
