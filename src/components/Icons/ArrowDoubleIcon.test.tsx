import React from 'react';
import { render } from '@testing-library/react';
import ArrowDoubleIcon from './ArrowDoubleIcon';

test('ArrowDoubleIcon', () => {
  const { container } = render(<ArrowDoubleIcon />);
  expect(container).toMatchSnapshot();
});
