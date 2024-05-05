import { render } from '@testing-library/react';
import React from 'react';

import SlashIcon from './SlashIcon';

describe('SlashIcon', () => {
  it('renders small', () => {
    const { container } = render(<SlashIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SlashIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SlashIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SlashIcon />);
    expect(container).toMatchSnapshot();
  });
});
