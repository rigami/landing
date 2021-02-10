import React, { Fragment } from 'react';
import {
    AppBar,
    Link,
    Toolbar,
    Tooltip,
    useMediaQuery,
} from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import DropDownButton, { LinkDropDownItem } from '@/ui-components/DropDownButton';
import {
    BugReportRounded as BugReportIcon,
    RateReviewRounded as ReviewIcon,
} from '@material-ui/icons';
import { withTranslation } from '@/i18n';
import LangSwitcher from '@/ui-components/LangSwitcher';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: fade(theme.palette.background.paper, 0.5),
        backdropFilter: 'blur(70px)',
    },
    logo: {
        height: 30,
        width: 'auto',
    },
    toolbar: {
        maxWidth: theme.breakpoints.values.lg,
        width: '100%',
        margin: 'auto',
    },
    homeLink: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(-1),
        padding: theme.spacing(1),
    },
    alignRight: { marginLeft: 'auto' },
    offsetRight: { marginLeft: theme.spacing(2) },
}));

function Header({ t }) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <AppBar
            color="transparent" elevation={0} position="sticky"
            className={classes.root}
        >
            <Toolbar className={classes.toolbar}>
                <Tooltip title={t('backHomeTooltip')}>
                    <Link className={classes.homeLink} href="/">
                        <LogoIcon className={classes.logo} />
                    </Link>
                </Tooltip>
                <DropDownButton
                    label={!isMobile && t('writeReview')}
                    icon={isMobile && <ReviewIcon />}
                    className={classes.alignRight}
                >
                    {(props) => (
                        <Fragment>
                            <LinkDropDownItem
                                title={t('reviewInChromeWebStore')}
                                href="https://chrome.google.com/webstore/detail/hdpjmahlkfndaejogipnepcgdmjiamhd"
                                target="_blank"
                                {...props}
                            />
                            <LinkDropDownItem
                                title={t('reviewToEmail')}
                                href="mailto:danilkinkin@gmail.com"
                                {...props}
                            />
                        </Fragment>
                    )}
                </DropDownButton>
                <DropDownButton
                    label={!isMobile && t('bugReport')}
                    icon={isMobile && <BugReportIcon />}
                    className={classes.offsetRight}
                >
                    {(props) => (
                        <Fragment>
                            <LinkDropDownItem
                                title={t('bugReportOnGitHub')}
                                href="https://github.com/rigami/readme/issues"
                                target="_blank"
                                {...props}
                            />
                            <LinkDropDownItem
                                title={t('bugReportToEmail')}
                                href="mailto:danilkinkin@gmail.com"
                                {...props}
                            />
                            <LinkDropDownItem
                                title={t('bugReportViaGoogleForms')}
                                href="https://forms.gle/qdt3Pofio3242Qe46"
                                target="_blank"
                                {...props}
                            />
                        </Fragment>
                    )}
                </DropDownButton>
                <LangSwitcher className={classes.offsetRight} />
            </Toolbar>
        </AppBar>
    );
}

export default withTranslation('header')(Header);
