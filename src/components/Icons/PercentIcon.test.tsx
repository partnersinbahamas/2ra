import React from 'react';
import { render } from '@testing-library/react';
import PercentIcon from './PercentIcon';

test('PercentIcon', () => {
  const { container } = render(<PercentIcon />);
  expect(container).toMatchSnapshot();
});
