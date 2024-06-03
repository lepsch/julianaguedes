// @ts-check
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactRefresh from 'eslint-plugin-react-refresh'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default [
  { languageOptions: { globals: globals.browser } },

  eslint.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,

  react,
  {
    settings: {
      react: {
        version: '18',
      },
    },
  },

  ...compat.extends('plugin:react-hooks/recommended'),

  // eslint-plugin-react-refresh
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },

  // eslint-plugin-unused-imports
  ...compat.plugins('unused-imports'),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Ignore common output dirs
  {
    ignores: ['dist/', 'build/'],
  },

  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },

  stylistic.configs['recommended-flat'],
  {
    rules: {
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
]
