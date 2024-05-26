import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { TSize } from '../utils/types/types';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  const user = userEvent.setup();

  const abbreviation = 'SJ';
  const size: TSize = 'medium';

  it('renders correclty', () => {
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} />,
    );
    const avatarElement = screen.getByLabelText(`avatar ${abbreviation}`);
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass('medium');

    const badgeElement = screen.queryByTestId('badge');
    expect(badgeElement).toBeNull();

    const nameElement = screen.getByTestId('avatar-abbreviation');
    expect(nameElement).toHaveTextContent(abbreviation);
    expect(container).toMatchSnapshot();
  });
  it('renders on click', async () => {
    const onClickHandler = jest.fn();

    render(
      <Avatar
        size={size}
        abbreviation={abbreviation}
        onClick={onClickHandler}
      />,
    );

    const avatarElement = screen.getByLabelText(`avatar ${abbreviation}`);
    await user.click(avatarElement);
    expect(onClickHandler).toHaveBeenCalled();
  });
  it('renders with stile', () => {
    const stile = 'primary';
    const { container } = render(
      <Avatar size={size} abbreviation={abbreviation} stile={stile} />,
    );

    const avatarElement = screen.getByLabelText(`avatar ${abbreviation}`);
    expect(avatarElement.getAttribute('stile')).toBe(stile);
    expect(container).toMatchSnapshot();
  });
  it('renders with badge', () => {
    const content = 'Badge content';
    const { container } = render(
      <Avatar
        size={size}
        abbreviation={abbreviation}
        badged
        badgeContent={content}
      />,
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
      <Avatar
        size={size}
        abbreviation={abbreviation}
        firstName={firstName}
        lastName={lastName}
      />,
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
    expect(badgeElement).toHaveAttribute('disabled');
    const avatarElement = screen.getByLabelText(`avatar ${abbreviation}`);
    expect(avatarElement).toHaveAttribute('disabled');

    expect(container).toMatchSnapshot();
  });
});
