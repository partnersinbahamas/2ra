import { Meta, StoryObj } from "@storybook/react";
import { Todos } from "./Todos";

export const fakeTodos = [
  { name: 'First todo' },
  { name: 'Second todo' },
  { name: 'Third todo' },
];

const meta = {
  component: Todos,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    todos: { control: 'object' },
    styled: { control: 'boolean' },
  },
  args: {
    todos: fakeTodos,
    title: 'Todos',
  },
  render: (args, { loaded: { todos } }) => <Todos {...args} {...todos} />
} satisfies Meta<typeof Todos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loaders = (args: any) => <Todos {...args} />;

Loaders.args =  {
  title: 'Title',
}

Loaders.loaders = [
  async () => ({
    todos: await (await fetch('https://jsonplaceholder.typicode.com/todos')).json(),
  })
]

export const Default: Story = {
  args: {
    title: 'Title',
    todos: fakeTodos,
    styled: true,
  }
}