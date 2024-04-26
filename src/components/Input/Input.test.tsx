import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-beySPh ErGXa"
        >
          <label
            class="sc-dmyCSP jGsYty"
            data-name="label"
          >
            <h3
              class="sc-eDLKkx ebsndr"
              data-name="heading"
            />
            <input
              class="sc-guDLey caCvKY error undefined-error undefined-error"
              data-name="input"
            />
          </label>
          <span
            class="sc-hLQSwg gpNhwr"
            data-name="error-message"
          >
            error
          </span>
        </div>
      </div>
    `);
  });
});
