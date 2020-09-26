module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack, ...other }) => {
        return {
            ...config,
            plugins: [
                ...(config?.plugins || []),
                new webpack.DefinePlugin({ PRODUCTION_MODE: JSON.stringify(buildId === 'production') }),
            ],
            module: {
                ...(config?.module || {}),
                rules: [
                    ...(config?.module?.rules || []),
                    {
                        test: /\.svg$/,
                        issuer: {
                            test: /\.(js|ts)x?$/,
                        },
                        loader: require.resolve('react-svg-loader'),
                        options: { svgo: { plugins: [{ removeViewBox: false }] } },
                    },
                ],
            }
        };
    },
}
