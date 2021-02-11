import React, { Fragment, useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { i18n } from '@/i18n';

const i18ns = [
    {
        label: '🇷🇺 Русский',
        code: 'ru',
    },
    {
        label: '🇺🇸 English',
        code: 'en',
    },
];

function LangSwitcher({ ...other }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeLang, setActiveLang] = useState(i18ns.find(({ code }) => code === (i18n.language || 'en')));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSetLang = (newCode) => {
        if (newCode) {
            i18n
                .changeLanguage(newCode)
                .then(() => {
                    setActiveLang(i18ns.find(({ code }) => code === newCode));
                });
        }
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Button {...other} onClick={handleClick}>
                {activeLang?.label || 'Unknown lang'}
            </Button>
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
