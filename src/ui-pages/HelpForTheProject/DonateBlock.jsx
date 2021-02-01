import React, { Fragment } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ContentButton from '@/ui-components/ContentButton';
import { Link, List, ListItem } from '@material-ui/core';
import testingImageUrl from '@/resources/testing.png';
import {
    ArrowForwardRounded as ArrowIcon,
    BookmarkRounded as ImageIcon,
    GifRounded as GIFIcon,
    MovieRounded as VideoIcon,
} from '@material-ui/icons';
import SmallListItem from '@/ui-components/SmallListItem';
import donateImageUrl from '@/resources/clear-donate-background.png';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${donateImageUrl}), linear-gradient(241.37deg, #F7F7F7 27.72%, #EBEBEC 81.74%)`,
        backgroundSize: '470px, 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        minHeight: 480,
    },
    subtitle: { maxWidth: 470 },
    actions: { paddingTop: theme.spacing(16) },
    list: {
        marginTop: theme.spacing(4),
        maxWidth: 450,
    },
    link: {
        display: 'inline-block',
        '& > *': { verticalAlign: 'middle' },
    },
    linkIcon: {
        marginLeft: theme.spacing(1),
        width: 20,
        height: 20,
    },
}));

function DonateBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                subtitle: classes.subtitle,
                actions: classes.actions,
            }}
            title="Купите мне кофе"
            subtitle="Вы можете пожертвовать небольшую сумму на разработку, мне будет приятно"
        >
            <List dense className={classes.list} disablePadding>
                {[
                    {
                        url: 'https://www.tinkoff.ru/sl/1zAH3HyZ54Q',
                        title: 'Через Tinkoff',
                    },
                    {
                        url: 'https://boosty.to/danilkinkin',
                        title: 'Поддержать в Bootsy',
                    },
                    /* {
                        url: 'https://ko-fi.com/danilkinkin',
                        title: 'Поддержать в Ko-Fi',
                    }, */
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

export default DonateBlock;
