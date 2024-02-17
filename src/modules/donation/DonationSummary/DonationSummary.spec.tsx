import { render, screen } from '../../../test/utils';
import DonationSummary from '.';

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2024-01-01'));
});

afterAll(() => {
  vi.useRealTimers();
});

it('displays the correct total and monthly amounts', () => {
  const amount = '100';
  const date = new Date('2024-12-01');
  const expectedTotalAmount = '$1,200.00';
  const expectedDonationAmount = '$100';
  const expectedDonationDate = 'December 2024';

  render(<DonationSummary amount={amount} date={date} />);

  expect(screen.getByText('Total amount')).toBeInTheDocument();
  expect(screen.getByTestId('donationTotalAmount')).toHaveTextContent(
    expectedTotalAmount
  );
  expect(screen.getByTestId('donationAmount')).toHaveTextContent(
    expectedDonationAmount
  );
  expect(screen.getByTestId('donationDate')).toHaveTextContent(
    expectedDonationDate
  );
});

it('displays the correct total and monthly amounts when amount is not provided', () => {
  const amount = undefined;
  const date = new Date('2024-12-01');
  const expectedTotalAmount = '$0.00';
  const expectedDonationAmount = '$0.00';
  const expectedDonationDate = 'December 2024';

  render(<DonationSummary amount={amount} date={date} />);

  expect(screen.getByText('Total amount')).toBeInTheDocument();
  expect(screen.getByTestId('donationTotalAmount')).toHaveTextContent(
    expectedTotalAmount
  );
  expect(screen.getByTestId('donationAmount')).toHaveTextContent(
    expectedDonationAmount
  );
  expect(screen.getByTestId('donationDate')).toHaveTextContent(
    expectedDonationDate
  );
});
