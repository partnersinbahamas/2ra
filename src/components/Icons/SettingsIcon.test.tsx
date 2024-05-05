import React from 'react';
import { render } from '@testing-library/react';
import SettingsIcon from './SettingsIcon';

describe('SettingsIcon', () => {
  it('renders small', () => {
    const { container } = render(<SettingsIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SettingsIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SettingsIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SettingsIcon />);
    expect(container).toMatchSnapshot();
  });
});
