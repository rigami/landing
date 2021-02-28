import React from 'react';
import Page from '@/ui-pages/Home';
import addedLocale from '@/utils/addedLocale';

const Index = () => <Page />;

export const getStaticProps = addedLocale([
    'common',
    'header',
    'footer',
    'indexPage',
]);

export default Index;
