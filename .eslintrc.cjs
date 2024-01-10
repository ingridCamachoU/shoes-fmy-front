module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
    },
    extends: ["eslint:recommended", "prettier"],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "single"],
        semi: ["error", "always"],
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
};
