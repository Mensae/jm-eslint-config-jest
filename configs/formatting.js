/**
 * @file ESLint config for Jest
 */

/* eslint-env node */

const ERROR = 'error';

module.exports = Object.freeze({
  overrides: [
    {
      files: ['**/__tests__/**', '*.test.*', '*.spec.*'],

      env: {
        jest: true
      },

      plugins: ['jest', 'jest-formatting'],

      rules: {
        // #region PLUGINS

        // #region jest

        /*
         * Suggest using `toBe()` for primitive literals.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
         */
        'jest/prefer-to-be': ERROR,

        /*
         * Suggest using `toContain()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
         */
        'jest/prefer-to-contain': ERROR,

        /*
         * Suggest using `toHaveLength()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
         */
        'jest/prefer-to-have-length': ERROR,

        // #endregion jest

        // #region jest-formatting

        /*
         * Enforce a line of padding before and after one or more `afterAll`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-after-all-blocks.md
         */
        'jest-formatting/padding-around-after-all-blocks': ERROR,

        /*
         * Enforce a line of padding before and after one or more `afterEach`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-after-each-blocks.md
         */
        'jest-formatting/padding-around-after-each-blocks': ERROR,

        /*
         * Enforce a line of padding before and after `beforeAll` statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-before-all-blocks.md
         */
        'jest-formatting/padding-around-before-all-blocks': ERROR,

        /*
         * Enforce a line of padding before and after one or more `beforeEach`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-before-each-blocks.md
         */
        'jest-formatting/padding-around-before-each-blocks': ERROR,

        /*
         * Enforce a line of padding before and after one or more `describe`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-describe-blocks.md
         */
        'jest-formatting/padding-around-describe-blocks': ERROR,

        /*
         * Enforce a line of padding before and after one or more `expect`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-expect-groups.md
         */
        'jest-formatting/padding-around-expect-groups': ERROR,

        /*
         * Enforce a line of padding before and after one or more `test`/`it`
         * statements.
         * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-test-blocks.md
         */
        'jest-formatting/padding-around-test-blocks': ERROR

        // #endregion jest-formatting

        // #endregion PLUGINS
      }
    }
  ]
});
