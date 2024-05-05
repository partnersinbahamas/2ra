import React from 'react';
import { render } from '@testing-library/react';
import LockIcon from './LockIcon';

test('LockIcon', () => {
  const { container } = render(<LockIcon />);
  expect(container).toMatchSnapshot();
});
