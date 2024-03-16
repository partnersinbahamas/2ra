import { Meta, StoryObj } from '@storybook/react';
import { Users } from "./Users";

const meta = {
  title: 'Displays/Users',
  component: Users,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    styled: { control: 'boolean' },
  },
  args: {
    title: 'Users',
    styled: true,
  },
} satisfies Meta<typeof Users>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    users: await(await fetch(
      'https://jsonplaceholder.typicode.com/users').then(res => res)
    ).json(),
  }
}