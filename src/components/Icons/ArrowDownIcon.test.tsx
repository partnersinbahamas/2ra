import React from 'react';
import { render } from '@testing-library/react';
import ArrowDownIcon from './ArrowDownIcon';

test('ArrowDownIcon', () => {
  const { container } = render(<ArrowDownIcon />);
  expect(container).toMatchSnapshot();
});
