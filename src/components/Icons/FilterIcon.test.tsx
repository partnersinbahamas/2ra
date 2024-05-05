import React from 'react';
import { render } from '@testing-library/react';
import FilterIcon from './FilterIcon';

describe('FilterIcon', () => {
  it('renders small', () => {
    const { container } = render(<FilterIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<FilterIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<FilterIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<FilterIcon />);
    expect(container).toMatchSnapshot();
  });
});
