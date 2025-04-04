import prettierRule from "./prettierrc.js";

module.exports = {
  env: {
    jest: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "import",
    "testing-library",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: ["**/tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  ignorePatterns: [
    "**/*.d.ts",
    "**/*.graphql",
    "**/*.generated.ts",
    "**/graphql-generated-types/types.ts",
  ],
  rules: {
    "testing-library/await-async-queries": "error",
    "testing-library/no-await-sync-queries": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "newline-before-return": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "error",
    "linebreak-style": ["warn", "unix"],
    "no-extra-boolean-cast": "warn",
    "no-useless-return": "warn",
    "prettier/prettier": [2, prettierRule],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "next*/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "react*/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@apollo",
            group: "external",
            position: "after",
          },
          {
            pattern: "@apollo*/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "graphql/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: true,
        },
      },
      // Used for exclude generic types
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        filter: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
      {
        selector: "enum",
        format: ["PascalCase"],
        custom: {
          regex: "^E[A-Z]",
          match: true,
        },
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        prefix: [
          "is",
          "has",
          "can",
          "should",
          "will",
          "did",
          "checked",
          "open",
          "loading",
        ],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "warn",
      },
    },
  ],
};
