import React from 'react';
import { render } from '@testing-library/react';
import CheckIcon from './CheckIcon';

describe('CheckIcon', () => {
  it('renders small', () => {
    const { container } = render(<CheckIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CheckIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CheckIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CheckIcon />);
    expect(container).toMatchSnapshot();
  });
});
