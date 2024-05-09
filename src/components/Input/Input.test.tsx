import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { stiles } from '../utils/variables';
import { Input } from './Input';

describe('Input', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  it('renders with input typing', async () => {
    render(<Input />);

    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, 'user typing...');
    expect(inputElement).toHaveValue('user typing...');
  });
  it('renders with error', () => {
    const { container } = render(<Input error="error" />);

    const errorElement = screen.queryByText('error');
    expect(errorElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it.each(stiles)('renders with each stile', stile => {
    const title = 'Input';
    const { container } = render(<Input stile={stile} title={title} />);

    const labelElement = screen.getByLabelText(`${title}-label`);
    const headingElement = screen.getByRole('heading', { name: title });
    const inputElement = screen.getByRole('textbox');

    expect(labelElement.getAttribute('stile')).toBe(stile);
    expect(headingElement.getAttribute('stile')).toBe(stile);
    expect(inputElement.getAttribute('stile')).toBe(stile);

    expect(container).toMatchSnapshot();
  });
});
