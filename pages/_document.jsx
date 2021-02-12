import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { lngFromReq } from 'next-i18next/dist/commonjs/utils';
import shareEnImageUrl from '@/resources/share_en.jpg';
import shareRuImageUrl from '@/resources/share_ru.jpg';
import theme from '../src/theme';
import locRU from '../public/i18n/ru/common.json';
import locEN from '../public/i18n/en/common.json';

export default class MyDocument extends Document {
    render() {
        const { lng } = this.props;

        const img = lng === 'en' ? shareEnImageUrl : shareRuImageUrl;
        const title = lng === 'en' ? locEN.title : locRU.title;
        const description = lng === 'en' ? locEN.description : locRU.description;

        return (
            <Html lang={lng}>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    {/* Primary Meta Tags */}
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://rigami.io/" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={img} />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://rigami.io/" />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                    <meta property="twitter:image" content={img} />
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
