module.exports = {
    "presets": [
        "react-static/babel-preset.js",
        ["@babel/preset-env", {
            "targets": {
                "chrome": 75,
                "esmodules": true,
            },
            "bugfixes": true,
            "loose": true,
            "shippedProposals": true
        }],
        "@babel/preset-react",
    ],
    "plugins": [
        ["@babel/plugin-syntax-throw-expressions"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["module-resolver", {
            "root": ["./src"],
            "alias": { '@': __dirname+"/src/" },
        }]
    ]
};
