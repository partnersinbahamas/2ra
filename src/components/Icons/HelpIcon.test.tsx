import React from 'react';
import { render } from '@testing-library/react';
import HelpIcon from './HelpIcon';

test('HelpIcon', () => {
  const { container } = render(<HelpIcon />);
  expect(container).toMatchSnapshot();
});
