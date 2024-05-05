import React from 'react';
import { render } from '@testing-library/react';
import MinusIcon from './MinusIcon';

describe('MinusIcon', () => {
  it('renders small', () => {
    const { container } = render(<MinusIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<MinusIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<MinusIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<MinusIcon />);
    expect(container).toMatchSnapshot();
  });
});
