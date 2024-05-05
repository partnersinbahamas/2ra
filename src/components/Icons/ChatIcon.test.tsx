import React from 'react';
import { render } from '@testing-library/react';
import ChatIcon from './ChatIcon';

describe('ChatIcon', () => {
  it('renders solid', () => {
    const { container } = render(<ChatIcon size="SOLID" />);
    expect(container).toMatchSnapshot();
  });
  it('renders small', () => {
    const { container } = render(<ChatIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ChatIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ChatIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ChatIcon />);
    expect(container).toMatchSnapshot();
  });
});
