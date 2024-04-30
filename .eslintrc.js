module.exports = {
    overrides: [
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
        plugins: ['@typescript-eslint', 'react', 'prettier'],
        extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:@typescript-eslint/recommended',
          'prettier',
        ],
        rules: {
          'prettier/prettier': 'warn',
          'react/react-in-jsx-scope': 'off'
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
    ],
  };
  