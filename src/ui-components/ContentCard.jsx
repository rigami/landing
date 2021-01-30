import React from 'react';
import {
    Card,
    CardActions,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8),
        borderRadius: 0,
        border: 'none',
        position: 'relative',
    },
    title: {
        maxWidth: 560,
        lineHeight: 0.9,
    },
    subtitle: {
        maxWidth: 560,
        marginTop: theme.spacing(3),
    },
    actions: {
        padding: 0,
        paddingTop: theme.spacing(8),
    },
}));

function ContentCard(props) {
    const {
        className: externalClassName,
        classes: externalClasses = {},
        title,
        subtitle,
        actions,
        children,
    } = props;
    const classes = useStyles();

    return (
        <Card
            elevation={0}
            variant="outlined"
            className={clsx(classes.root, externalClassName, externalClasses.root)}
        >
            {title && (
                <Typography
                    variant="h1"
                    className={clsx(classes.title, externalClasses.title)}
                >
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography
                    variant="body1"
                    className={clsx(classes.subtitle, externalClasses.subtitle)}
                >
                    {subtitle}
                </Typography>
            )}
            {children}
            {actions && (
                <CardActions className={clsx(classes.actions, externalClasses.actions)}>
                    {actions}
                </CardActions>
            )}
        </Card>
    );
}

export default ContentCard;
