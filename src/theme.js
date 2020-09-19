import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
                body: {
                    backgroundColor: '#fff',
                },
            },
        },
        MuiTypography: {
            'h5': {
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Red Hat Display',
            },
            'h4': {
                fontSize: 32,
                fontFamily: 'Source Sans Pro',
            },
            'body1': {
                fontSize: 18,
                fontFamily: 'Source Sans Pro',
            },
        },
    },
});

export default theme;
