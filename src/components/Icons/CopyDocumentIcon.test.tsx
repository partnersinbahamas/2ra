import React from 'react';
import { render } from '@testing-library/react';
import CopyDocumentIcon from './CopyDocumentIcon';

describe('CopyDocumentIcon', () => {
  it('renders small', () => {
    const { container } = render(<CopyDocumentIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CopyDocumentIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CopyDocumentIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CopyDocumentIcon />);
    expect(container).toMatchSnapshot();
  });
});
