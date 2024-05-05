import React from 'react';
import { render } from '@testing-library/react';

import CheckCircleSolidIcon from './CheckCircleSolidIcon';

describe('CheckCircleSolidIcon', () => {
  it('renders small', () => {
    const { container } = render(<CheckCircleSolidIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<CheckCircleSolidIcon />);
    expect(container).toMatchSnapshot();
  });
});
