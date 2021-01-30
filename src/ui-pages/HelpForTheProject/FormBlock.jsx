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

function FormBlock({ className: externalClassname }) {
    const classes = useStyles();

    return (
        <ContentCard
            classes={{
                root: clsx(classes.root, externalClassname),
                subtitle: classes.subtitle,
                actions: classes.actions,
            }}
            title="Расскажите об вашем опыте использования"
            subtitle={(
                <Fragment>
                    Ваш отзыв очень полезен для развития проекта,
                    расскажите с какими проблемами вы столкнулись и что бы вы хотели видеть
                </Fragment>
            )}
            actions={(
                <ContentButton
                    component={Link}
                    href="/help-for-the-project"
                    endIcon={<ArrowIcon />}
                >
                    Заполнить анкету
                </ContentButton>
            )}
        />
    );
}

export default FormBlock;
