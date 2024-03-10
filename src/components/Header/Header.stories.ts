import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: 'Testing storybook/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
    backgroundColor: { control: 'color' },
    padding: { control: 'number' },
    color: { control: 'color' },
    fontFamily: {
      control: 'inline-radio',
      options: ['Courier New', 'Franklin Gothic Medium', 'Gill Sans'],
    }
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

export const HeaderWithColors: Story = {
    args: {
      backgroundColor: '#ddd',
      padding: 10,
      label: 'Default Header component',
    },
  };