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
        backgroundSize: '430px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(100% - 20px) calc(100% - 25px)',
        minHeight: 480,
        [theme.breakpoints.down('xs')]: {
            flexBasis: '100% !important',
            backgroundSize: '300px',
            backgroundPosition: 'calc(50%) calc(100% - 110px)',
        },
    },
    subtitle: { maxWidth: 470 },
    actions: {
        paddingTop: theme.spacing(16),
        [theme.breakpoints.down('xs')]: { paddingTop: 300 + theme.spacing(4) },
    },
    button: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('xs')]: { width: '100%' },
    },
}));

function FormBlock({ t, className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                subtitle: classes.subtitle,
                actions: classes.actions,
            }}
            title={t('form.title')}
            subtitle={t('form.description')}
            actions={(
                <ContentButton
                    component={Link}
                    href="https://forms.gle/ZfEjCEFrjDY87riX6"
                    target="_blank"
                    endIcon={<ArrowIcon />}
                    className={classes.button}
                >
                    {t('form.action')}
                </ContentButton>
            )}
        />
    );
}

export default withTranslation('helpForTheProjectPage')(FormBlock);
