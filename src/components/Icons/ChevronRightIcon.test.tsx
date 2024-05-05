import React from 'react';
import { render } from '@testing-library/react';

import ChevronRightIcon from './ChevronRightIcon';

describe('ChevronRightIcon', () => {
  it('renders small', () => {
    const { container } = render(<ChevronRightIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<ChevronRightIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<ChevronRightIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<ChevronRightIcon />);
    expect(container).toMatchSnapshot();
  });
});
