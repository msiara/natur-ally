import { formatValue } from 'react-currency-input-field';

export function formatMoney(value?: string) {
  return formatValue({
    decimalScale: 2,
    decimalSeparator: '.',
    groupSeparator: ',',
    prefix: '$',
    value: value === '' || !value ? '0' : value,
  });
}
