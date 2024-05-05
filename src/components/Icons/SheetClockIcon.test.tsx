import React from 'react';
import { render } from '@testing-library/react';
import SheetClockIcon from './SheetClockIcon';

test('SheetClockIcon', () => {
  const { container } = render(<SheetClockIcon />);
  expect(container).toMatchSnapshot();
});
