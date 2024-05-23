import React from 'react';
import { render } from '@testing-library/react';
import StarIcon from './StarIcon';

describe('StarIcon', () => {
  it('renders', () => {
    const { container } = render(<StarIcon />);
    expect(container).toMatchSnapshot();
  });

  it('renders half-filled', () => {
    const { container } = render(
      <StarIcon
        backgroundColor="white"
        color="red"
        borderColor="black"
        isHalfFilled
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
