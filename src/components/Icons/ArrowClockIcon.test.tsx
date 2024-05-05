import React from 'react';
import { render } from '@testing-library/react';
import ArrowClockIcon from './ArrowClockIcon';

describe('ArrowClockIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<ArrowClockIcon />);
    expect(container).toMatchSnapshot();
  });
});
