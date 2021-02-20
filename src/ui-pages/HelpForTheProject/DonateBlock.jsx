import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItem } from '@material-ui/core';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';
import donateImageUrl from '@/resources/clear-donate-background.png';
import { withTranslation } from '@/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${donateImageUrl}), linear-gradient(241.37deg, #F7F7F7 27.72%, #EBEBEC 81.74%)`,
        backgroundSize: '470px, 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        minHeight: 480,
        [theme.breakpoints.down('xs')]: {
            backgroundSize: '300px, 100%',
            minHeight: 360,
        },
    },
    subtitle: { maxWidth: 470 },
    actions: { paddingTop: theme.spacing(16) },
    list: {
        marginTop: theme.spacing(4),
        maxWidth: 450,
    },
    link: {
        display: 'inline-block',
        backdropFilter: 'blur(30px)',
        '& > *': { verticalAlign: 'middle' },
    },
    linkIcon: {
        marginLeft: theme.spacing(1),
        width: 20,
        height: 20,
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
            <List dense className={classes.list} disablePadding>
                {[
                    {
                        url: 'https://www.tinkoff.ru/sl/1zAH3HyZ54Q',
                        title: t('donate.list.tinkoff'),
                    },
                    {
                        url: 'paypal.me/danilkinkin',
                        title: t('donate.list.paypal'),
                    },
                    {
                        url: 'https://boosty.to/danilkinkin',
                        title: t('donate.list.bootsy'),
                    },
                    {
                        url: 'https://ko-fi.com/danilkinkin',
                        title: t('donate.list.koFi'),
                    },
                ].map(({ url, title }) => (
                    <ListItem key={url} disableGutters>
                        <Link href={url} target="_blank" className={classes.link}>
                            {title}
                            <ArrowIcon className={classes.linkIcon} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </ContentCard>
    );
}

export default withTranslation('helpForTheProjectPage')(DonateBlock);
