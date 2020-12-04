import { sum } from '../index';

describe('test sum function', () => {
  it('adds 2 numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
