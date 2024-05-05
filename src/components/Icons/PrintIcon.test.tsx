import React from 'react';
import { render } from '@testing-library/react';
import PrintIcon from './PrintIcon';

describe('PrintIcon', () => {
  it('renders small', () => {
    const { container } = render(<PrintIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<PrintIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<PrintIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<PrintIcon />);
    expect(container).toMatchSnapshot();
  });
});
