import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // Next.js recommendations
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // React recommendations
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // Project-specific tweaks
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // This rule is mainly about avoiding subtle scoping gotchas in switch/case.
      // We can keep it off for now since gifGame is small and clear.
      "no-case-declarations": "off",

      // These are *text/markup* rules, not behavior or perf.
      // Keep them as warnings so you still see them, but they don't break lint.
      "react/no-unescaped-entities": "warn",
      "@next/next/no-img-element": "warn",
      "react/display-name": "warn",
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "src/index.js",
      "src/views/Index.js"
    ],
  },
];
