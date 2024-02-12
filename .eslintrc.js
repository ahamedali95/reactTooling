module.exports = {
    env: {
        browser: true,
        es2024: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:react-hooks/recommended",
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: [
        "**/assets"
    ],
    settings: {
        react: {
            pragma: "React",
            version: "detect"
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            }
        }
    },
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "@stylistic",
        "jest",
        "react-hooks",
        "unused-imports",
        "import"
    ],
    rules: {
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                arraysInObjects: true
            }
        ],
        "comma-dangle": "error",
        indent: [ 'error', 4 ],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true
            }
        ],
        "react/jsx-indent" : ["error", 4],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1
            }
        ],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-leaked-render": [
            "error",
            {
                validStrategies: ["ternary", "coerce"]
            }
        ],
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-handler-names": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-sort-props": [
            "error",
            {
                ignoreCase: false,
                callbacksLast: false
            }
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            }
        ],
        "react/jsx-curly-newline": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "never",
                children: "never"
            }
        ],
        "jsx-quotes": ["error", "prefer-double"],
        "unused-imports/no-unused-imports": "error",
        "no-duplicate-imports": "error",
        "eol-last": ['error', "never"],
        "semi-style": ["error", "last"],
        "sort-imports": [
            "error",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true,
            },
        ],
        'import/no-unresolved': 'error',
        "import/newline-after-import": ["error", { "count": 1 }],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                }
            }
        ]
    }
}
