import React from 'react';
import { render } from '@testing-library/react';
import LightbulbIcon from './LightbulbIcon';

test('LightbulbIcon', () => {
  const { container } = render(<LightbulbIcon />);
  expect(container).toMatchSnapshot();
});
