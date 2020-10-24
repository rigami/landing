import React, { Fragment, useState } from 'react';
import Footer from '@/ui-components/Footer';
import SplashScreen from '@/ui-pages/Home/SplashScreen';
import {
    Box,
    Button,
    CircularProgress,
    Collapse,
    Container,
    TextField,
    Typography,
    Link,
} from '@material-ui/core';
import { NavigateNextRounded as ArrowRightIcon } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import config from '@/config';

const useStyles = makeStyles((theme) => ({
    wrapper: { padding: theme.spacing(4) },
    root: {
        minHeight: 850,
        width: '100%',
        backgroundColor: '#FAFAFA',
        padding: theme.spacing(12),
        display: 'flex',
    },
    maxWidth: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 1600,
        margin: 'auto',
    },
    textBlock: {
        maxWidth: 470,
        flexGrow: 1,
    },
    artBlock: {
        width: 700,
        height: 400,
        backgroundColor: '#d6d6d6',
        flexGrow: 0,
        marginLeft: 'auto',
    },
    description: { marginTop: theme.spacing(2) },
    button: { padding: theme.spacing(1, 4) },
    marginTop: { marginTop: theme.spacing(2) },
    bigMarginTop: { marginTop: theme.spacing(4) },
    bottomLabel: {
        position: 'relative',
        '&::after': {
            content: 'attr(data-bottom-label)',
            position: 'absolute',
            bottom: 0,
            right: 10,
            transform: 'translateY(5px)',
            backgroundColor: '#fafafa',
            padding: theme.spacing(0, 0.5),
            fontSize: '0.8rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0.00938em',
            color: theme.palette.text.secondary,
            transition: theme.transitions.create('color', {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
        '&.Mui-focused::after': { color: theme.palette.primary.main },
        '&.Mui-error::after': { color: theme.palette.error.main },
    },
    buttonWrapper: {
        position: 'relative',
        display: 'inline-block',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    formWrapper: {
        maxWidth: 580,
        width: '100%',
    },
    pageWrapper: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    githubLink: { marginTop: theme.spacing(1) },
}));

const STAGE = {
    FORM: 'FORM',
    ENDING_SCREEN: 'ENDING_SCREEN',
};

const REPORT_TYPE = {
    BUG: 'BUG',
    REVIEW: 'REVIEW',
};

function Report({ type = REPORT_TYPE.REVIEW }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const [stage, setStage] = useState(STAGE.FORM);
    const [data, setData] = useState({
        email: '',
        text: '',
    });
    const [errors, setErrors] = useState({
        email: false,
        text: false,
    });
    const [sendingStatus, setSendingStatus] = useState('wait');
    const reportType = type.toLowerCase();

    const handleInput = (key, value) => {
        setData((oldData) => ({
            ...oldData,
            [key]: value,
        }));

        setErrors((oldErrors) => ({
            ...oldErrors,
            [key]: false,
        }));
    };

    const validEmail = (value) => /.+[@].+[.].+/.test(value);

    const handleValid = (key, value) => {
        if (key === 'email') {
            setErrors((oldErrors) => ({
                ...oldErrors,
                email: value.trim() && !validEmail(value) ? 'NOT_VALID' : false,
            }));
        }
        if (key === 'text') {
            setErrors((oldErrors) => ({
                ...oldErrors,
                text: value.trim().length > 500,
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSendingStatus('pending');

        try {
            const result = await fetch(
                `${config.server_url}/report/review`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                },
            );
            console.log('result', result);

            if (result.status === 200) {
                setStage(STAGE.ENDING_SCREEN);
                setSendingStatus('done');
            } else {
                const computeResult = await result.text();

                if (computeResult === 'EMAIL_ALREADY_USE') {
                    setErrors((oldErrors) => ({
                        ...oldErrors,
                        email: 'ALREADY_USE',
                    }));
                    setSendingStatus('wait');
                } else {
                    throw new Error(result.statusText);
                }
            }
        } catch (e) {
            console.error(e);
            setSendingStatus('failed');
        }
    };

    return (
        <Fragment>
            <SplashScreen shrink />
            <Container className={classes.pageWrapper}>
                <Box className={classes.formWrapper}>
                    <Typography variant="h4">{t(`page.${reportType}.title`)}</Typography>
                    <Typography variant="body1">{t(`page.${reportType}.description`)}</Typography>
                    <Button
                        component={Link}
                        href="https://github.com/rigami-org/readme/issues"
                        underline="none"
                        target="_blank"
                        endIcon={(<ArrowRightIcon />)}
                        className={classes.githubLink}
                    >
                        {t('page.report.github')}
                    </Button>
                    <Collapse in={stage === STAGE.FORM}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                value={data.email}
                                variant="outlined"
                                label={`${t('page.report.form.email.label')}*`}
                                autoComplete="email"
                                onChange={(event) => handleInput('email', event.target.value)}
                                onBlur={(event) => handleValid('email', event.target.value)}
                                className={classes.marginTop}
                                error={errors.email}
                                helperText={
                                    errors.email && t('page.report.form.email.errorValid')
                                }
                            />
                            <TextField
                                fullWidth
                                value={data.text}
                                variant="outlined"
                                multiline
                                label={`${t(`page.${reportType}.form.text.label`)}*`}
                                className={classes.marginTop}
                                InputProps={{
                                    'data-bottom-label': `${data.text.trim().length}/500`,
                                    classes: { root: data.text.trim().length > 400 && classes.bottomLabel },
                                }}
                                onChange={(event) => {
                                    handleInput('text', event.target.value);
                                    handleValid('text', event.target.value);
                                }}
                                error={errors.text}
                                helperText={errors.text && t('page.report.form.text.errorValid')}
                                rows={2}
                                rowsMax={16}
                            />
                            <Collapse in={sendingStatus === 'failed'}>
                                <Typography color="error" variant="body1">
                                    {t(`page.${reportType}.form.failedSend`)}
                                </Typography>
                            </Collapse>
                            <div className={clsx(classes.buttonWrapper, classes.bigMarginTop)}>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={
                                        !validEmail(data.email)
                                        || !data.text?.trim()
                                        || errors.email
                                        || errors.text
                                        || sendingStatus === 'pending'
                                    }
                                >
                                    {t(`page.${reportType}.form.submit`)}
                                </Button>
                                {sendingStatus === 'pending' && (
                                    <CircularProgress size={24} className={classes.buttonProgress} />
                                )}
                            </div>
                        </form>
                    </Collapse>
                    <Collapse in={stage === STAGE.ENDING_SCREEN}>
                        <Typography
                            variant="h5"
                            className={classes.bigMarginTop}
                        >
                            {t(`page.${reportType}.thankScreen.title`)}
                        </Typography>
                        <Typography variant="body1">{t(`page.${reportType}.thankScreen.description`)}</Typography>
                        <Button
                            className={clsx(classes.button, classes.bigMarginTop)}
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                setData({
                                    email: '',
                                    text: '',
                                });
                                setStage(STAGE.FORM);
                            }}
                        >
                            {t(`page.${reportType}.thankScreen.retryButton`)}
                        </Button>
                    </Collapse>
                </Box>
            </Container>
            <Footer />
        </Fragment>
    );
}

export default Report;

export { REPORT_TYPE };
