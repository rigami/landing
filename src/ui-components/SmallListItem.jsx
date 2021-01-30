import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItemIcon: {
        minWidth: theme.spacing(5),
        alignSelf: 'flex-start',
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.text.primary,
    },
    secondaryText: { marginTop: theme.spacing(0.5) },
}));

function ItemList({ icon, title, subtitle }) {
    const classes = useStyles();

    return (
        <ListItem disableGutters>
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText
                classes={{ secondary: classes.secondaryText }}
                primary={title}
                secondary={subtitle}
            />
        </ListItem>
    );
}

export default ItemList;
