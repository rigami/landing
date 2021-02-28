import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImageUrl from '@/resources/clear-interface-background.png';
import { withTranslation } from 'next-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${backgroundImageUrl}), linear-gradient(205.57deg, #EDF6FF 7.56%, #DDEFFF 94.44%)`,
        backgroundSize: '500px, 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        minHeight: 612,
        [theme.breakpoints.down('xs')]: {
            backgroundSize: '300px, 100%',
            minHeight: 400,
        },
    },
}));

function ClearInterfaceBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            titleVariant="h1"
            className={clsx(classes.root, externalClassname)}
            title={t('clearInterface.title')}
            disableTextBackdrop
        />
    );
}

export default withTranslation('indexPage')(ClearInterfaceBlock);
