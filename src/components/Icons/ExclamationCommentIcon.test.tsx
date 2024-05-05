import React from 'react';
import { render } from '@testing-library/react';

import ExclamationCommentIcon from './ExclamationCommentIcon';

describe('ExclamationCommentIcon', () => {
  it('renders small', () => {
    const { container } = render(<ExclamationCommentIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<ExclamationCommentIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<ExclamationCommentIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<ExclamationCommentIcon />);
    expect(container).toMatchSnapshot();
  });
});
