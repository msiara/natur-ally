import { fireEvent, render, screen } from '../../../test/utils';
import IconButton from '.';
import { ICONS } from './IconButton.constants';

it('renders correctly with the given icon', () => {
  const iconName = 'chevron-left';
  render(<IconButton iconName="chevron-left" />);

  expect(screen.getByRole('button')).toBeInTheDocument();

  const icon = screen.getByAltText(ICONS[iconName].alt);

  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute('src', ICONS[iconName].src);
});

it('passes additional props to the button', () => {
  const handleClick = vi.fn();
  render(<IconButton iconName="chevron-right" onClick={handleClick} />);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('applies custom className', () => {
  const customClass = 'customClass';
  render(<IconButton iconName="chevron-right" className={customClass} />);

  expect(screen.getByRole('button')).toHaveClass(customClass);
});
