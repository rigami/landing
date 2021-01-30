import React, { Fragment } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ContentButton from '@/ui-components/ContentButton';
import { Link } from '@material-ui/core';
import testingImageUrl from '@/resources/testing.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${testingImageUrl})`,
        backgroundSize: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(100% - 20px) calc(100% - 25px)',
        minHeight: 612,
    },
    actions: { paddingTop: theme.spacing(16) },
}));

function HelpForTheProjectBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                actions: classes.actions,
            }}
            title="Станьте частью проекта"
            subtitle={(
                <Fragment>
                    На текущий момент проект находится в активной разработке и недоступен для широкой публики,
                    но вы можете присоединиться и помочь довести его до всего мира быстрее.
                    Ваша помощь не останется незамеченной.
                </Fragment>
            )}
            actions={(
                <ContentButton
                    component={Link}
                    href="/help-for-the-project"
                >
                    Как я могу помочь?
                </ContentButton>
            )}
        />
    );
}

export default HelpForTheProjectBlock;
