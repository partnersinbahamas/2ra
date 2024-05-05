import React from 'react';

import { render } from '@testing-library/react';
import NoTrainIcon from './NoTrainIcon';

describe('NoTrainIcon', () => {
  it('renders small', () => {
    const { container } = render(<NoTrainIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });

  it('renders medium', () => {
    const { container } = render(<NoTrainIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });

  it('renders large', () => {
    const { container } = render(<NoTrainIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });

  it('renders default', () => {
    const { container } = render(<NoTrainIcon />);
    expect(container).toMatchSnapshot();
  });
});
