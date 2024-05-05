import React from 'react';
import { render } from '@testing-library/react';
import NoTelemetryDataIcon from './NoTelemetryDataIcon';

test('NoTelemetryDataIcon', () => {
  const { container } = render(<NoTelemetryDataIcon />);
  expect(container).toMatchSnapshot();
});
