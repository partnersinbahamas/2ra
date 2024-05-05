import React from 'react';
import { render } from '@testing-library/react';
import DocumentIcon from './DocumentIcon';

describe('DocumentIcon', () => {
  it('renders small', () => {
    const { container } = render(<DocumentIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<DocumentIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<DocumentIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<DocumentIcon />);
    expect(container).toMatchSnapshot();
  });
});
