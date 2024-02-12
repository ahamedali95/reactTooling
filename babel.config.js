module.exports = (api) => {
    api.cache(true);

    let presets = [
        [
            "@babel/preset-env",
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: '3.35.1',
                ignoreBrowserslistConfig: true,
                targets: 'last 2 Chrome versions, last 2 Firefox versions, last 2 Safari versions, last 2 Edge versions'
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ];

    const plugins = [
        [
            "module-resolver",
            {
                alias: {
                    Api: "./src/api",
                    Assets: "./src/assets",
                    Components: "./src/components",
                    Hooks: "./src/hooks",
                    Pages: "./src/pages",
                    Utils: "./src/utils"
                }
            }
        ]
    ];

    if (process.env["NODE_ENV"] === "production") {
        presets = [
            [
                "@babel/preset-env",
                {
                    modules: false,
                    useBuiltIns: 'usage',
                    corejs: '3.35.1'
                }
            ],
            ...presets.slice(1)
        ];
    }

    return {
        presets,
        plugins
    };
}