import React from 'react';
import { render } from '@testing-library/react';
import DetachIcon from './DetachIcon';

test('DetachIcon', () => {
  const { container } = render(<DetachIcon />);
  expect(container).toMatchSnapshot();
});
