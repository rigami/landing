import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Header from '@/ui-components/Header';

const useStyles = makeStyles((theme) => ({}));

function HelpForTheProject() {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    );
}

export default HelpForTheProject;
