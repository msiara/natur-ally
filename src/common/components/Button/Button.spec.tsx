import { render, screen, fireEvent } from '../../../test/utils';
import Button from '.';

import styles from './Button.module.css';

it('should render a button with given children', () => {
  render(<Button variant="primary">Click me</Button>);

  expect(screen.getByText('Click me')).toBeInTheDocument();
});

it('should apply primary styling by default when variant is "primary"', () => {
  render(<Button variant="primary">Primary Button</Button>);

  expect(screen.getByText('Primary Button')).toHaveClass(styles.button);
  expect(screen.getByText('Primary Button')).toHaveClass(styles.primary);
});

it('should apply outline styling when variant is "outline"', () => {
  render(<Button variant="outline">Outline Button</Button>);

  expect(screen.getByText('Outline Button')).toHaveClass(styles.button);
  expect(screen.getByText('Outline Button')).toHaveClass(styles.outline);
});

it('should call provided onClick handler when clicked', () => {
  const handleClick = vi.fn();

  render(
    <Button variant="primary" onClick={handleClick}>
      Clickable
    </Button>
  );
  fireEvent.click(screen.getByText('Clickable'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
