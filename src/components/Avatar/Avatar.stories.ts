import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Avatar/Avatar';

const meta = {
  title: 'Displays/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    firstName: 'Denys',
    lastName: 'Bokov',
    size: 'medium',
  },
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  }
} satisfies Meta<typeof Avatar>;

export default meta

type TStory = StoryObj<typeof meta>;

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