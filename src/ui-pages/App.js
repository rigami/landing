import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from "./Home";
import Footer from "../ui-components/Footer";
import theme from "../theme";
import '../fonts/inject.css'

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
        <Footer />
    </ThemeProvider>
);

export default App;
