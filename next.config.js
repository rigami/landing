const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = withPlugins([withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })], {
    webpack: (config, { dev, webpack }) => ({
        ...config,
        plugins: [...(config?.plugins || []), new webpack.DefinePlugin({ PRODUCTION_MODE: JSON.stringify(!dev) })],
        module: {
            ...(config?.module || {}),
            rules: [
                ...(config?.module?.rules || []),
                {
                    test: /\.svg$/,
                    issuer: /\.(js|ts)x?$/,
                    loader: require.resolve('react-svg-loader'),
                    options: { svgo: { plugins: [{ removeViewBox: false }] } },
                },
                {
                    test: /\.(png|jpe?g|webp|gif|)$/i,
                    use: [
                        {
                            loader: 'img-optimize-loader',
                            options: {
                                esModule: true,
                                compress: {
                                    mode: 'low',
                                    webp: true,
                                    disableOnDevelopment: true,
                                    svgo: true,
                                    gifsicle: { optimizationLevel: 3 },
                                },
                                name: '[name]_[hash].[ext]',
                                publicPath: '/_next/static/files',
                                outputPath: 'static/files',
                                inline: { symbol: '__inline' },
                            },
                        },
                    ],
                },
                {
                    test: /\.(ico|mp4|mkv|webm)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        publicPath: '/_next/static/files',
                        outputPath: 'static/files',
                    },
                },
            ],
        },
    }),
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: { localeSubpaths },
    async redirects() {
        return [
            {
                source: '/review',
                destination: 'https://github.com/rigami/readme/blob/main/REVIEW.md',
                permanent: true,
            },
            {
                source: '/bug-report',
                destination: 'https://github.com/rigami/readme/blob/main/BUG_REPORT.md',
                permanent: true,
            },
            {
                source: '/migrate-from-clock-tab',
                destination: '/',
                permanent: true,
            },
        ];
    },
});
