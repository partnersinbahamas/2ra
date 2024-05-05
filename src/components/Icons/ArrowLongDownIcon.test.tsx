import React from 'react';
import { render } from '@testing-library/react';
import ArrowLongDownIcon from './ArrowLongDownIcon';

test('ArrowLongDownIcon', () => {
  const { container } = render(<ArrowLongDownIcon />);
  expect(container).toMatchSnapshot();
});
