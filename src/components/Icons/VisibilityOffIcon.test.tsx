import React from 'react';
import { render } from '@testing-library/react';
import VisibilityOffIcon from './VisibilityOffIcon';

describe('VisibilityOffIcon', () => {
  it('renders small', () => {
    const { container } = render(<VisibilityOffIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<VisibilityOffIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<VisibilityOffIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<VisibilityOffIcon />);
    expect(container).toMatchSnapshot();
  });
});
