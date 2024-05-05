import React from 'react';
import { render } from '@testing-library/react';

import CloseIcon from './CloseIcon';

describe('CloseIcon', () => {
  it('renders small', () => {
    const { container } = render(<CloseIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CloseIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CloseIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CloseIcon />);
    expect(container).toMatchSnapshot();
  });
});
