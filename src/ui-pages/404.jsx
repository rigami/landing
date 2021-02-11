import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '@/ui-components/Header';
import SplashScreenComponent from '@/ui-components/SplashScreen';
import ContentCard from '@/ui-components/ContentCard';
import { Link } from '@material-ui/core';
import { ArrowBackRounded as ArrowIcon } from '@material-ui/icons';
import ContentButton from '@/ui-components/ContentButton';
import { withTranslation } from '@/i18n';

const useStyles = makeStyles((theme) => ({
    root: { minHeight: 'calc(100vh - 64px)' },
    card: {
        margin: 'auto',
        marginLeft: theme.spacing(-8),
        marginRight: theme.spacing(8),
        maxWidth: 730,
        minWidth: 'min-content',
    },
    title: {
        lineHeight: 1.3,
        fontSize: '6rem',
        fontWight: 900,
    },
    subtitle: {
        fontSize: '2.3rem',
        maxWidth: 430,
        fontWeight: 600,
    },
}));

function Page404({ t }) {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <SplashScreenComponent className={classes.root}>
                <ContentCard
                    classes={{
                        root: classes.card,
                        title: classes.title,
                        subtitle: classes.subtitle,
                    }}
                    title="404"
                    subtitle={t('404')}
                    actions={(
                        <ContentButton
                            component={Link}
                            href="/"
                            startIcon={<ArrowIcon />}
                        >
                            {t('backHome')}
                        </ContentButton>
                    )}
                />
            </SplashScreenComponent>
        </Fragment>
    );
}

export default withTranslation('errors')(Page404);
