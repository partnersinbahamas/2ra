import React from 'react';
import { render } from '@testing-library/react';
import DeleteIcon from './DeleteIcon';

describe('DeleteIcon', () => {
  it('renders small', () => {
    const { container } = render(<DeleteIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<DeleteIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<DeleteIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<DeleteIcon />);
    expect(container).toMatchSnapshot();
  });
});
