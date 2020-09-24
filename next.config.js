module.exports = (phase, { defaultConfig }) => {
    return {
        ...defaultConfig,
        module: {
            ...(defaultConfig?.module || {}),
            rules: [
                ...(defaultConfig?.module?.rules || []),
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
    }
}
