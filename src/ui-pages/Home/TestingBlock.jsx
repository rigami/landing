import React, {useState} from 'react';
import {
    Card,
    Box,
    Typography,
    Button,
    Collapse,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import clsx from "clsx";

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
    button: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1, 4),
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
    bigMarginTop: {
        marginTop: theme.spacing(4),
    },
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
        '&.Mui-focused::after': {
            color: theme.palette.primary.main,
        },
        '&.Mui-error::after': {
            color: theme.palette.error.main,
        },
    },
}));

const STAGE = {
    BUTTON: 'BUTTON',
    FORM: 'FORM',
    ENDING_SCREEN: 'ENDING_SCREEN',
};

function TestingBlock() {
    const classes = useStyles();
    const { t } = useTranslation();
    const [stage, setStage] = useState(STAGE.BUTTON);
    const [data, setData] = useState({
        name: '',
        email: '',
        reason: '',
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        reason: false,
    });

    const handleInput = (key, value) => {
        setData((oldData) => ({ ...oldData, [key]: value }));

        setErrors((oldErrors) => ({ ...oldErrors, [key]: false }));
    };

    const validEmail = (value) => /.+[@].+[.].+/.test(value);

    const handleValid = (key, value) => {
        if (key === 'email') {
            setErrors((oldErrors) => ({ ...oldErrors, email: value.trim() && !validEmail(value) }));
        }
        if (key === 'reason') {
            setErrors((oldErrors) => ({ ...oldErrors, reason: value.trim().length > 500 }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setStage(STAGE.ENDING_SCREEN);
    };

    return (
        <Box className={classes.wrapper}>
            <Card elevation={0} square className={classes.root}>
                <Box className={classes.maxWidth}>
                    <Box className={classes.textBlock}>
                        <Typography variant="h4">
                            {t('testing.title')}
                        </Typography>
                        <Typography variant="body1" className={classes.description}>
                            {t('testing.description')}
                        </Typography>
                        <Collapse in={stage === STAGE.BUTTON}>
                            <Button
                                className={clsx(classes.button, classes.bigMarginTop)}
                                variant="contained"
                                color="secondary"
                                onClick={() => setStage(STAGE.FORM)}
                            >
                                {t('testing.joinButton')}
                            </Button>
                        </Collapse>
                        <Collapse in={stage === STAGE.FORM}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    value={data.name}
                                    variant="outlined"
                                    label={t('testing.form.name.label')+'*'}
                                    autoComplete='name'
                                    onChange={(event) => handleInput('name', event.target.value)}
                                    className={clsx(classes.marginTop, classes.bigMarginTop)}
                                />
                                <TextField
                                    fullWidth
                                    value={data.email}
                                    variant="outlined"
                                    label={t('testing.form.email.label')+'*'}
                                    autoComplete='email'
                                    onChange={(event) => handleInput('email', event.target.value)}
                                    onBlur={(event) => handleValid('email', event.target.value)}
                                    className={classes.marginTop}
                                    error={errors.email}
                                    helperText={errors.email && t('testing.form.email.errorValid')}
                                />
                                <TextField
                                    fullWidth
                                    value={data.reason}
                                    variant="outlined"
                                    multiline
                                    label={t('testing.form.reason.label')+'*'}
                                    className={classes.marginTop}
                                    InputProps={{
                                        'data-bottom-label': `${data.reason.trim().length}/500`,
                                        classes: {
                                            root: data.reason.trim().length > 400 && classes.bottomLabel,
                                        }
                                    }}
                                    onChange={(event) => {
                                        handleInput('reason', event.target.value);
                                        handleValid('reason', event.target.value);
                                    }}
                                    error={errors.reason}
                                    helperText={errors.reason && t('testing.form.reason.errorValid')}
                                    rows={2}
                                    rowsMax={16}
                                />
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={
                                        !data.name?.trim()
                                        || !validEmail(data.email)
                                        || !data.reason?.trim()
                                        || errors.email
                                        || errors.reason
                                    }
                                >
                                    {t('testing.form.submit')}
                                </Button>
                            </form>
                        </Collapse>
                        <Collapse in={stage === STAGE.ENDING_SCREEN}>
                            <Typography
                                variant="h5"
                                className={classes.bigMarginTop}
                            >
                                {t('testing.thankScreen.title', { name: data.name })}
                            </Typography>
                            <Typography variant="body1">{t('testing.thankScreen.description')}</Typography>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    setData({
                                        name: '',
                                        email: '',
                                        reason: '',
                                    });
                                    setStage(STAGE.FORM);
                                }}
                            >
                                {t('testing.thankScreen.retryButton')}
                            </Button>
                        </Collapse>
                    </Box>
                    <Box className={classes.artBlock} />
                </Box>
            </Card>
        </Box>
    );
}

export default TestingBlock;
