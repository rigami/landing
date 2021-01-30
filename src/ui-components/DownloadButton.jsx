import React from 'react';
import { ButtonGroup, Link } from '@material-ui/core';
import ContentButton from '@/ui-components/ContentButton';
import { makeStyles } from '@material-ui/core/styles';
import {
    GetAppRounded as InstallIcon,
    ArrowForwardRounded as ArrowIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    install: { padding: theme.spacing(2.5) },
    icon: {
        width: 20,
        height: 20,
    },
}));

function DownloadButton({ className: externalClassName }) {
    const classes = useStyles();

    return (
        <ContentButton
            className={externalClassName}
            component={Link}
            href="https://chrome.google.com/webstore/detail/hdpjmahlkfndaejogipnepcgdmjiamhd"
            target="_blank"
            endIcon={<ArrowIcon />}
        >
            Перейти в Chrome Web Store
        </ContentButton>
    );
}

export default DownloadButton;
