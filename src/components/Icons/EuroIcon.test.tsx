import React from 'react';
import { render } from '@testing-library/react';
import EuroIcon from './EuroIcon';

test('EuroIcon', () => {
  const { container } = render(<EuroIcon />);
  expect(container).toMatchSnapshot();
});
