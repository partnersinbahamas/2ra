import React from 'react';
import { render } from '@testing-library/react';
import ReplaceIcon from './ReplaceIcon';

test('ReplaceIcon', () => {
  const { container } = render(<ReplaceIcon />);
  expect(container).toMatchSnapshot();
});
