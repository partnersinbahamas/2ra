import React from 'react';
import { render } from '@testing-library/react';
import ArrowUpIcon from './ArrowUpIcon';

test('ArrowUpIcon', () => {
  const { container } = render(<ArrowUpIcon />);
  expect(container).toMatchSnapshot();
});
