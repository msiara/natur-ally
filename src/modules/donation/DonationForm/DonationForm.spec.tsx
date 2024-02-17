import { addMonths, format } from 'date-fns';

import DonationForm from '.';
import { fireEvent, render, screen, waitFor } from '../../../test/utils';

it('submits correct values', async () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  vi.spyOn(console, 'log').mockImplementation(() => {});

  const expectedPayload = {
    amount: '100.00',
    date: format(addMonths(new Date(), 1), 'yyyy-MM'),
  };

  render(<DonationForm />);

  fireEvent.change(screen.getByRole('textbox', { name: 'I can donate' }), {
    target: { value: '100.00' },
  });
  fireEvent.click(screen.getByTestId('nextMonthButton'));
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith(expectedPayload);
  });
});
