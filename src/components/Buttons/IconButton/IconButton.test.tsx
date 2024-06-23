import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';
import CheckIcon from '../../Icons/SlashIcon';

// most part of the test cases is already provided in Button.test.tsx;
describe('IconButton', () => {
  const label = 'IconButton-element';

  it('renders correctly', () => {
    const { container } = render(
      <IconButton label={label}>
        <CheckIcon />
      </IconButton>,
    );

    const labelElement = screen.queryByText(label);
    expect(labelElement).not.toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: label });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.getAttribute('aria-label')).toBe(label);

    const touchRippleElement = screen.getByTestId('touch-ripple');
    expect(touchRippleElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders with visible label', () => {
    const { container } = render(
      <IconButton label={label} showLabel>
        <CheckIcon />
      </IconButton>,
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
