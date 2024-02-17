import CurrencyInputField from 'react-currency-input-field';
import { useController } from 'react-hook-form';

import { DonationFormData } from '../DonationForm/DonationForm.types';

import Dollar from '../../../assets/dollar.svg';
import styles from './CurrencyField.module.css';

export default function CurrencyField() {
  const { field } = useController<DonationFormData>({
    name: 'amount',
  });

  return (
    <div>
      <label className={styles.label} htmlFor="amount">
        I can donate
      </label>
      <div className={styles.inputContainer}>
        <img className={styles.currencyIcon} src={Dollar} alt="Dollar" />
        <CurrencyInputField
          className={styles.input}
          decimalSeparator="."
          groupSeparator=","
          id="amount"
          name="amount"
          onValueChange={(value) => field.onChange(value)}
          placeholder="0.00"
          value={field.value}
        />
      </div>
    </div>
  );
}
