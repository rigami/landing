import React from 'react';
import {Root, Routes} from 'react-static';
import { Router } from '@reach/router'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "@/theme";
import '@/fonts/inject.css'
import Footer from '@/ui-components/Footer';

function App() {
    return (
        <Root>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="content">
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Routes path="*" />
                        </Router>
                        <Footer />
                    </React.Suspense>
                </div>
            </ThemeProvider>
        </Root>
    );
}

export default App;
