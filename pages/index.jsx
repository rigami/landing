import React from 'react';
import Page from '@/ui-pages/Home';

const Index = () => <Page />;

Index.getInitialProps = async () => ({ namespacesRequired: ['common', 'header'] });

export default Index;
