import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Container,
    Link,
    Tooltip,
    Typography,
} from '@material-ui/core';
import LogoIcon from '@/resources/logo_studio.svg';
import { OpenInNewRounded as OpenInNewIcon } from '@material-ui/icons';
import { withTranslation } from '@/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: 320,
        width: '100%',
        backgroundColor: theme.palette.background.default,
        marginTop: 'auto',
        overflow: 'hidden',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    links: {
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(8),
    },
    designedByBlock: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: theme.spacing(2),
    },
    designedByLabel: {
        maxHeight: 100,
        marginBottom: theme.spacing(1),
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2),
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.extra,
            easing: theme.transitions.easing.extraEaseInOut,
        }),
    },
    designerLink: {
        display: 'flex',
        padding: theme.spacing(0.5, 2),
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        '& > *': { zIndex: 1 },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: 0,
            zIndex: 0,
            backgroundColor: '#51efff',
            transition: theme.transitions.create(['width'], {
                duration: theme.transitions.duration.extra,
                easing: theme.transitions.easing.extraEaseInOut,
            }),
        },
        '&:hover::after': { width: `calc(100% + ${theme.spacing(6)}px)` },
    },
    linkWrapper: {
        '&:hover + $designedByLabel': { transform: `translateY(${theme.spacing(1)}px)` },
        '&:hover $openInNewIcon': { opacity: 1 },
    },
    openInNewIcon: {
        position: 'absolute',
        right: theme.spacing(-3),
        color: fade(theme.palette.common.black, 0.5),
        pointerEvents: 'none',
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.extra,
            easing: theme.transitions.easing.extraEaseInOut,
        }),
    },
    linksBlock: {
        display: 'flex',
        flexDirection: 'column',
        width: 260,
        paddingTop: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    linksBlockTitle: { },
    linksBlockLink: { marginTop: theme.spacing(1) },
}));

function Block({ title, links }) {
    const classes = useStyles();

    return (
        <nav className={classes.linksBlock}>
            <Typography variant="h6" className={classes.linksBlockTitle}>{title}</Typography>
            {links.map(({ label, url, ...other }) => (
                <Link
                    href={url}
                    key={url}
                    className={classes.linksBlockLink}
                    color="textSecondary"
                    {...other}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}

function Footer({ t }) {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container className={classes.container}>
                <Box className={classes.links}>
                    <Block
                        title={t('review.title')}
                        links={[
                            {
                                label: t('review.chromeWebStore'),
                                url: '/https://chrome.google.com/webstore/detail/hdpjmahlkfndaejogipnepcgdmjiamhd',
                                target: '_blank',
                            },
                            {
                                label: t('review.email'),
                                url: 'mailto:danilkinkin@gmail.com',
                            },
                        ]}
                    />
                    <Block
                        title={t('bugReport.title')}
                        links={[
                            {
                                label: t('bugReport.gitHub'),
                                url: 'https://github.com/rigami/readme/issues',
                                target: '_blank',
                            },
                            {
                                label: t('bugReport.email'),
                                url: 'mailto:danilkinkin@gmail.com',
                            },
                            {
                                label: t('bugReport.googleForms'),
                                url: 'https://forms.gle/qdt3Pofio3242Qe46',
                            },
                        ]}
                    />
                    <Block
                        title={t('other.title')}
                        links={[
                            {
                                label: t('other.privacyPolicy'),
                                url: 'https://github.com/rigami/readme/blob/main/POLICY.md',
                                target: '_blank',
                            },
                            {
                                label: t('other.projectOnGitHub'),
                                url: 'https://github.com/rigami/readme',
                                target: '_blank',
                            },
                        ]}
                    />
                </Box>
                <Box className={classes.designedByBlock}>
                    <Tooltip
                        title={t('designer.tooltip')}
                        enterDelay={400}
                        enterNextDelay={400}
                    >
                        <a href="https://danilkinkin.com/" target="_blank" className={classes.linkWrapper}>
                            <Box className={classes.designerLink}>
                                <LogoIcon />
                                <OpenInNewIcon className={classes.openInNewIcon} />
                            </Box>
                        </a>
                    </Tooltip>
                    <Typography variant="body2" className={classes.designedByLabel}>
                        {t('designer.design&development')}
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
}

export default withTranslation('footer')(Footer);
