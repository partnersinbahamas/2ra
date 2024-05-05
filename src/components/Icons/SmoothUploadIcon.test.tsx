import React from 'react';
import { render } from '@testing-library/react';

import SmoothUploadIcon from './SmoothUploadIcon';

describe('SmoothUploadIcon', () => {
  it('renders small', () => {
    const { container } = render(<SmoothUploadIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SmoothUploadIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SmoothUploadIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SmoothUploadIcon />);
    expect(container).toMatchSnapshot();
  });
});
