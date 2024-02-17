import { FormProvider } from 'react-hook-form';

import Button from '../../../common/components/Button';
import CurrencyField from '../CurrencyField';
import DateField from '../DateField';
import DonationSummary from '../DonationSummary';
import useDonationForm from './DonationForm.hooks';

import styles from './DonationForm.module.css';

export default function DonationForm() {
  const { methods, onSubmit, amount, date } = useDonationForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(data) => {
          void methods.handleSubmit(onSubmit)(data);
        }}
      >
        <div className={styles.fields}>
          <CurrencyField />
          <DateField />
        </div>
        <DonationSummary amount={amount} date={date} />
        <div className={styles.actions}>
          <Button className={styles.action} variant="outline">
            Cancel
          </Button>
          <Button className={styles.action} type="submit" variant="primary">
            Continue
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
