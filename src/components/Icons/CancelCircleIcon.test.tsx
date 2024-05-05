import React from 'react';
import { render } from '@testing-library/react';
import CancelCircleIcon from './CancelCircleIcon';

test('CancelCircleIcon', () => {
  const { container } = render(<CancelCircleIcon />);
  expect(container).toMatchSnapshot();
});
