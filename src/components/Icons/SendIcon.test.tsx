import React from 'react';
import { render } from '@testing-library/react';

import SendIcon from './SendIcon';

describe('SendIcon', () => {
  it('renders small', () => {
    const { container } = render(<SendIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SendIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SendIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SendIcon />);
    expect(container).toMatchSnapshot();
  });
});
