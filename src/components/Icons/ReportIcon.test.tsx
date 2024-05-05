import React from 'react';
import { render } from '@testing-library/react';
import ReportIcon from './ReportIcon';

test('ReportIcon', () => {
  const { container } = render(<ReportIcon />);
  expect(container).toMatchSnapshot();
});
