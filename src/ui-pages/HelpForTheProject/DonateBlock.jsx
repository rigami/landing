import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link,
    Box,
    GridList,
    GridListTile,
    CardMedia,
} from '@material-ui/core';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';
import { withTranslation } from 'next-i18next';
import tinkoffImageSrc from '@/resources/tinkoff-icon.png';
import paypalImageSrc from '@/resources/paypal-icon.png';
import bootsyImageSrc from '@/resources/bootsy-icon.png';
import kofiImageSrc from '@/resources/kofi-icon.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 480,
        [theme.breakpoints.down('xs')]: { minHeight: 360 },
    },
    subtitle: { maxWidth: 470 },
    actions: { paddingTop: theme.spacing(16) },
    wrapper: {
        marginTop: theme.spacing(4),
        maxWidth: 520,
    },
    link: {
        display: 'inline-block',
        backdropFilter: 'blur(30px)',
        '& > *': { verticalAlign: 'middle' },
    },
    linkIcon: {
        marginLeft: theme.spacing(1),
        width: 28,
        height: 28,
    },
    card: {
        height: 84,
        width: 260,
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'end',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 700,
        marginTop: theme.spacing(2),
    },
    image: {
        height: 70,
        width: 'auto',
    },
    gridItem: {
        background: 'none',
        padding: `${theme.spacing(2)}px 0`,
    },
}));

function DonateBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                subtitle: classes.subtitle,
                actions: classes.actions,
            }}
            title={t('donate.title')}
            subtitle={t('donate.description')}
            disableTextBackdrop
        >
            <Box className={classes.wrapper}>
                <GridList cols={2} spacing={1}>
                    {[
                        {
                            url: 'https://www.tinkoff.ru/sl/1zAH3HyZ54Q',
                            title: t('donate.list.tinkoff'),
                            image: tinkoffImageSrc,
                        },
                        {
                            url: 'https://paypal.me/danilkinkin',
                            title: t('donate.list.paypal'),
                            image: paypalImageSrc,
                        },
                        {
                            url: 'https://boosty.to/danilkinkin',
                            title: t('donate.list.bootsy'),
                            image: bootsyImageSrc,
                        },
                        {
                            url: 'https://ko-fi.com/danilkinkin',
                            title: t('donate.list.koFi'),
                            image: kofiImageSrc,
                        },
                    ].map(({ title, url, image }) => (
                        <GridListTile key={url} classes={{ tile: classes.gridItem }} style={{ height: 'auto' }}>
                            <Link href={url} target="_blank" color="textPrimary">
                                <Box className={classes.block}>
                                    <CardMedia className={classes.image} image={image} component="img" />
                                    <span className={classes.text}>
                                        {title}
                                        <ArrowIcon className={classes.linkIcon} />
                                    </span>
                                </Box>
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
        </ContentCard>
    );
}

export default withTranslation('helpForTheProjectPage')(DonateBlock);
