import React from 'react';
import { render } from '@testing-library/react';
import CalculatorIcon from './CalculatorIcon';

describe('CalculatorIcon', () => {
  it('renders small', () => {
    const { container } = render(<CalculatorIcon size="SMALL" />);
    expect(container).toMatchSnapshot();
  });
  it('renders medium', () => {
    const { container } = render(<CalculatorIcon size="MEDIUM" />);
    expect(container).toMatchSnapshot();
  });
  it('renders large', () => {
    const { container } = render(<CalculatorIcon size="LARGE" />);
    expect(container).toMatchSnapshot();
  });
  it('renders default', () => {
    const { container } = render(<CalculatorIcon />);
    expect(container).toMatchSnapshot();
  });
});
