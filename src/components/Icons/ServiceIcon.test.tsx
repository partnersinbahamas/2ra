import React from 'react';
import { render } from '@testing-library/react';

import ServiceIcon from './ServiceIcon';

describe('ServiceIcon', () => {
  it('renders small', () => {
    const { container } = render(<ServiceIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ServiceIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ServiceIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ServiceIcon />);
    expect(container).toMatchSnapshot();
  });
});
