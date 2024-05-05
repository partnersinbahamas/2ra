import React from 'react';
import { render } from '@testing-library/react';
import SaveIcon from './SaveIcon';

describe('SaveIcon', () => {
  it('renders small', () => {
    const { container } = render(<SaveIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<SaveIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<SaveIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<SaveIcon />);
    expect(container).toMatchSnapshot();
  });
});
