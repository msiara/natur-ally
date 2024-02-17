import { FormProvider, useForm } from 'react-hook-form';
import { format, startOfMonth } from 'date-fns';

import { fireEvent, render, screen } from '../../../test/utils';
import CurrencyField from '.';
import { DonationFormData } from '../DonationForm/DonationForm.types';

function DonationForm() {
  const methods = useForm<DonationFormData>({
    defaultValues: {
      date: format(startOfMonth(new Date()), 'yyyy-MM'),
    },
  });
  return (
    <FormProvider {...methods}>
      <CurrencyField />
    </FormProvider>
  );
}

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2024-01-01'));
});

afterAll(() => {
  vi.useRealTimers();
});

it('renders correctly with initial date and buttons', () => {
  render(<DonationForm />);

  expect(screen.getByText('January')).toBeInTheDocument();
  expect(screen.getByText('2024')).toBeInTheDocument();
  expect(screen.getByTestId('prevMonthButton')).toBeInTheDocument();
  expect(screen.getByTestId('prevMonthButton')).toBeDisabled();
  expect(screen.getByTestId('nextMonthButton')).toBeInTheDocument();
});

it('updates date on button click', () => {
  render(<DonationForm />);

  fireEvent.click(screen.getByTestId('nextMonthButton'));

  expect(screen.getByText('February')).toBeInTheDocument();
  expect(screen.getByText('2024')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('nextMonthButton'));

  expect(screen.getByText('March')).toBeInTheDocument();
  expect(screen.getByText('2024')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('prevMonthButton'));

  expect(screen.getByText('February')).toBeInTheDocument();
  expect(screen.getByText('2024')).toBeInTheDocument();
});
