import React from "react";
import {Card, Box, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(4),
    },
    root: {
        height: 850,
        width: '100%',
        backgroundColor: '#FAFAFA',
        padding: theme.spacing(12),
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
    description: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1, 4),
    },
}));

function TestingBlock() {
    const classes = useStyles();
    const { t } = useTranslation();

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
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                        >
                            {t('testing.joinButton')}
                        </Button>
                    </Box>
                    <Box className={classes.artBlock}>

                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

export default TestingBlock;
