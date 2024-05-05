import React from 'react';
import { render } from '@testing-library/react';
import SheetProgressIcon from './SheetProgressIcon';

test('SheetProgressIcon', () => {
  const { container } = render(<SheetProgressIcon />);
  expect(container).toMatchSnapshot();
});
