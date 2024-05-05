import React from 'react';
import { render } from '@testing-library/react';
import WarnIcon from './WarnIcon';

test('WarnIcon', () => {
  const { container } = render(<WarnIcon />);
  expect(container).toMatchSnapshot();
});
