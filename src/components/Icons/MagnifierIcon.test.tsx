import React from 'react';
import { render } from '@testing-library/react';
import MagnifierIcon from './MagnifierIcon';

describe('MagnifierIcon', () => {
  it('renders small', () => {
    const { container } = render(<MagnifierIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<MagnifierIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<MagnifierIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<MagnifierIcon />);
    expect(container).toMatchSnapshot();
  });
});
