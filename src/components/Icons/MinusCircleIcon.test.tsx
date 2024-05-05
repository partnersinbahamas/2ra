import React from 'react';
import { render } from '@testing-library/react';
import MinusCircleIcon from './MinusCircleIcon';

describe('MinusCircleIcon', () => {
  it('renders small', () => {
    const { container } = render(<MinusCircleIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<MinusCircleIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<MinusCircleIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<MinusCircleIcon />);
    expect(container).toMatchSnapshot();
  });
});
