import React from 'react';
import { render } from '@testing-library/react';

import EditIcon from './EditIcon';

describe('EditIcon', () => {
  it('renders solid', () => {
    const { container } = render(<EditIcon size="SOLID" />);
    expect(container).toMatchSnapshot();
  });
  it('renders small', () => {
    const { container } = render(<EditIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<EditIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<EditIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<EditIcon />);
    expect(container).toMatchSnapshot();
  });
});
