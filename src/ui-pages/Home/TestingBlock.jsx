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
    const [dataRR, setDataRR] = useState({
        name: '',
        email: '',
        reason: '',
    });
    /* const [errors, setErrors] = useState({
        name: false,
        email: false,
        reason: false,
    }); */

    const handleInput = (key, event) => {
        console.log("wegweg", dataRR)
        setDataRR((oldData) => ({ ...oldData, [key]: event.target.value }));

        if (key === 'email') {

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
                                    value={dataRR.name}
                                    variant="outlined"
                                    label={t('testing.form.name.label')+'*'}
                                    onChange={(event) => handleInput('name', event)}
                                    className={clsx(classes.marginTop, classes.bigMarginTop)}
                                />
                                <TextField
                                    fullWidth
                                    value={dataRR.email}
                                    variant="outlined"
                                    label={t('testing.form.email.label')+'*'}
                                    onChange={(event) => handleInput('email', event)}
                                    className={classes.marginTop}
                                />
                                <TextField
                                    fullWidth
                                    value={dataRR.reason}
                                    variant="outlined"
                                    multiline
                                    label={t('testing.form.reason.label')+'*'}
                                    className={classes.marginTop}
                                    onChange={(event) => handleInput('reason', event)}
                                />
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                >
                                    {t('testing.submit')}
                                </Button>
                            </form>
                        </Collapse>
                        <Collapse in={stage === STAGE.ENDING_SCREEN}>
                            <Typography
                                variant="h5"
                                className={classes.bigMarginTop}
                            >
                                {t('testing.thankScreen.title', { name: "Danil" })}
                            </Typography>
                            <Typography variant="body1">{t('testing.thankScreen.description')}</Typography>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                onClick={() => setStage(STAGE.FORM)}
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
