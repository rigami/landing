import React, { Fragment } from 'react';
import DownloadButton from '@/ui-components/DownloadButton';
import SplashScreenComponent from '@/ui-components/SplashScreen';
import ContentCard from '@/ui-components/ContentCard';
import { makeStyles } from '@material-ui/core/styles';

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

function SplashScreen() {
    const classes = useStyles();

    return (
        <SplashScreenComponent>
            <ContentCard
                classes={{
                    root: classes.card,
                    title: classes.title,
                }}
                title={(
                    <Fragment>
                        Для сохранения всего.
                        <br />
                        Для доступа везде
                    </Fragment>
                )}
                subtitle={(
                    <Fragment>
                        Rigami - это новая вкладка для браузера
                        которая сочетает в себе минимализм и обширный функционал.
                        Закладки, часы, дата и  текущая погода, ничего лишнего
                    </Fragment>
                )}
                actions={(
                    <DownloadButton />
                )}
            />
        </SplashScreenComponent>
    );
}

export default SplashScreen;
