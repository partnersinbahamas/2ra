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
  argTypes: {
    children: story.children,
    size: story.size,
    label: story.title,
    onClick: story.onClick,
    backgroundColor: story.backgroundColor,
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = { args: { children: <DataTreeIcon /> } };
export const Backgroup: TStory = {
  args: {
    backgroundColor: COOL_GRAY_100,
    children: <DataTreeIcon />,
  },
};
