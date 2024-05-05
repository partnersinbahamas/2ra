import React from 'react';
import { render } from '@testing-library/react';
import SettingsPinIcon from './SettingsPinIcon';

describe('SettingsPinIcon', () => {
  it('renders', () => {
    const { container } = render(<SettingsPinIcon />);
    expect(container).toMatchSnapshot();
  });
});
