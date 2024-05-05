import React from 'react';
import { render } from '@testing-library/react';
import ExclamationMarkIcon from './ExclamationMarkIcon';

describe('ExclamationMarkIcon', () => {
  it('renders solid', () => {
    const { container } = render(<ExclamationMarkIcon size="SOLID" />);
    expect(container).toMatchSnapshot();
  });
  it('renders small', () => {
    const { container } = render(<ExclamationMarkIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ExclamationMarkIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ExclamationMarkIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ExclamationMarkIcon />);
    expect(container).toMatchSnapshot();
  });
});
