const path = require('path')

module.exports = {
  extends: [
    'standard-with-typescript',
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
  ],
  ignorePatterns: [
    'out',
    'dist',
    '**/*.d.ts',
    '/public/tarteaucitronjs',
  ],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.eslint.json'),
  },
  rules: {
    '@typescript-eslint/comma-dangle': [
      'error',
      'always-multiline',
    ],
    // Take advantage of type inference
    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-unused-vars': 'off',
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
}
