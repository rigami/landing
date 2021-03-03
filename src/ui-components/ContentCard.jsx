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
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: { padding: theme.spacing(2) },
    },
    title: {
        maxWidth: 560,
        lineHeight: 0.9,
        position: 'relative',
        zIndex: 1,
    },
    subtitle: {
        maxWidth: 560,
        position: 'relative',
        zIndex: 1,
    },
    bottomOffset: { marginBottom: theme.spacing(3) },
    actions: {
        padding: 0,
        paddingTop: theme.spacing(8),
    },
}));

function ContentTitle({ children, variant = 'h2', className: externalClassName, bottomOffset = false }) {
    const classes = useStyles();

    return (
        <Typography
            variant={variant}
            className={clsx(classes.title, bottomOffset && classes.bottomOffset, externalClassName)}
        >
            {children}
        </Typography>
    );
}

function ContentSubTitle({ children, variant = 'body1', className: externalClassName, bottomOffset = false }) {
    const classes = useStyles();

    return (
        <Typography
            variant={variant}
            className={clsx(
                classes.subtitle,
                bottomOffset && classes.bottomOffset,
                externalClassName,
            )}
        >
            {children}
        </Typography>
    );
}

function ContentCard(props, ref) {
    const {
        title,
        subtitle,
        actions,
        titleVariant = 'h1',
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
                <ContentTitle
                    variant={titleVariant}
                    className={externalClasses.title}
                    bottomOffset={subtitle}
                >
                    {title}
                </ContentTitle>
            )}
            {subtitle && (
                <ContentSubTitle
                    className={externalClasses.subtitle}
                    bottomOffset={children}
                >
                    {subtitle}
                </ContentSubTitle>
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
export { ContentTitle, ContentSubTitle };
