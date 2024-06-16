import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';
import CheckIcon from '../../Icons/SlashIcon';

// most part of the test cases is already provided in Button.test.tsx;
describe('IconButton', () => {
  it('renders correctly', () => {
    const label = 'IconButton-element';
    const { container } = render(
      <IconButton label={label}>
        <CheckIcon />
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: label })).toBeInTheDocument();

    const touchRippleElement = screen.getByTestId('touch-ripple');
    expect(touchRippleElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
