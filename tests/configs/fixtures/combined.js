/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/index.js',
    '../../../configs/formatting.js'
  ].map(require.resolve)
};
