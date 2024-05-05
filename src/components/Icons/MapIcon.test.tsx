import React from 'react';
import { render } from '@testing-library/react';
import MapIcon from './MapIcon';

test('MapIcon', () => {
  const { container } = render(<MapIcon />);
  expect(container).toMatchSnapshot();
});
