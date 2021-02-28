import React, { Fragment, useEffect, useRef } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'next-i18next';
import HTML from '@/ui-components/HTML';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 480,
        [theme.breakpoints.down('xs')]: { flexBasis: '100% !important' },
        '& .ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item': { margin: '8px 8px 0 0' },
        '& .ya-share2__container_size_l .ya-share2__badge .ya-share2__icon': {
            height: '64px',
            width: '64px',
            backgroundSize: '64px 64px',
        },
        '& .ya-share2__item_copy .ya-share2__icon': {
            backgroundSize: '36px !important',
            width: '62px !important',
            height: '62px !important',
        },
        '& .ya-share2__item_copy .ya-share2__badge': {
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
        },
    },
    subtitle: { maxWidth: 470 },
    actions: {
        marginTop: 'auto',
        paddingTop: theme.spacing(6),
        [theme.breakpoints.down('xs')]: { paddingTop: 300 + theme.spacing(4) },
    },
    button: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('xs')]: { width: '100%' },
    },
}));

function ShareBlock({ t, className: externalClassname }) {
    const classes = useStyles();
    const router = useRouter();
    const el = useRef();

    useEffect(() => {
        const share = Ya.share2(el.current, {
            content: { url: location.origin },
            theme: {
                services: [
                    'vkontakte',
                    'facebook',
                    'odnoklassniki',
                    'telegram',
                    'twitter',
                    'viber',
                    'whatsapp',
                    'skype',
                    'tumblr',
                    'lj',
                    'blogger',
                    'digg',
                    'reddit',
                    'qzone',
                    'renren',
                    'sinaWeibo',
                    'surfingbird',
                    'tencentWeibo',
                ].join(','),
                lang: router.locale,
                size: 'l',
                curtain: true,
                copy: 'extraItem',
                shape: 'normal',
            },
        });

        return () => share.destroy();
    }, []);

    return (
        <Fragment>
            <ContentCard
                classes={{
                    root: clsx(classes.root, externalClassname),
                    subtitle: classes.subtitle,
                    actions: classes.actions,
                }}
                title={(<HTML>{t('share.title')}</HTML>)}
                subtitle={t('share.description')}
                actions={(<div ref={el} />)}
            />
        </Fragment>
    );
}

export default withTranslation('helpForTheProjectPage')(ShareBlock);
