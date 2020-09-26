module.exports = {
    webpack: (config, { dev, webpack }) => {
        return {
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
                ],
            },
        };
    },
};
