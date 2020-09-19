export default pluginOptions => ({
    webpack: (currentWebpackConfig, state) => {
        console.log('currentWebpackConfig.module.rules', currentWebpackConfig.module.rules)

        return {
            ...currentWebpackConfig,
            module: {
                ...currentWebpackConfig.module,
                rules: [
                    /* {
                        test: /\.svg$/,
                        loader: require.resolve('react-svg-loader'),
                        options: { svgo: { plugins: [{ removeViewBox: false }] } },
                    }, */
                    ...currentWebpackConfig.module.rules,
                ],
            },
        }
    },
});
