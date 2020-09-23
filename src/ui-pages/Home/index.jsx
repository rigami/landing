import React from 'react';
import Footer from '@/ui-components/Footer';
import useMainStateStore from '@/utils/mainStateStore';
import SplashScreen from './SplashScreen';
import TestingBlock from './TestingBlock';
import FeaturesBlock from './FeaturesBlock';
import DemoBlock from './DemoBlock';
import SmoothLoad from '../../ui-components/SmoothLoad';
import SmoothScroll from '../../ui-components/SmoothScroll';


function Home() {
    const { eventBus } = useMainStateStore();

    return (
        <SmoothLoad>
            <SmoothScroll onScroll={(scrollOffset) => eventBus.call('document.scroll', scrollOffset)}>
                <SplashScreen />
                <div>
                    <TestingBlock />
                    <FeaturesBlock />
                    <DemoBlock />
                </div>
                <Footer />
            </SmoothScroll>
        </SmoothLoad>
    );
}

export default Home;
