module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jasmine": true
    },
    "extends": ["eslint:recommended","plugin:jasmine/recommended"],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "no-constant-condition": "off",
        "no-debugger": "warn"
    },
    "plugins" : ["jasmine"]
};
