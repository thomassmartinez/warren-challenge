import {formatCurrency} from './formatCurrency';

describe('format currency', () => {
  it('should return a formatted value if pass a float value', () => {
    expect(formatCurrency(2078.66)).toBe('R$ 2.078,66');
  });
});
