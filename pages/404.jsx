import React from 'react';
import Page from '@/ui-pages/404';

const Page404 = () => <Page />;

Page404.getInitialProps = async () => ({ namespacesRequired: ['common'] });

export default Page404;
