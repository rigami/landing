import React from 'react';
import Page from '@/ui-pages/HelpForTheProject';
import addedLocale from '@/utils/addedLocale';

const HelpForTheProject = () => <Page />;

export const getStaticProps = addedLocale([
    'common',
    'header',
    'footer',
    'helpForTheProjectPage',
]);

export default HelpForTheProject;
