import React from 'react';
import { render } from '@testing-library/react';
import ShareIcon from './ShareIcon';

describe('ShareIcon', () => {
  it('renders small', () => {
    const { container } = render(<ShareIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ShareIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ShareIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ShareIcon />);
    expect(container).toMatchSnapshot();
  });
});
