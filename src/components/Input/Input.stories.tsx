import { Meta, StoryObj } from "@storybook/react";
import { ConnectOnChange } from '../../../.storybook/decorators';
import { Input } from "./Input";

const meta = {
  title: 'Components/Athomic/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
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