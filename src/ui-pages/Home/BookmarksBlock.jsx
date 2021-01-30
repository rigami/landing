import React, { Fragment } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import CardLink, { BKMS_VARIANT } from '@/ui-components/Card';
import { makeStyles } from '@material-ui/core/styles';
import elementaryPosterSrc from '@/resources/elementary_poster.png';
import mdnIconSrc from '@/resources/mdn_icon.png';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        minHeight: 612,
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
    },
    card2: {
        transform: 'translate(-130px, 25px)',
        boxShadow: theme.shadows[15],
    },
    card3: {
        transform: 'translate(-235px, -55px)',
        boxShadow: theme.shadows[20],
    },
}));

function BookmarksBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                title: classes.title,
                subtitle: classes.subtitle,
            }}
            title="Удобные и красивые закладки"
            subtitle="Папки, теги - всё для быстрого и удобного доступа к нужным закладкам"
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
                name="Веб-документация MDN"
                description="Веб-документация на MDN предоставляет собой информацию об открытых веб-технолог..."
                icoVariant={BKMS_VARIANT.SMALL}
                imageUrl={mdnIconSrc}
                className={clsx(classes.card, classes.card2)}
            />
            <CardLink
                name="Список задач перед релизом"
                description={(
                    <Fragment>
                        Вещи которые нужно незабыть сделать перед релизом:
                        <br />
                        <br />
                        - Написать changelog
                        <br />
                        - Указать номер  новой версии
                        <br />
                        - Проверить миграцию
                    </Fragment>
                )}
                categories={[
                    '#8DD5FF',
                    '#0000FF',
                    '#FF9153',
                    '#FF9153',
                ]}
                icoVariant={BKMS_VARIANT.NOTE}
                className={clsx(classes.card, classes.card3)}
            />
        </ContentCard>
    );
}

export default BookmarksBlock;
