// @ts-check

import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(

  {
    ignores: [
      'eslint.config.mjs',
      'dist/**',
      'node_modules/**',
      'coverage/**',
    ],
  },


  eslint.configs.recommended,


  ...tseslint.configs.recommendedTypeChecked,


  eslintPluginPrettierRecommended,


  {
    languageOptions: {

      globals: {
        ...globals.node,
        ...globals.jest,
      },

      sourceType: 'module',

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },

    },


    rules: {


      /**
       * Permite uso de any
       */
      '@typescript-eslint/no-explicit-any': 'off',


      /**
       * Desliga regras estritas
       * enquanto estruturamos o projeto
       */
      '@typescript-eslint/no-unsafe-assignment': 'off',

      '@typescript-eslint/no-unsafe-member-access': 'off',

      '@typescript-eslint/no-unsafe-return': 'off',

      '@typescript-eslint/no-unsafe-argument': 'off',


      /**
       * JWT validate não precisa await agora
       */
      '@typescript-eslint/require-await': 'off',


      /**
       * Mantemos apenas aviso
       */
      '@typescript-eslint/no-floating-promises': 'warn',


      /**
       * Prettier
       */
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],


    },

  },

);