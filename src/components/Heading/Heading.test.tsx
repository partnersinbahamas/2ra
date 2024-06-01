import { render, screen } from '@testing-library/react';
import Heading from './Heading';
import { levels } from '../utils/variables';

describe('Heading', () => {
  it.each(levels)('renders correctly', level => {
    const child = `Heading level ${level}`;
    const { container } = render(<Heading level={level}>{child}</Heading>);

    const headingElement = screen.getByRole('heading');
    expect(headingElement.tagName).toBe(`H${level}`);
    expect(headingElement).toHaveTextContent(child);

    expect(container).toMatchSnapshot();
  });
});
