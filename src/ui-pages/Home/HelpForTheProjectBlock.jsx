import React from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ContentButton from '@/ui-components/ContentButton';
import { Link } from '@material-ui/core';
import testingImageUrl from '@/resources/testing.png';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';
import { withTranslation } from '@/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${testingImageUrl})`,
        backgroundSize: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(100% - 20px) calc(100% - 25px)',
        [theme.breakpoints.down('xs')]: {
            backgroundSize: '300px',
            backgroundPosition: 'calc(50%) calc(100% - 110px)',
        },
        minHeight: 612,
    },
    subtitle: { maxWidth: 470 },
    actions: {
        paddingTop: `${theme.spacing(16)}px !important`,
        [theme.breakpoints.down('xs')]: { paddingTop: `${300 + theme.spacing(4)}px !important` },
    },
    button: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('xs')]: { width: '100%' },
    },
}));

function HelpForTheProjectBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            titleVariant="h1"
            classes={{
                root: clsx(classes.root, externalClassname),
                title: classes.text,
                subtitle: classes.subtitle,
                actions: classes.actions,
            }}
            title={t('helpForTheProject.title')}
            subtitle={t('helpForTheProject.description')}
            actions={(
                <ContentButton
                    component={Link}
                    href="/help-for-the-project"
                    endIcon={<ArrowIcon />}
                    className={classes.button}
                >
                    {t('helpForTheProject.action')}
                </ContentButton>
            )}
        />
    );
}

export default withTranslation('indexPage')(HelpForTheProjectBlock);
