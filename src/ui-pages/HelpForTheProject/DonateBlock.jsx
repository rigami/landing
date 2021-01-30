import React, { Fragment } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ContentButton from '@/ui-components/ContentButton';
import { Link } from '@material-ui/core';
import testingImageUrl from '@/resources/testing.png';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${testingImageUrl})`,
        backgroundSize: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(100% - 20px) calc(100% - 25px)',
        minHeight: 612,
    },
    subtitle: { maxWidth: 470 },
    actions: { paddingTop: theme.spacing(16) },
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
        />
    );
}

export default DonateBlock;
