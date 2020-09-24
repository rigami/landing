module.exports = {
    "presets": [
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
        ["inline-react-svg"],
        ["@babel/plugin-proposal-export-default-from"],
        ["@babel/plugin-syntax-throw-expressions"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["module-resolver", {
            "root": ["./src"],
            "alias": { '@': __dirname+"/src/" },
        }]
    ]
};
