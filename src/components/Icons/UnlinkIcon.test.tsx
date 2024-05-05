import React from 'react';
import { render } from '@testing-library/react';
import UnlinkIcon from './UnlinkIcon';

test('UnlinkIcon', () => {
  const { container } = render(<UnlinkIcon />);
  expect(container).toMatchSnapshot();
});
