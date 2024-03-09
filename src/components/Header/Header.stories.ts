import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: 'Testing storybook/Header',
  component: Header,
  argTypes: {
    label: { control: 'string' },
    backgroundColor: { control: 'color' },
    padding: { control: 'number' },
  }
} satisfies Meta<typeof Header>

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    backgroundColor: '#ddd',
    padding: 10,
    label: 'Default Header component',
  },
};