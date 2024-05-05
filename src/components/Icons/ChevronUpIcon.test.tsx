import React from 'react';
import { render } from '@testing-library/react';

import ChevronUpIcon from './ChevronUpIcon';

describe('ChevronUpIcon', () => {
  it('renders small', () => {
    const { container } = render(<ChevronUpIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ChevronUpIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ChevronUpIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ChevronUpIcon />);
    expect(container).toMatchSnapshot();
  });
});
