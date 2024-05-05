import React from 'react';
import { render } from '@testing-library/react';

import ErrorTriangleIcon from './ErrorTriangleIcon';

describe('ErrorTriangleIcon', () => {
  it('renders solid', () => {
    const { container } = render(<ErrorTriangleIcon size="SOLID" />);
    expect(container).toMatchSnapshot();
  });
  it('renders small', () => {
    const { container } = render(<ErrorTriangleIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ErrorTriangleIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ErrorTriangleIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ErrorTriangleIcon />);
    expect(container).toMatchSnapshot();
  });
});
