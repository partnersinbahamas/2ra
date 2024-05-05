import React from 'react';
import { render } from '@testing-library/react';

import CalendarIcon from './CalendarIcon';

describe('CalendarIcon', () => {
  it('renders small', () => {
    const { container } = render(<CalendarIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<CalendarIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<CalendarIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<CalendarIcon />);
    expect(container).toMatchSnapshot();
  });
});
