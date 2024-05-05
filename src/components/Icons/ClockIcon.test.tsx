import React from 'react';
import { render } from '@testing-library/react';

import ClockIcon from './ClockIcon';

describe('ClockIcon', () => {
  it('renders small', () => {
    const { container } = render(<ClockIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ClockIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ClockIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ClockIcon />);
    expect(container).toMatchSnapshot();
  });
});
