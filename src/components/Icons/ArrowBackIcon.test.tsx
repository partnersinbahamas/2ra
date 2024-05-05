import React from 'react';
import { render } from '@testing-library/react';
import ArrowBackIcon from './ArrowBackIcon';

describe('ArrowBackIcon', () => {
  it('renders small', () => {
    const { container } = render(<ArrowBackIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ArrowBackIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ArrowBackIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ArrowBackIcon />);
    expect(container).toMatchSnapshot();
  });
});
