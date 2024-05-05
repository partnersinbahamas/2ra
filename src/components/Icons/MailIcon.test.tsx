import React from 'react';
import { render } from '@testing-library/react';
import MailIcon from './MailIcon';

test('MailIcon', () => {
  const { container } = render(<MailIcon />);
  expect(container).toMatchSnapshot();
});
