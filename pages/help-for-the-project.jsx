import React from 'react';
import Page from '@/ui-pages/HelpForTheProject';

const HelpForTheProject = () => <Page />;

HelpForTheProject.getInitialProps = async () => ({ namespacesRequired: ['common'] });

export default HelpForTheProject;
