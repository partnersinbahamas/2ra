import React from 'react';
import { render } from '@testing-library/react';
import AddCircleIcon from './AddCircleIcon';

describe('AddCircleIcon', () => {
  it('renders small', () => {
    const { container } = render(<AddCircleIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<AddCircleIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<AddCircleIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<AddCircleIcon />);
    expect(container).toMatchSnapshot();
  });
});
