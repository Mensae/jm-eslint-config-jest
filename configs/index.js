/**
 * @file ESLint config for Jest
 */

/* eslint-env node */

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = Object.freeze({
  overrides: [
    {
      files: ['**/__tests__/**', '*.test.*', '*.spec.*'],

      env: {
        'jest/globals': true
      },

      rules: {
        // #region PLUGINS

        // #region @getify/proper-arrows

        /*
         * Require arrow functions to receive inferenced names
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-name
         * Type: problem
         * Note: Turned off to be compatible with Jest docs.
         */
        '@getify/proper-arrows/name': OFF,

        /*
         * Forbid arrow functions from various locations
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-where
         * Type: problem
         * Note: Turned off to be compatible with Jest docs.
         */
        '@getify/proper-arrows/where': OFF,

        /*
         * Require arrow functions to reference the 'this' keyword
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-this
         * Type: problem
         * Note: Turned off to be compatible with Jest docs.
         */
        '@getify/proper-arrows/this': OFF,

        // #endregion @getify/proper-arrows

        // #region Jest

        // #region Jest->Recommended

        /*
         * Enforce assertion to be made in a test body.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
         * Recommended
         */
        'jest/expect-expect': WARN,

        /*
         * Disallow alias methods.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
         * Recommended
         */
        'jest/no-alias-methods': ERROR,

        /*
         * Disallow commented out tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
         * Recommended
         */
        'jest/no-commented-out-tests': WARN,

        /*
         * Disallow calling `expect` conditionally.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
         * Recommended
         */
        'jest/no-conditional-expect': ERROR,

        /*
         * Disallow use of deprecated functions.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
         * Recommended
         */
        'jest/no-deprecated-functions': ERROR,

        /*
         * Disallow disabled tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
         * Recommended
         */
        'jest/no-disabled-tests': WARN,

        /*
         * Disallow using a callback in asynchronous tests and hooks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
         * Recommended
         */
        'jest/no-done-callback': ERROR,

        /*
         * Disallow using `exports` in files containing tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
         * Recommended
         */
        'jest/no-export': ERROR,

        /*
         * Disallow focused tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
         * Recommended
         */
        'jest/no-focused-tests': ERROR,

        /*
         * Disallow identical titles.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
         * Recommended
         */
        'jest/no-identical-title': ERROR,

        /*
         * Disallow string interpolation inside snapshots.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
         * Recommended
         */
        'jest/no-interpolation-in-snapshots': ERROR,

        /*
         * Disallow Jasmine globals.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
         * Recommended
         */
        'jest/no-jasmine-globals': ERROR,

        /*
         * Disallow manually importing from `__mocks__`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
         * Recommended
         */
        'jest/no-mocks-import': ERROR,

        /*
         * Disallow using `expect` outside of `it` or `test` blocks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
         * Recommended
         */
        'jest/no-standalone-expect': ERROR,

        /*
         * Require using `.only` and `.skip` over `f` and `x`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
         * Recommended
         */
        'jest/no-test-prefixes': ERROR,

        /*
         * Enforce valid `describe()` callback.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
         * Recommended
         */
        'jest/valid-describe-callback': ERROR,

        /*
         * Enforce valid `expect()` usage.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
         * Recommended
         */
        'jest/valid-expect': [ERROR, { alwaysAwait: true }],

        /*
         * Require promises that have expectations in their chain to be valid.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
         * Recommended
         */
        'jest/valid-expect-in-promise': ERROR,

        /*
         * Enforce valid titles.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
         * Recommended
         */
        'jest/valid-title': ERROR,

        // #endregion Jest->Recommended

        // #region Jest->Best Practices

        /*
         * Disallow specific matchers & modifiers.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
         */
        'jest/no-restricted-matchers': [
          WARN,
          {
            toBeTruthy:
              'Use more explicit matchers like `.toBe(true)` or `.toBeGreaterThan(0)`. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#avoid-using-tobetruthy-or-tobefalsy',
            toBeFalsy:
              'Use more explicit matchers like `.toBe(false)`, `.toBe(0)`, or `.toBeUndefined()`. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#avoid-using-tobetruthy-or-tobefalsy',
            toBeDefined:
              'Use a more explicit matcher. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#tricky-tobedefined-matcher'
          }
        ],

        // #endregion Jest->Best Practices

        // #endregion Jest

        // #region jest-extended

        /*
         * Suggest using `toBeArray()`.
         * https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-array.md
         */
        'jest-extended/prefer-to-be-array': WARN,

        /*
         * Suggest using `toBeFalse()`.
         * https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-false.md
         */
        'jest-extended/prefer-to-be-false': WARN,

        /*
         * Suggest using `toBeObject()`.
         * https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-object.md
         */
        'jest-extended/prefer-to-be-object': WARN,

        /*
         * Suggest using `toBeTrue()`.
         * https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-true.md
         */
        'jest-extended/prefer-to-be-true': WARN,

        /*
         * Suggest using `toHaveBeenCalledOnce()`.
         * https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-have-been-called-once.md
         */
        'jest-extended/prefer-to-have-been-called-once': WARN

        // #endregion jest-extended

        // #endregion PLUGINS
      }
    },

    {
      files: ['jest.config.js', 'jest.config.cjs'],

      parserOptions: {
        sourceType: 'script'
      },

      env: {
        browser: false,
        node: true
      }
    }
  ],

  plugins: ['import', 'jest', 'jest-extended', 'unicorn'],

  settings: {
    jest: {
      version: require('jest/package.json').version
    }
  }
});
