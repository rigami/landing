import React from 'react';
import { Link } from '@material-ui/core';
import ContentButton from '@/ui-components/ContentButton';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';

function DownloadButton({ className: externalClassName }) {
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
