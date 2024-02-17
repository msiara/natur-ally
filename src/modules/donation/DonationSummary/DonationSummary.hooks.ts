import { differenceInMonths, startOfMonth } from 'date-fns';

export function useDonationSummary({
  amount,
  date,
}: {
  amount?: string;
  date: Date;
}) {
  const donationPeriod = differenceInMonths(date, startOfMonth(new Date())) + 1;
  const totalAmount = String(Number(amount ?? '0') * donationPeriod);

  return { totalAmount };
}
