import React, { Fragment } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
} from '@material-ui/core';

import {
    PhotoRounded as BackgroundsIcon,
    BookmarkRounded as BookmarksIcon,
    CloudRounded as WeatherIcon,
    QueryBuilderRounded as DateTimeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 612,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        backgroundColor: theme.palette.background.paper,
    },
    info: { minWidth: 'min-content' },
    title: { maxWidth: 650 },
    subtitle: { maxWidth: 400 },
    list: { marginTop: theme.spacing(8) },
    listItemIcon: { minWidth: theme.spacing(5) },
    demoWrapper: { padding: theme.spacing(8) },
    demo: {
        height: 570,
        width: 934,
        boxShadow: theme.shadows[6],
        borderRadius: theme.shape.borderRadius,
        zIndex: 1,
        margin: 'auto',
        backgroundColor: theme.palette.background.default,
    },
}));

function ItemList({ icon, title }) {
    const classes = useStyles();

    return (
        <ListItem disableGutters>
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
}

function DemoBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <Box className={clsx(classes.root, externalClassname)}>
            <ContentCard
                classes={{
                    root: classes.info,
                    title: classes.title,
                    subtitle: classes.subtitle,
                }}
                title="Всё самое важное и ничего больше"
                subtitle="Чистота и минимум деталей, только то что нужно, отличная кастомизация и огромный функционал."
            >
                <List dense className={classes.list} disablePadding>
                    <ItemList icon={(<BackgroundsIcon />)} title="Фоны любых форматов" />
                    <ItemList icon={(<BookmarksIcon />)} title="Закладки всегда под рукой" />
                    <ItemList icon={(<WeatherIcon />)} title="Текущая температура за окном" />
                    <ItemList icon={(<DateTimeIcon />)} title="Дата и время" />
                </List>
            </ContentCard>
            <Box className={classes.demoWrapper}>
                <CardMedia className={classes.demo} />
            </Box>
        </Box>
    );
}

export default DemoBlock;
