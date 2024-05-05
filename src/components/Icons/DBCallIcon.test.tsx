import React from 'react';
import { render } from '@testing-library/react';
import DBCallIcon from './DBCallIcon';

test('DBCallIcon', () => {
  const { container } = render(<DBCallIcon />);
  expect(container).toMatchSnapshot();
});
