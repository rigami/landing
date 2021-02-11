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
import demoVideoUrl from '@/resources/demo.mkv';
import demoVideoPreviewUrl from '@/resources/demo-preview.jpg';
import { withTranslation } from '@/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 612,
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: { flexWrap: 'wrap-reverse' },
    },
    info: {
        minWidth: 'min-content',
        flexShrink: 1,
    },
    title: { maxWidth: 650 },
    subtitle: { maxWidth: 400 },
    list: { marginTop: theme.spacing(8) },
    demoWrapper: {
        padding: theme.spacing(8),
        [theme.breakpoints.down('xs')]: { padding: theme.spacing(2) },
        flexShrink: 1,
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        [theme.breakpoints.up('md')]: { paddingLeft: 0 },
        [theme.breakpoints.down('sm')]: { paddingBottom: 0 },
    },
    demo: {
        height: 'auto',
        width: '100%',
        maxWidth: 954,
        boxShadow: theme.shadows[6],
        borderRadius: theme.shape.borderRadius,
        zIndex: 1,
        margin: 'auto',
        backgroundColor: theme.palette.background.default,
    },
}));

function DemoBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <section className={clsx(classes.root, externalClassname)}>
            <ContentCard
                titleVariant="h1"
                classes={{
                    root: classes.info,
                    title: classes.title,
                    subtitle: classes.subtitle,
                }}
                title={t('demo.title')}
                subtitle={t('demo.description')}
            >
                <List dense className={classes.list} disablePadding>
                    <SmallListItem icon={(<BackgroundsIcon />)} title={t('demo.features.backgrounds')} />
                    <SmallListItem icon={(<BookmarksIcon />)} title={t('demo.features.bookmarks')} />
                    <SmallListItem icon={(<WeatherIcon />)} title={t('demo.features.weather')} />
                    <SmallListItem icon={(<DateTimeIcon />)} title={t('demo.features.date&time')} />
                </List>
            </ContentCard>
            <Box className={classes.demoWrapper}>
                <CardMedia
                    className={classes.demo}
                    src={demoVideoUrl}
                    component="video"
                    poster={demoVideoPreviewUrl}
                    autoPlay
                    loop
                    muted
                />
            </Box>
        </section>
    );
}

export default withTranslation('indexPage')(DemoBlock);
