import React from 'react';
import { render } from '@testing-library/react';
import InfoIcon from './InfoIcon';

describe('InfoIcon', () => {
  it('renders solid', () => {
    const { container } = render(<InfoIcon size="SOLID" />);
    expect(container).toMatchSnapshot();
  });
  it('renders small', () => {
    const { container } = render(<InfoIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<InfoIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<InfoIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<InfoIcon />);
    expect(container).toMatchSnapshot();
  });
});
