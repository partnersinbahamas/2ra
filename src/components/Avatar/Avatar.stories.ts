import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Avatar/Avatar';
import { TURQUOISE_300 } from '../Colors/colors';

/**
 * Avatar conponent with user picture and fullname.
 */

const meta = {
  title: 'Athomic/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    firstName: 'Denys',
    lastName: 'Bokov',
    backgroundColor: 'color',
  },
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    color: {control: 'text'},
  }
} satisfies Meta<typeof Avatar>;
export default meta;
type TStory = StoryObj<typeof meta>;

export const Background: TStory = {
  args: {
    size: 'large',
    backgroundColor: TURQUOISE_300,
  }
}

export const Small: TStory = {
  args: {
    size: 'small',
  },
};
export const Medium: TStory = {
  args: {
    size: 'medium',
  },
};
export const Large: TStory = {
  args: {
    size: 'large',
  },
}; 