import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImageUrl from '@/resources/clear-interface-background.png';

const useStyles = makeStyles(() => ({
    root: {
        background: `url(${backgroundImageUrl}), linear-gradient(205.57deg, #EDF6FF 7.56%, #DDEFFF 94.44%)`,
        backgroundSize: '500px, 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        minHeight: 612,
    },
}));

function ClearInterfaceBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            titleVariant="h1"
            className={clsx(classes.root, externalClassname)}
            title="Чистота при выше всего"
            disableTextBackdrop
        />
    );
}

export default ClearInterfaceBlock;
