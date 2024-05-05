import React from 'react';
import { render } from '@testing-library/react';
import UploadIcon from './UploadIcon';

test('UploadIcon', () => {
  const { container } = render(<UploadIcon />);
  expect(container).toMatchSnapshot();
});
