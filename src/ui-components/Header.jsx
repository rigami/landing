import React, { Fragment } from 'react';
import {
    AppBar,
    Link,
    Toolbar,
    Tooltip,
} from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import { fade, makeStyles } from '@material-ui/core/styles';
import DropDownButton, { LinkDropDownItem } from '@/ui-components/DropDownButton';

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

function Header() {
    const classes = useStyles();

    return (
        <AppBar
            color="transparent" elevation={0} position="sticky"
            className={classes.root}
        >
            <Toolbar className={classes.toolbar}>
                <Tooltip title="Вернуться домой">
                    <Link className={classes.homeLink} href="/">
                        <LogoIcon className={classes.logo} />
                    </Link>
                </Tooltip>
                <DropDownButton label="Написать отзыв" className={classes.alignRight}>
                    {(props) => (
                        <Fragment>
                            <LinkDropDownItem
                                title="В магазине Chrome Web Store"
                                href="https://chrome.google.com/webstore/detail/hdpjmahlkfndaejogipnepcgdmjiamhd"
                                target="_blank"
                                {...props}
                            />
                            <LinkDropDownItem
                                title="На почтовый ящик разработчика"
                                href="mailto:danilkinkin@gmail.com"
                                {...props}
                            />
                        </Fragment>
                    )}
                </DropDownButton>
                <DropDownButton label="Сообщить о проблеме" className={classes.offsetRight}>
                    {(props) => (
                        <Fragment>
                            <LinkDropDownItem
                                title="На GitHub"
                                href="https://github.com/rigami/readme/issues"
                                target="_blank"
                                {...props}
                            />
                            <LinkDropDownItem
                                title="На почтовый ящик разработчика"
                                href="mailto:danilkinkin@gmail.com"
                                {...props}
                            />
                            <LinkDropDownItem
                                title="Через Google Forms"
                                href="https://forms.gle/qdt3Pofio3242Qe46"
                                target="_blank"
                                {...props}
                            />
                        </Fragment>
                    )}
                </DropDownButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
