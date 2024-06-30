import { TStile } from '../../utils/types/types';
import { stiles } from '../../utils/variables';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const user = userEvent.setup();

  const props = {
    title: 'Button',
    onClick: jest.fn(),
    body: <div data-testid="body-element" />,
    disabled: false,
  };

  it('renders correctly', () => {
    const { container } = render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders with title', () => {
    const { container } = render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: props.title });
    expect(buttonElement).toHaveTextContent(props.title as string);
    expect(container).toMatchSnapshot();
  });

  it.each(stiles)('renders with stile', stile => {
    const { container } = render(<Button {...props} stile={stile as TStile} />);

    const buttonElement = screen.getByRole('button', { name: props.title });
    expect(buttonElement).toHaveAttribute('stile', stile);
    expect(container).toMatchSnapshot();
  });

  it('should render click handler', async () => {
    const { container } = render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: props.title });
    await user.click(buttonElement);

    expect(props.onClick).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  it('should renders with body', async () => {
    const { container } = render(<Button {...props} />);

    const bodyElement = screen.queryByTestId('body-element');
    expect(bodyElement).not.toBeNull();
    expect(bodyElement).toBeVisible();

    expect(container).toMatchSnapshot();
  });

  it.each(stiles)('should renders on disabled', stile => {
    const { container } = render(
      <Button {...props} disabled={true} stile={stile} />,
    );

    const buttonElement = screen.getByRole('button', { name: props.title });
    expect(buttonElement).toBeDisabled();

    expect(container).toMatchSnapshot();
  });

  it('renders on error', () => {
    const { container } = render(<Button {...props} error={true} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('error', 'true');

    expect(container).toMatchSnapshot();
  });
});
