import React from 'react';
import { render } from '@testing-library/react';
import AddIcon from './AddIcon';

describe('AddIcon', () => {
  it('renders small', () => {
    const { container } = render(<AddIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<AddIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<AddIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<AddIcon />);
    expect(container).toMatchSnapshot();
  });
});
