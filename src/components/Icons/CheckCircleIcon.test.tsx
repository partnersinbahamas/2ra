import React from 'react';
import { render } from '@testing-library/react';
import CheckCircleIcon from './CheckCircleIcon';

describe('CheckCircleIcon', () => {
  it('renders small', () => {
    const { container } = render(<CheckCircleIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CheckCircleIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CheckCircleIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CheckCircleIcon />);
    expect(container).toMatchSnapshot();
  });
});
