import React, { forwardRef } from 'react';
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
    subtitle: { maxWidth: 560 },
    subtitleOffset: { marginTop: theme.spacing(3) },
    actions: {
        padding: 0,
        paddingTop: theme.spacing(8),
    },
}));

function ContentCard(props, ref) {
    const {
        title,
        subtitle,
        actions,
        titleVariant = 'h2',
        className: externalClassName,
        classes: externalClasses = {},
        children,
    } = props;
    const classes = useStyles();

    return (
        <Card
            component="section"
            ref={ref}
            elevation={0}
            variant="outlined"
            className={clsx(classes.root, externalClassName, externalClasses.root)}
        >
            {title && (
                <Typography
                    variant={titleVariant}
                    className={clsx(classes.title, externalClasses.title)}
                >
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography
                    variant="body1"
                    className={clsx(
                        classes.subtitle,
                        title && classes.subtitleOffset,
                        externalClasses.subtitle,
                    )}
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

export default forwardRef(ContentCard);
