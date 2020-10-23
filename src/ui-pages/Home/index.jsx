import React, { Fragment } from 'react';
import Footer from '@/ui-components/Footer';
import SplashScreen from './SplashScreen';
import TestingBlock from './TestingBlock';
import FeaturesBlock from './FeaturesBlock';
import DemoBlock from './DemoBlock';

function Home() {
    return (
        <Fragment>
            <SplashScreen />
            <div>
                <TestingBlock />
                <FeaturesBlock />
            </div>
            <Footer />
        </Fragment>
    );
}

export default Home;
