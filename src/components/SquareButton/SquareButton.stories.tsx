import { Meta, StoryObj } from '@storybook/react';
import { SquareButon } from './SquareButton';

const meta = {
  title: 'Components/Buttons/SquareButton',
  component: SquareButon,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    radius: { control: 'number' },
    valiant: { control: 'inline-radio', options: ['primary', 'default'] }
  },
  args: {
    valiant: 'default',
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

export const Radiused: TStory = {
    args: {
      title: 'Radius',
      radius: 10,
    }
  };

export const Primary: TStory = {
  args: {
    title: 'Primary',
    valiant: 'primary',
  }
}