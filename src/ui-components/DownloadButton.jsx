import React from 'react';
import { Link } from '@material-ui/core';
import ContentButton from '@/ui-components/ContentButton';
import { ArrowForwardRounded as ArrowIcon } from '@material-ui/icons';
import { withTranslation } from '@/i18n';

function DownloadButton({ t, className: externalClassName }) {
    return (
        <ContentButton
            className={externalClassName}
            component={Link}
            href="https://chrome.google.com/webstore/detail/hdpjmahlkfndaejogipnepcgdmjiamhd"
            target="_blank"
            endIcon={<ArrowIcon />}
        >
            {t('goToChromeWebStore')}
        </ContentButton>
    );
}

export default withTranslation()(DownloadButton);
