import React from 'react';
import { render } from '@testing-library/react';
import AttachmentIcon from './AttachmentIcon';

describe('AttachmentIcon', () => {
  it('renders small', () => {
    const { container } = render(<AttachmentIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<AttachmentIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<AttachmentIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<AttachmentIcon />);
    expect(container).toMatchSnapshot();
  });
});
