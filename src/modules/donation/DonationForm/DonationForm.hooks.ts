import { format, parse, startOfMonth } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';

import { DonationFormData } from './DonationForm.types';

export default function useDonationForm() {
  const methods = useForm<DonationFormData>({
    defaultValues: { date: format(startOfMonth(new Date()), 'yyyy-MM') },
  });
  const onSubmit: SubmitHandler<DonationFormData> = (data) => console.log(data);

  const amount = methods.watch('amount');
  const date = methods.watch('date');

  return {
    methods,
    onSubmit,
    amount,
    date: parse(date, 'yyyy-MM', new Date()),
  };
}
