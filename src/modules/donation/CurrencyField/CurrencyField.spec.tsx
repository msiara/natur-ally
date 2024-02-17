import { FormProvider, useForm } from 'react-hook-form';

import { render, screen, fireEvent } from '../../../test/utils';
import { DonationFormData } from '../DonationForm/DonationForm.types';
import CurrencyField from '.';

function DonationForm() {
  const methods = useForm<DonationFormData>();
  return (
    <FormProvider {...methods}>
      <CurrencyField />
    </FormProvider>
  );
}

it('renders correctly with label and input', () => {
  render(<DonationForm />);

  expect(screen.getByLabelText('I can donate')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByAltText('Dollar')).toBeInTheDocument();
});

it('updates the value on input change', () => {
  render(<DonationForm />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '100.00' } });

  expect(input).toHaveValue('100.00');
});
