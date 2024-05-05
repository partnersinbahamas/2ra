import React from 'react';
import { render } from '@testing-library/react';
import VisibilityOnIcon from './VisibilityOnIcon';

describe('VisibilityOnIcon', () => {
  it('renders small', () => {
    const { container } = render(<VisibilityOnIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<VisibilityOnIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<VisibilityOnIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<VisibilityOnIcon />);
    expect(container).toMatchSnapshot();
  });
});
