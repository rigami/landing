import React, { Fragment, useState } from 'react';
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({ iconButton: { color: theme.palette.text.primary } }));

const i18ns = [
    {
        icon: '🇷🇺',
        label: '🇷🇺 Русский',
        code: 'ru',
    },
    {
        icon: '🇺🇸',
        label: '🇺🇸 English',
        code: 'en',
    },
];

function LangSwitcher({ className: externalClassName, ...other }) {
    const classes = useStyles();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const activeLang = i18ns.find(({ code }) => code === (router.locale || 'en'));
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSetLang = (newCode) => {
        if (newCode) {
            router.push(router.basePath, router.basePath, { locale: newCode });
        }
        setAnchorEl(null);
    };

    return (
        <Fragment>
            {!isMobile && (
                <Button {...other} onClick={handleClick} className={externalClassName}>
                    {activeLang?.label || 'Unknown lang'}
                </Button>
            )}
            {isMobile && (
                <IconButton
                    {...other}
                    onClick={handleClick}
                    className={clsx(classes.iconButton, externalClassName)}
                    size="small"
                >
                    {activeLang?.icon}
                </IconButton>
            )}
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => handleSetLang()}
            >
                {i18ns.map(({ label, code }) => (
                    <MenuItem onClick={() => handleSetLang(code)} key={code}>{label}</MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
}

export default LangSwitcher;
