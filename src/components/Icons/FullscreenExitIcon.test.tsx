import React from 'react';
import { render } from '@testing-library/react';
import FullscreenExitIcon from './FullscreenExitIcon';

test('FullscreenExitIcon', () => {
  const { container } = render(<FullscreenExitIcon />);
  expect(container).toMatchSnapshot();
});
