import React from 'react';
import { render } from '@testing-library/react';
import DownloadXLSIcon from './DownloadXLSIcon';

test('DownloadXLSIcon', () => {
  const { container } = render(<DownloadXLSIcon />);
  expect(container).toMatchSnapshot();
});
