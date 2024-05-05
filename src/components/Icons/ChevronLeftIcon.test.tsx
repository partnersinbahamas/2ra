import React from 'react';
import { render } from '@testing-library/react';

import ChevronLeftIcon from './ChevronLeftIcon';

describe('ChevronLeftIcon', () => {
  it('renders small', () => {
    const { container } = render(<ChevronLeftIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<ChevronLeftIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<ChevronLeftIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<ChevronLeftIcon />);
    expect(container).toMatchSnapshot();
  });
});
