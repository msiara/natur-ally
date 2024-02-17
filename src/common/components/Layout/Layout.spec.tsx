import { render, screen } from '../../../test/utils';
import Layout from '.';

it('renders navbar with logo and main content area with children correctly', () => {
  render(<Layout>Content</Layout>);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByAltText('Logo')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
});
