import React from 'react';
import { render } from '@testing-library/react';
import UnlockIcon from './UnlockIcon';

test('UnlockIcon', () => {
  const { container } = render(<UnlockIcon />);
  expect(container).toMatchSnapshot();
});
