import React from 'react';
import { render } from '@testing-library/react';
import DownloadCSVIcon from './DownloadCSVIcon';

test('DownloadCSVIcon', () => {
  const { container } = render(<DownloadCSVIcon />);
  expect(container).toMatchSnapshot();
});
