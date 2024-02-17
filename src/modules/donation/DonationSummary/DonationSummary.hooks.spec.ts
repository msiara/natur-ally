import { useDonationSummary } from './DonationSummary.hooks';

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2024-01-01'));
});

afterAll(() => {
  vi.useRealTimers();
});

it('calculates total amount correctly for a given period', () => {
  const amount = '100';
  const date = new Date('2024-12-01');

  const { totalAmount } = useDonationSummary({
    amount,
    date,
  });

  expect(totalAmount).toBe('1200');
});

it('handles undefined amount by treating it as zero', () => {
  const date = new Date('2024-12-01');

  const { totalAmount } = useDonationSummary({
    date,
  });

  expect(totalAmount).toBe('0');
});
