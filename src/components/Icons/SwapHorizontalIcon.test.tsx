import React from 'react';
import { render } from '@testing-library/react';
import SwapHorizontalIcon from './SwapHorizontalIcon';

describe('SwapHorizontalIcon', () => {
  it('renders small', () => {
    const { container } = render(<SwapHorizontalIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SwapHorizontalIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SwapHorizontalIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SwapHorizontalIcon />);
    expect(container).toMatchSnapshot();
  });
});
