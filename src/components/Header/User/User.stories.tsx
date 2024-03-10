import { Meta, StoryObj} from "@storybook/react";
import { User } from "./User";
import { halfWidth } from '../../../../.storybook/decorators';

const meta = {
  title: 'Components/Athomic/User',
  component: User,
  tags: ['autodocs'],
  args: {
    name: 'Denys Bokov',
  },
  argTypes: {
    name: { control: 'text' },
    withBackGround: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  }
  
} satisfies Meta<typeof User>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Denys Bokov',
  }
}

export const WithBackGround: Story = {
  args: {
    withBackGround: true,
    backgroundColor: '#eee',
  }
}

export const WithHalfWidth: Story = {
  args: {
    withBackGround: true,
    backgroundColor: '#eee',
  },
  decorators: [halfWidth],
}
