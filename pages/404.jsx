import React from 'react';
import Page from '@/ui-pages/404';
import addedLocale from '@/utils/addedLocale';

const Page404 = () => <Page />;

export const getStaticProps = addedLocale([
    'common',
    'header',
    'footer',
    'errors',
]);

export default Page404;
