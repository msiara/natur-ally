import { format } from 'date-fns';

import IconButton from '../../../common/components/IconButton';
import { useDatePicker } from './DateField.hooks';

import styles from './DateField.module.css';

export default function DateField() {
  const { date, handleNextMonth, handlePrevMonth, isPrevMonthDisabled } =
    useDatePicker();

  return (
    <div>
      <label className={styles.label} htmlFor="date">
        Every month until
      </label>
      <div className={styles.datePicker}>
        <IconButton
          data-testid="prevMonthButton"
          disabled={isPrevMonthDisabled}
          iconName="chevron-left"
          onClick={handlePrevMonth}
          type="button"
        />
        <div className={styles.date}>
          <div className={styles.month}>{format(date, 'MMMM')}</div>
          <div className={styles.year}>{format(date, 'yyyy')}</div>
        </div>
        <IconButton
          data-testid="nextMonthButton"
          iconName="chevron-right"
          onClick={handleNextMonth}
          type="button"
        />
      </div>
      <input
        className={styles.hidden}
        id="date"
        name="date"
        readOnly={true}
        type="month"
        value={format(date, 'yyyy-MM')}
      />
    </div>
  );
}
