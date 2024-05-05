import React from 'react';
import { render } from '@testing-library/react';
import ImageIcon from './ImageIcon';

test('ImageIcon', () => {
  const { container } = render(<ImageIcon />);
  expect(container).toMatchSnapshot();
});
