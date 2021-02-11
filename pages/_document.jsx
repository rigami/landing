import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { lngFromReq } from 'next-i18next/dist/commonjs/utils';
import theme from '../src/theme';

export default class MyDocument extends Document {
    render() {
        const { lng } = this.props;

        return (
            <Html lang={lng}>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const lng = lngFromReq(ctx.req);
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheets.collect(<App {...props} />) });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        lng,
    };
};
