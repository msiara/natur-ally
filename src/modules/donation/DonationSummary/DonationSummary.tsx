import { format } from 'date-fns';

import { formatMoney } from '../../../common/utils/formatMoney';
import { useDonationSummary } from './DonationSummary.hooks';
import { DonationSummaryProps } from './DonationSummary.types';

import styles from './DonationSummary.module.css';

export default function DonationSummary({
  amount,
  date,
}: DonationSummaryProps) {
  const { totalAmount } = useDonationSummary({
    amount,
    date,
  });

  return (
    <>
      <div className={styles.totalAmount}>
        <div className={styles.label}>Total amount</div>
        <div className={styles.value} data-testid="donationTotalAmount">
          {formatMoney(totalAmount)}
        </div>
      </div>
      <div className={styles.infoBox}>
        You will be sending{' '}
        <span data-testid="donationAmount">{formatMoney(amount)}</span> every
        month, until{' '}
        <span data-testid="donationDate">{format(date, 'MMMM yyyy')}</span>.
        Thank you!
      </div>
    </>
  );
}
