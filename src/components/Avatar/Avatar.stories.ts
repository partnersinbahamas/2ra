import { Meta, StoryObj } from '@storybook/react';

import { TURQUOISE_300 } from '../Colors/colors';
import { Avatar } from '../Avatar/Avatar';
import me from '../../images/me.png';

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
  },
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    backgroundColor: { control: 'color' },
    badged: { control: 'boolean' },
    badgeContent: { control: 'text' },
    src: { control: 'text' },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: 'inline-radio',
      options: ['online', 'default', 'not-here', 'busy', 'sleep'],
    },
  }
} satisfies Meta<typeof Avatar>;
export default meta;
type TStory = StoryObj<typeof meta>;


export const Default: TStory = {
  args: {
    size: 'medium',
  }
};
export const Badged: TStory = {
  args: {
    size: 'medium',
    badged: true,
  }
};
export const BackgroundImage: TStory = {
  args: {
    size: 'large',
    src: me,
  }
};
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