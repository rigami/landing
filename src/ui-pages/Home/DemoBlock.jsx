import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardMedia,
    List,
    Box,
} from '@material-ui/core';
import {
    PhotoRounded as BackgroundsIcon,
    BookmarkRounded as BookmarksIcon,
    CloudRounded as WeatherIcon,
    QueryBuilderRounded as DateTimeIcon,
} from '@material-ui/icons';
import SmallListItem from '@/ui-components/SmallListItem';

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
                    <SmallListItem icon={(<BackgroundsIcon />)} title="Фоны любых форматов" />
                    <SmallListItem icon={(<BookmarksIcon />)} title="Закладки всегда под рукой" />
                    <SmallListItem icon={(<WeatherIcon />)} title="Текущая температура за окном" />
                    <SmallListItem icon={(<DateTimeIcon />)} title="Дата и время" />
                </List>
            </ContentCard>
            <Box className={classes.demoWrapper}>
                <CardMedia className={classes.demo} />
            </Box>
        </Box>
    );
}

export default DemoBlock;
