module.exports = {
    webpack: (config, { dev, webpack }) => ({
        ...config,
        plugins: [...(config?.plugins || []), new webpack.DefinePlugin({ PRODUCTION_MODE: JSON.stringify(!dev) })],
        module: {
            ...(config?.module || {}),
            rules: [
                ...(config?.module?.rules || []),
                {
                    test: /\.svg$/,
                    issuer: { test: /\.(js|ts)x?$/ },
                    loader: require.resolve('react-svg-loader'),
                    options: { svgo: { plugins: [{ removeViewBox: false }] } },
                },
                {
                    test: /\.(png|gif|jpg|ico)$/,
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
};
