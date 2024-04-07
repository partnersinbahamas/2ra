import userEvent from "@testing-library/user-event";
import { Avatar } from "./Avatar";
import { render, screen } from "@testing-library/react";
import { YELLOW_600 } from "../Colors/colors";
import { TSizes } from "../../types/size";
import { toContainElement } from "@testing-library/jest-dom/matchers";

describe('Avatar', () => {
  const user = userEvent.setup();

  const firstName = 'Denys';
  const lastName = 'Bokov';
  const size: TSizes = 'medium';
    
  it('renders correclty', () => {
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
      />
    );
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass('medium');

    const badgeElement = screen.queryByTestId('badge');
    expect(badgeElement).toBeNull();

    const nameElement = screen.getByTestId('avatar-name');
    expect(nameElement).toHaveTextContent(`${firstName[0]}${lastName[0]}`);
    expect(container).toMatchSnapshot();
  });
  it('renders with background color', () => {
    const bgc = YELLOW_600;
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        backgroundColor={bgc}
      />
    );
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toHaveStyle(`backgroundColor: ${bgc}`);
    expect(container).toMatchSnapshot();
  });
  it('renders on click', async() => {
    const onClickHandler = jest.fn();

    render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        onClick={onClickHandler}
      />
    );

    const avatarElement = screen.getByTestId('avatar');
    await user.click(avatarElement);
    expect(onClickHandler).toHaveBeenCalled();
  });
  it('renders with stile primary', () => {
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        stile="primary"
      />
    );

    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement.getAttribute('data-stile')).toBe('primary');
    expect(container).toMatchSnapshot();
  });
  it('renders with badged', () => {
    const content = 'Badge content';
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        badged
        badgeContent={content}
      />
    );

    const badgeElement = screen.queryByTestId('badge');
    expect(badgeElement).not.toBeNull();

    expect(badgeElement).toHaveTextContent(content);

    expect(container).toMatchSnapshot();
  })
})