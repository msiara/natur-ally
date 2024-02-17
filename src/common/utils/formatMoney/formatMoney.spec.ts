import { formatMoney } from '.';

it('formats a simple number correctly', () => {
  expect(formatMoney('1234')).toBe('$1,234.00');
});

it('handles decimal numbers correctly', () => {
  expect(formatMoney('1234.56')).toBe('$1,234.56');
});

it('formats a large number correctly', () => {
  expect(formatMoney('12345678')).toBe('$12,345,678.00');
});

it('returns empty for empty string input', () => {
  expect(formatMoney('')).toBe('$0.00');
});
