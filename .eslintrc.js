module.exports = {
    'extends': ["react-app", 'rigami'],
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaFeatures': {
            'legacyDecorators': true,
            'impliedStrict': true,
            'jsx': true,
            'modules': true,
        },
        'ecmaVersion': 2020,
        'sourceType': 'module',
    },
    'settings': {
        'import/resolver': {
            alias: {
                map: ['@', `${__dirname}/src/`],
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
};
