import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: { values: { lg: 1600 } },
    palette: {
        primary: { main: '#62B9FE' },
        secondary: { main: '#FFE16B' },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: { WebkitFontSmoothing: 'auto' },
                body: {
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                },
            },
        },
        MuiTypography: {
            'h5': {
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Ubuntu',
            },
            'h4': {
                fontSize: 32,
                fontFamily: 'Source Sans Pro',
            },
            'body1': {
                fontSize: 16,
                fontFamily: 'Source Sans Pro',
            },
        },
    },
    props: { MuiButton: { disableElevation: true } },
    shape: {
        borderRadius: 4,
        borderRadiusBold: 8,
    },
    transitions: {
        easing: { extraEaseInOut: 'cubic-bezier(0.85, 0.01, 0.13, 1)' },
        duration: { extra: 450 },
    },
});

export default theme;
