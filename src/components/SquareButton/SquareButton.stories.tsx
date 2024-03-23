import { Meta, StoryObj } from '@storybook/react';
import { SquareButon } from './SquareButton';

const meta = {
  title: 'Components/Buttons/SquareButton',
  component: SquareButon,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof SquareButon>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = {};

export const Disabled: TStory = {
  args: {
    title: 'Disabled',
    disabled: true,
  }
};