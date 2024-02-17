import { addMonths, format, isEqual, parse, startOfMonth } from 'date-fns';
import { useController } from 'react-hook-form';

import { DonationFormData } from '../DonationForm/DonationForm.types';

export function useDatePicker() {
  const {
    field: { value, onChange },
  } = useController<DonationFormData>({
    name: 'date',
  });

  const date = parse(value!, 'yyyy-MM', new Date());

  const handlePrevMonth = () => {
    onChange(format(addMonths(date, -1), 'yyyy-MM'));
  };

  const handleNextMonth = () => {
    onChange(format(addMonths(date, 1), 'yyyy-MM'));
  };

  const isPrevMonthDisabled = isEqual(
    startOfMonth(date),
    startOfMonth(new Date())
  );

  return {
    date,
    handleNextMonth,
    handlePrevMonth,
    isPrevMonthDisabled,
  };
}
