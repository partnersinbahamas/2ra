import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { YELLOW_600 } from '../Colors/colors';
import { TSize } from '../utils/types/types';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  const user = userEvent.setup();

  const abbreviation = 'SJ';
  const size: TSize = 'medium';

  it('renders correclty', () => {
    const { container } = render(<Avatar size={size} abbreviation={abbreviation} />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass('medium');

    const badgeElement = screen.queryByTestId('badge');
    expect(badgeElement).toBeNull();

    const nameElement = screen.getByTestId('avatar-abbreviation');
    expect(nameElement).toHaveTextContent(abbreviation);
    expect(container).toMatchSnapshot();
  });
  it('renders with background color', () => {
    const bgc = YELLOW_600;
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} backgroundColor={bgc} />,
    );
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toHaveStyle(`backgroundColor: ${bgc}`);
    expect(container).toMatchSnapshot();
  });
  it('renders on click', async () => {
    const onClickHandler = jest.fn();

    render(<Avatar size={size} abbreviation={abbreviation} onClick={onClickHandler} />);

    const avatarElement = screen.getByTestId('avatar');
    await user.click(avatarElement);
    expect(onClickHandler).toHaveBeenCalled();
  });
  it('renders with stile primary', () => {
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} stile="primary" />,
    );

    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement.getAttribute('data-stile')).toBe('primary');
    expect(container).toMatchSnapshot();
  });
  it('renders with badged', () => {
    const content = 'Badge content';
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} badged badgeContent={content} />,
    );

    const badgeElement = screen.queryByTestId('badge');
    expect(badgeElement).not.toBeNull();

    expect(badgeElement).toHaveTextContent(content);

    expect(container).toMatchSnapshot();
  });

  it('renders with name', () => {
    const firstName = 'Elon';
    const lastName = 'Musk';
    const fullNameAbbreviation = `${firstName[0]}${lastName[0]}`;
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} firstName={firstName} lastName={lastName} />,
    );
    const avatarNameElement = screen.getByTestId('avatar-abbreviation');
    expect(avatarNameElement).toHaveTextContent(fullNameAbbreviation);

    expect(container).toMatchSnapshot();
  });

  it('renders on disabled', () => {
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} disabled badged />,
    );

    const badgeElement = screen.getByTestId('badge');
    expect(badgeElement.getAttribute('aria-disabled')).toEqual('true');
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement.getAttribute('aria-disabled')).toEqual('true');

    expect(container).toMatchSnapshot();
  });

  it('renders with className props', () => {
    const className = 'avatar-className';
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} badged className={className} />,
    );
    const avatarElement = screen.getByTestId('badge');
    expect(avatarElement).toHaveClass(`${className}-badge`);
    expect(container).toMatchSnapshot();
  });
});
