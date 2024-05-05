import React from 'react';
import { render } from '@testing-library/react';
import ChevronDownIcon from './ChevronDownIcon';

describe('ChevronDownIcon', () => {
  it('renders small', () => {
    const { container } = render(<ChevronDownIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ChevronDownIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ChevronDownIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ChevronDownIcon />);
    expect(container).toMatchSnapshot();
  });
});
