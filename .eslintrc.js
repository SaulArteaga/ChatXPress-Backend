module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  plugin: ['@typescript-eslint', 'parser'],
  ignorePatterns: ['dist/**/*'],
  rules: {},
}
