import {expect} from '@jest/globals';
import {get3Rand, getRand} from '@shared/utils/rand.utils';

describe('Rand 3', () => {
  it('should length be equal 3', () => {
    expect(get3Rand().length).toBe(3);
  });
  it('should be unique', () => {
    const rand1 = get3Rand();
    const rand2 = get3Rand();
    expect(rand1 !== rand2).toBeTruthy();
  });
});

describe('Rand', () => {
  it('should be unique', () => {
    const rand1 = getRand();
    const rand2 = getRand();
    expect(rand1 !== rand2).toBeTruthy();
  });
});
