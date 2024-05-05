import React from 'react';
import { render } from '@testing-library/react';
import CopyIconSimple from './CopyIconSimple';

test('CopyIconSimple', () => {
  const { container } = render(<CopyIconSimple />);
  expect(container).toMatchSnapshot();
});
