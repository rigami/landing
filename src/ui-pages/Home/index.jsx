import React, {Fragment} from "react";
import SplashScreen from "./SplashScreen";
import TestingBlock from "./TestingBlock";
import FeaturesBlock from "./FeaturesBlock";
import DemoBlock from "./DemoBlock";

function Home() {
    return (
        <Fragment>
            <SplashScreen />
            <div>
                <TestingBlock />
                <FeaturesBlock />
                <DemoBlock />
            </div>
        </Fragment>
    );
}

export default Home;
