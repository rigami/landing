import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import CardLink, { BKMS_VARIANT } from '@/ui-components/Card';
import { makeStyles } from '@material-ui/core/styles';
import elementaryPosterSrc from '@/resources/elementary_poster.png';
import mdnIconSrc from '@/resources/mdn_icon.png';
import { withTranslation } from '@/i18n';
import HTML from '@/ui-components/HTML';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 612,
        paddingRight: theme.spacing(27),
        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(2),
            minHeight: 550,
            flexBasis: '100% !important',
        },
    },
    title: { maxWidth: 650 },
    subtitle: { maxWidth: 400 },
    card: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    card1: {
        transform: 'translate(-60px, -140px)',
        boxShadow: theme.shadows[3],
        [theme.breakpoints.down('xs')]: { transform: 'translate(-10px, -70px) scale(0.8)' },
    },
    card2: {
        transform: 'translate(-130px, 25px)',
        boxShadow: theme.shadows[15],
        [theme.breakpoints.down('xs')]: { transform: 'translate(-70px, 25px) scale(0.8)' },
    },
    card3: {
        transform: 'translate(-235px, -55px)',
        boxShadow: theme.shadows[20],
        [theme.breakpoints.down('xs')]: { transform: 'translate(-155px, -25px) scale(0.8)' },
    },
}));

function BookmarksBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            titleVariant="h1"
            classes={{
                root: clsx(classes.root, externalClassname),
                title: classes.title,
                subtitle: classes.subtitle,
            }}
            title={t('bookmarks.title')}
            subtitle={t('bookmarks.description')}
        >
            <CardLink
                name="How to Revitalize Your Mac or Windows PC ⋅ elementary Blog"
                description="Bring back a struggling computer with elementary OS"
                categories={[
                    '#8DD5FF',
                    '#FF5252',
                    '#44D7B3',
                    '#6719CB',
                ]}
                icoVariant={BKMS_VARIANT.POSTER}
                imageUrl={elementaryPosterSrc}
                className={clsx(classes.card, classes.card1)}
            />
            <CardLink
                name={t('bookmarks.cards.mdn.name')}
                description={t('bookmarks.cards.mdn.description')}
                icoVariant={BKMS_VARIANT.SMALL}
                imageUrl={mdnIconSrc}
                className={clsx(classes.card, classes.card2)}
            />
            <CardLink
                name={t('bookmarks.cards.toDo.name')}
                description={(<HTML>{t('bookmarks.cards.toDo.description')}</HTML>)}
                categories={[
                    '#8DD5FF',
                    '#0000FF',
                    '#FF9153',
                    '#DC22FB',
                ]}
                icoVariant={BKMS_VARIANT.NOTE}
                className={clsx(classes.card, classes.card3)}
            />
        </ContentCard>
    );
}

export default withTranslation('indexPage')(BookmarksBlock);
