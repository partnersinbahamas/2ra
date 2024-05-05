import React from 'react';
import { render } from '@testing-library/react';

import ExternalLinkIcon from './ExternalLinkIcon';

describe('ExternalLinkIcon', () => {
  it('renders small', () => {
    const { container } = render(<ExternalLinkIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ExternalLinkIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ExternalLinkIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ExternalLinkIcon />);
    expect(container).toMatchSnapshot();
  });
});
