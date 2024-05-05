import React from 'react';
import { render } from '@testing-library/react';

import CancelCircleSolidIcon from './CancelCircleSolidIcon';

describe('CancelCircleSolidIcon', () => {
  it('renders small', () => {
    const { container } = render(<CancelCircleSolidIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<CancelCircleSolidIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<CancelCircleSolidIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<CancelCircleSolidIcon />);
    expect(container).toMatchSnapshot();
  });
});
