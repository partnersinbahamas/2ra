import React from 'react';
import { render } from '@testing-library/react';
import OpenPageIcon from './OpenPageIcon';

describe('OpenPageIcon', () => {
  it('renders small', () => {
    const { container } = render(<OpenPageIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<OpenPageIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<OpenPageIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<OpenPageIcon />);
    expect(container).toMatchSnapshot();
  });
});
