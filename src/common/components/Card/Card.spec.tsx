import { render, screen } from '../../../test/utils';
import Card from '.';

it('renders with correct structure and content', () => {
  render(<Card>Test Content</Card>);

  expect(screen.getByAltText('Giving Block')).toBeInTheDocument();
  expect(screen.getByText('The giving block')).toBeInTheDocument();
  expect(screen.getByText('Set up your donation goal!')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});
