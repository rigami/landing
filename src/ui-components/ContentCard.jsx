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
    },
    subtitle: { marginTop: theme.spacing(3) },
    actions: {
        padding: 0,
        paddingTop: theme.spacing(8),
    },
}));

function ContentCard(props) {
    const {
        className: externalClassName,
        title,
        subtitle,
        actions,
        children,
    } = props;
    const classes = useStyles();

    return (
        <Card elevation={0} variant="outlined" className={clsx(classes.root, externalClassName)}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="body1" className={classes.subtitle}>{subtitle}</Typography>
            {children}
            {actions && (
                <CardActions className={classes.actions}>
                    {actions}
                </CardActions>
            )}
        </Card>
    );
}

export default ContentCard;
