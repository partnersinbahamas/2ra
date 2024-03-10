import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: 'Components/Athomic/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded', // padded, centered, fullscrean
  },
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
      label: 'Default Header component with color',
    },
  };