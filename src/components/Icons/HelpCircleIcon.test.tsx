import React from 'react';
import { render } from '@testing-library/react';
import HelpCircleIcon from './HelpCircleIcon';

describe('HelpCircleIcon', () => {
  it('renders small', () => {
    const { container } = render(<HelpCircleIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<HelpCircleIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<HelpCircleIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<HelpCircleIcon />);
    expect(container).toMatchSnapshot();
  });
});
