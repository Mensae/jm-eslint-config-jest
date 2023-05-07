/* eslint-env jest */

const jestConfig = require('../../configs/index.js');

describe('eslint-config-jest', () => {
  it('should match the snapshot', () => {
    expect(jestConfig).toMatchSnapshot();
  });
});
