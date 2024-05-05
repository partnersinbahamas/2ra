import React from 'react';
import { render } from '@testing-library/react';

import DownloadIcon from './DownloadIcon';

describe('DownloadIcon', () => {
  it('renders small', () => {
    const { container } = render(<DownloadIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<DownloadIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<DownloadIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<DownloadIcon />);
    expect(container).toMatchSnapshot();
  });
});
