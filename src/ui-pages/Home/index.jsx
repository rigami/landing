import React, {Fragment} from "react";
import SplashScreen from "./SplashScreen";
import TestingBlock from "./TestingBlock";
import FeaturesBlock from "./FeaturesBlock";
import DemoBlock from "./DemoBlock";
import Footer from '@/ui-components/Footer';

function Home() {
    return (
        <Fragment>
            <SplashScreen />
            <div>
                <TestingBlock />
                <FeaturesBlock />
                <DemoBlock />
            </div>
            <Footer />
        </Fragment>
    );
}

export default Home;
