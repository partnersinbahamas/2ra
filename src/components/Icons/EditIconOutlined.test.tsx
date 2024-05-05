import React from 'react';
import { render } from '@testing-library/react';
import EditIconOutlined from './EditIconOutlined';

test('EditIconOutlined', () => {
  const { container } = render(<EditIconOutlined />);
  expect(container).toMatchSnapshot();
});
