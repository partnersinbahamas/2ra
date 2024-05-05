import React from 'react';
import { render } from '@testing-library/react';
import CancelIcon from './CancelIcon';

test('CancelIcon', () => {
  const { container } = render(<CancelIcon />);
  expect(container).toMatchSnapshot();
});
