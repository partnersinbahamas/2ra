import React from 'react';
import { render } from '@testing-library/react';
import DataTreeIcon from './DataTreeIcon';

describe('DataTreeIcon', () => {
  it('renders small', () => {
    const { container } = render(<DataTreeIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<DataTreeIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<DataTreeIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<DataTreeIcon />);
    expect(container).toMatchSnapshot();
  });
});
