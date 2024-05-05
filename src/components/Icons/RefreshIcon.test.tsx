import React from 'react';
import { render } from '@testing-library/react';
import RefreshIcon from './RefreshIcon';

describe('RefreshIcon', () => {
  it('renders small', () => {
    const { container } = render(<RefreshIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<RefreshIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<RefreshIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<RefreshIcon />);
    expect(container).toMatchSnapshot();
  });
});
