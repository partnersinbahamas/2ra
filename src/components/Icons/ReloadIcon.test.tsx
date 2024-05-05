import React from 'react';
import { render } from '@testing-library/react';
import ReloadIcon from './ReloadIcon';

test('ReloadIcon', () => {
  const { container } = render(<ReloadIcon />);
  expect(container).toMatchSnapshot();
});
