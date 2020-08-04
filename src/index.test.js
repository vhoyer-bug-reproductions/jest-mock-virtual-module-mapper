const index = require('./index');
const imgB = require('@system/assets/imgB.png');

jest.mock('@system/assets/imgB.png', () => 'something', { virtual: true });

it('returns something', () => {
  expect(index.something()).toEqual(imgB);
});
