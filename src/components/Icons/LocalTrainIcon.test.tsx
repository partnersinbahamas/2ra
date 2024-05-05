import React from 'react';

import { render } from '@testing-library/react';
import LocalTrainIcon from './LocalTrainIcon';

describe('LocalTrainIcon', () => {
  it('renders small', () => {
    const { container } = render(<LocalTrainIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<LocalTrainIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<LocalTrainIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<LocalTrainIcon />);
    expect(container).toMatchSnapshot();
  });
});
