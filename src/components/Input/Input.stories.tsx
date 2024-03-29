import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/test";

import { ConnectOnChange } from '../../../.storybook/decorators';
import { Input } from "./Input";

const meta = {
  title: 'Athomic/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'radio',
      options: ['text', 'password', 'email', 'number']
    },
    onChange: { action: 'changed' },
    className: { control: 'text' },
    stile: { control: 'inline-radio', options: ['primary'] },
  },
  decorators: [ConnectOnChange],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Input',
    value: 'value',
  }
}
export const Error: Story = {
  args: {
    title: 'Handled error',
    error: '...pzzz..pz'
  }
}
export const Play: Story = {
  args: {
    value: '',
  },
  play: async (context) => {
    const canvas = within(context.canvasElement);

    const inputElement = canvas.getByDisplayValue('Play');
    await userEvent.type(inputElement, ' play fn', { delay: 100 });
  }
}