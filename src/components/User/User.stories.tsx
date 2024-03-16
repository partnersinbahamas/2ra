import { Meta, StoryObj} from "@storybook/react";
import { User } from "./User";
import { halfWidth } from '../../../.storybook/decorators';

const meta = {
  title: 'Displays/User',
  component: User,
  tags: ['autodocs'],
  args: {
    name: 'Denys Bokov',
    size: 'medium',
  },
  argTypes: {
    name: { control: 'text' },
    withBackGround: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] }
  },
  
} satisfies Meta<typeof User>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Denys Bokov',
  }
}

export const Background: Story = {
  args: {
    name: 'Denys Bokov',
    withBackGround: true,
    backgroundColor: '#eee'
  }
}

export const Half: Story = {
  args: {
    withBackGround: true,
    backgroundColor: '#eee',
  },
  decorators: [halfWidth],
}
