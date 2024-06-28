import { Meta, StoryObj } from '@storybook/react';
import { DataTreeIcon } from '../../Icons';
import { story } from '../../utils/variables/story';
import { COOL_GRAY_100 } from '../../Colors/colors';
import IconButton from './IconButton';

const meta = {
  title: 'Athomic/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    labelPosition: 'bottom',
    children: <DataTreeIcon />,
  },
  argTypes: {
    children: story.children,
    size: story.size,
    label: story.title,
    onClick: story.onClick,
    stile: story.stile,
    backgroundColor: story.backgroundColor,
    showLabel: story.boolean,
    labelPosition: story.labelPosition,
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = { args: { children: <DataTreeIcon /> } };
export const DefaultLabel: TStory = {
  args: {
    stile: 'default',
    label: 'Default',
    showLabel: true,
  },
};

export const Primary: TStory = {
  args: {
    stile: 'primary',
  },
};

export const PrimaryLabel: TStory = {
  args: {
    stile: 'primary',
    label: 'Primary',
    showLabel: true,
  },
};

export const Mute: TStory = { args: { stile: 'mute' } };

export const Backgroup: TStory = {
  args: {
    backgroundColor: COOL_GRAY_100,
    children: <DataTreeIcon />,
  },
};
