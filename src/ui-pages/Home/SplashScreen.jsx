import React from 'react';
import DownloadButton from '@/ui-components/DownloadButton';
import SplashScreenComponent from '@/ui-components/SplashScreen';
import ContentCard from '@/ui-components/ContentCard';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '@/i18n';
import HTML from '@/ui-components/HTML';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 'auto',
        marginLeft: theme.spacing(-8),
        marginRight: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(-2),
            marginRight: theme.spacing(2),
        },
        maxWidth: 730,
        minWidth: 'min-content',
    },
    title: {
        lineHeight: 1.3,
        fontSize: '2.3rem',
    },
}));

function SplashScreen({ t }) {
    const classes = useStyles();

    return (
        <SplashScreenComponent>
            <ContentCard
                classes={{
                    root: classes.card,
                    title: classes.title,
                }}
                title={(<HTML>{t('splashScreen.slogan')}</HTML>)}
                subtitle={(<HTML>{t('splashScreen.description')}</HTML>)}
                actions={(<DownloadButton />)}
            />
        </SplashScreenComponent>
    );
}

export default withTranslation('indexPage')(SplashScreen);
