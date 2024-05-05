import React from 'react';
import { render } from '@testing-library/react';
import CopyIcon from './CopyIcon';

describe('CopyIcon', () => {
  it('renders small', () => {
    const { container } = render(<CopyIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CopyIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CopyIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CopyIcon />);
    expect(container).toMatchSnapshot();
  });
});
